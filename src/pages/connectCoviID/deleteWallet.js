import React from "react";
import {
  Container,
  CardsContainer,
  Heading,
  HeadingContainer,
} from "./styles.js";
import Card from "components/card";
import { QrLogo } from "components/card/styles.js";

const cards = [
  {
    type: "file",
    icon: <QrLogo />,
    text: "I have my QR image download",
    buttonText: "Upload QR code",
    onClick: () => {},
  },
];

const ConnectDeleteWallet = ({ purpose }) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Connect Covi-ID</Heading>
      </HeadingContainer>
      <CardsContainer>
        {cards.map((card, key) => (
          <Card key={key} {...card} purpose={purpose} />
        ))}
        <Card />
      </CardsContainer>
    </Container>
  );
};
export default ConnectDeleteWallet;
