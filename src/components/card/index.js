import React, { useCallback } from "react";
import {
  StyledCard,
  Text,
  TextBox,
  ItemWrapper,
  PhoneLogo,
  QrLogo,
  CovidLogo,
  FileInput,
  FileUpload
} from "./styles";
import ButtonLink from "components/buttonLink";
import Button from "components/button";
import { Formik } from "formik";
import toBase64 from "utils/toBase64";
import decodeQr from "utils/decodeQrB64";
import getImageData from "utils/getImageData";
import walletFormContainer from "stateContainers/walletFormContainer";
import { useHistory } from "react-router-dom";

const cardsInfo = [
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
    onClick: () => {}
  },

  {
    type: "link",
    icon: <CovidLogo />,
    text: "I don't have a Covi-ID yet",
    buttonText: "Generate ",
    link: "/create-wallet/details"
  }
];

const Card = () => {
  const history = useHistory();
  const handleQrUpload = useCallback(
    async ({ target }) => {
      var image = new Image();

      const file = target.files[0];
      const imageUrl = URL.createObjectURL(file);

      image.src = imageUrl;

      image.onload = async () => {
        const { width, height } = image;
        const walletId = decodeQr(getImageData(image).data, width, height);
        await walletFormContainer.set({ walletId });
        history.push("/create-wallet/status");
      };
    },
    [history]
  );

  return (
    <>
      {cardsInfo.map((card, index) => (
        <React.Fragment key={index}>
          {card.type === "link" && (
            <StyledCard>
              <ItemWrapper>
                {card.icon}
                <TextBox>
                  <Text>{card.text}</Text>
                  <ButtonLink to={card.link}>{card.buttonText}</ButtonLink>
                </TextBox>
              </ItemWrapper>
            </StyledCard>
          )}
          {card.type === "file" && (
            <StyledCard>
              <ItemWrapper>
                {card.icon}
                <TextBox>
                  <Text>{card.text}</Text>
                  <Formik>
                    <FileUpload>
                      <FileInput type="file" onChange={handleQrUpload} />
                      <Button onClick={card.onClick}>{card.buttonText}</Button>
                    </FileUpload>
                  </Formik>
                </TextBox>
              </ItemWrapper>
            </StyledCard>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default Card;