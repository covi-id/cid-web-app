import React, { useCallback, useState } from "react";
import {
  Container,
  Card,
  TextContainer,
  Text,
  Bold,
  LargeText,
  ButtonWrapper
} from "./styles.js";

import SmallButton from "components/smallButton";
import api from "api/index.js";
import walletFormContainer from "stateContainers/walletFormContainer.js";
import { useHistory } from "react-router-dom";

const cardText = [
  {
    paraOne:
      "In order to verify do you consent to us sharing the following data with the laboratory you indicated that completed this test.",
    boldOne: "Your verified mobile number",
    boldTwo: "Your test reference number",
    paraTwo:
      "On successful verification, your COVI-ID status will be updated to verified.",
    largeText: "Do you consent to this verification?"
  }
];

const VerificationConsent = ({ cancel }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { covidTest, walletId } = walletFormContainer.state;

  const submitNewTest = useCallback(
    async value => {
      if (!value) {
        cancel();
        return;
      }

      setLoading(true);
      try {
        await api.wallet.updateTest(walletId, {
          ...covidTest,
          hasConsent: value
        });
        history.push("/consent/coviid-updated/dark");
      } catch (error) {
      } finally {
        setLoading(false);
      }
    },
    [cancel, covidTest, history, walletId]
  );
  return (
    <Container>
      {cardText.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <Text>{card.paraOne}</Text>
            <Bold>{card.boldOne}</Bold>
            <Bold>{card.boldTwo}</Bold>
            <Text>{card.paraTwo}</Text>
            <LargeText>{card.largeText}</LargeText>
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
