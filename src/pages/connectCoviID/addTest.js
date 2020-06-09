import React from "react";
import {
  Container,
  CardsContainer,
  Heading,
  HeadingContainer,
} from "./styles.js";
import Card from "components/card";
import { CovidLogo, QrLogo } from "components/card/styles.js";

const cards = [
  // {
  //   icon: <PhoneLogo />,
  //   text: 'Scan my QR using my phone',
  //   buttonText: 'Scan QR code',
  //   link: '',
  // },
  {
    type: "file",
    icon: <QrLogo />,
    text: "I have my QR image download",
    buttonText: "Upload QR code",
    onClick: () => {},
  },
  {
    type: "link",
    icon: <CovidLogo />,
    text: "I don't have a Covi-ID yet",
    buttonText: "Generate ",
    link: "/create-wallet/details",
  },
];

const ConnectCoviid_AddTest = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Connect Covi-ID</Heading>
      </HeadingContainer>
      <CardsContainer>
        {cards.map((card, key) => (
          <Card key={key} {...card} />
        ))}
        <Card />
      </CardsContainer>
    </Container>
  );
};
export default ConnectCoviid_AddTest;
