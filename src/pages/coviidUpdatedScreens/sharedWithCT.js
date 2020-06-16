import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  TextContainer,
  SmallText,
  CoviidIcon,
  Heading,
  SocialText,
  ButtonLinkOverride,
  DisplayInline,
  OtpContainer,
  OtpCharacter,
} from "./styles";

import SocialMediaLinks from "components/socialMediaLinks";
import ButtonLink from "components/buttonLink";
import { useLocation, useHistory } from "react-router-dom";

const cardsTextConsentTrue = [
  {
    text:
      "Please provide this verification code to the contact tracer during your contact tracing interview.",
  },
];

const SharedWithCT = () => {
  const { state } = useLocation();
  const history = useHistory();
  const [consentCode, setConsetCode] = useState("");

  useEffect(() => {
    if (!state.consent_code) {
      throw new Error("No consent code provided. Invalid access.");
    }
    setConsetCode(state.consent_code);

    return function () {
      history.replace({ ...history.location, state: {} });
    };
  }, [history, state.consent_code]);

  return (
    <Container>
      <CoviidIcon />
      <Heading>Verification Code</Heading>
      {cardsTextConsentTrue.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <SmallText>{card.text}</SmallText>
          </TextContainer>
        </Card>
      ))}
      <OtpContainer>
        {consentCode.split("").map((letter, key) => (
          <OtpCharacter key={key}>{letter}</OtpCharacter>
        ))}
      </OtpContainer>
      <DisplayInline>
        <ButtonLinkOverride>
          <ButtonLink
            href="https://thedeltastudio.typeform.com/to/yU2WAB"
            target="_blank"
          >
            Give Feedback
          </ButtonLink>
        </ButtonLinkOverride>

        <ButtonLinkOverride>
          <ButtonLink to="/">Home</ButtonLink>
        </ButtonLinkOverride>
      </DisplayInline>
      <SocialText>Share</SocialText>
      <SocialMediaLinks />
    </Container>
  );
};
export default SharedWithCT;
