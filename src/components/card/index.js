import React from "react";
import {
  StyledCard,
  Text,
  TextBox,
  ItemWrapper,
  PhoneLogo,
  QrLogo,
  CovidLogo
} from "./styles";
import ButtonLink from "components/buttonLink";

const cardsInfo = [
  // {
  //   icon: <PhoneLogo />,
  //   text: 'Scan my QR using my phone',
  //   buttonText: 'Scan QR code',
  //   link: '',
  // },
  {
    icon: <QrLogo />,
    text: "I have my QR image download",
    buttonText: "Upload QR code",
    link: ""
  },

  {
    icon: <CovidLogo />,
    text: "I don't have a Covi-ID yet",
    buttonText: "Generate ",
    link: "/create-wallet/details"
  }
];

const Card = () => {
  return (
    <>
      {cardsInfo.map((card, index) => (
        <StyledCard key={index}>
          <ItemWrapper>
            {card.icon}
            <TextBox>
              <Text>{card.text}</Text>
              <ButtonLink to={card.link}>{card.buttonText}</ButtonLink>
            </TextBox>
          </ItemWrapper>
        </StyledCard>
      ))}
    </>
  );
};

export default Card;
