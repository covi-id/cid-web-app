import React from "react";
import {
  Container,
  Card,
  TextContainer,
  SmallText,
  CoviidIcon,
  Heading,
  ButtonLinkOverride,
  DisplayInline,
  SocialText,
} from "./styles";

import ButtonLink from "components/buttonLink";
import { useParams } from "react-router-dom";
import SocialMediaLinks from "components/socialMediaLinks";
import walletFormContainer from 'stateContainers/walletFormContainer';

const cardsTextConsentFalse = [
  {
    text:
      "Your test details have been added to your Covi-ID as unverified data.",
  },
];

const cardsTextConsentTrue = [
  {
    text:
      "Your test details have been added to you Covi-ID as unverified data.",
  },
  { text: "You will be notified via SMS once we have verified your results." },
  {
    text:
      "Your COVID-19 status will be updated to verified on successful verification.",
  },
];

const CoviidUpdated = () => {
  const { consent } = useParams();
  const { result_status } = walletFormContainer.state.covidTest

  const consented = Boolean(consent);

  const textToShow = consented ? cardsTextConsentFalse : cardsTextConsentTrue;

  const isTestPostive = result_status === "Positive" ? true : false;

  return (
    <Container>
      <CoviidIcon />
      <Heading>Covi-ID Updated</Heading>
      {textToShow.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <SmallText>{card.text}</SmallText>
          </TextContainer>
        </Card>
      ))}
      <DisplayInline>
        {isTestPostive ? (
          <ButtonLinkOverride>
            <ButtonLink to="/create-wallet/status/updated/ct-sharing">
              Next
            </ButtonLink>
          </ButtonLinkOverride>
        ) : (
          <>
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
          </>
        )}
      </DisplayInline>
      {!isTestPostive && (
        <>
          <SocialText>Share</SocialText>
          <SocialMediaLinks />
        </>
      )}
    </Container>
  );
};
export default CoviidUpdated;
