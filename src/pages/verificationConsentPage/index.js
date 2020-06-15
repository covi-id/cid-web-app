import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import {
  Container,
  Card,
  TextContainer,
  Text,
  LargeText,
  ButtonWrapper,
} from "./styles.js";

import SmallButton from "components/smallButton";
import api from "api/index.js";
import walletFormContainer from "stateContainers/walletFormContainer";
import getNewTaskPubKey from "utils/getNewTaskPubKey.js";
import { encrypt } from "utils/cryptography.js";
import keyPairContainer from "stateContainers/keyPairContainer.js";

const cardText = [
  {
    paraOne:
      "In order to verify do you consent to us sharing the following data with the laboratory you indicated that completed this test.",
    boldOne: "Your verified mobile number",
    boldTwo: "Your test reference number",
    paraTwo:
      "On successful verification, your COVI-ID status will be updated to verified.",
    largeText: "Do you consent to this verification?",
  },
];

const VerificationConsent = ({ cancel }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { covidTest, wallet_id } = walletFormContainer.state;
  const { privateKey, publicKey } = keyPairContainer.state;

  const submitNewTest = useCallback(
    async (value) => {
      setLoading(true);
      try {
        const payload = {
          ...covidTest,
          has_consent: value,
          test_type: "Covid19",
          laboratory_status: "Unsent",
          issued_at: new Date().toISOString(),
          permission_granted_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        };

        const { taskPubKey } = await getNewTaskPubKey(publicKey);

        const encryptedData = encrypt(
          taskPubKey,
          privateKey,
          JSON.stringify(payload)
        );

        const encryptedUserId = encrypt(taskPubKey, privateKey, wallet_id);

        const {
          result: { addWalletTestResult },
        } = await api.testResults.addTestResult({
          userPubKey: publicKey,
          encryptedData,
          encryptedUserId,
        });

        if (addWalletTestResult.status !== 0) {
          throw new Error("Unable to add test result");
        }

        history.push("/create-wallet/status/updated/" + value);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    },
    [covidTest, history, privateKey, publicKey, wallet_id]
  );
  return (
    <Container>
      {cardText.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <Text>{card.paraOne}</Text>
            <br />
            <Text>
              <b>{card.boldOne}</b>
            </Text>
            <Text>
              <b>{card.boldTwo}</b>
            </Text>
            <br />
            <Text>{card.paraTwo}</Text>
            <br />
            <LargeText>{card.largeText}</LargeText>
            <br />
          </TextContainer>
          <ButtonWrapper>
            <SmallButton
              disabled={loading}
              onClick={() => submitNewTest(false)}
              buttonStyles={{ background: "#D3FDF0", color: "#03CE8E" }}
            >
              No
            </SmallButton>
            <SmallButton disabled={loading} onClick={() => submitNewTest(true)}>
              Yes
            </SmallButton>
          </ButtonWrapper>
        </Card>
      ))}
    </Container>
  );
};
export default VerificationConsent;
