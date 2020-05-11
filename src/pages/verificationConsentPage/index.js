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
  const { covidTest, walletId } = walletFormContainer.state;

  const submitNewTest = useCallback(
    async (value) => {
      setLoading(true);
      try {
        await api.testResults.addTestResult({
          ...covidTest,
          walletId,
          hasConsent: value,
        });
        history.push("/create-wallet/status/updated/" + value);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    },
    [covidTest, history, walletId]
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
