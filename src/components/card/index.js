import React, { useCallback } from "react";
import { toast } from "react-toastify";
import {
  StyledCard,
  Text,
  TextBox,
  ItemWrapper,
  QrLogo,
  CovidLogo,
  FileInput,
  FileUpload
  // PhoneLogo,
} from "./styles";
import ButtonLink from "components/buttonLink";
import Button from "components/button";
import { Formik } from "formik";
import decodeQr from "utils/decodeQrB64";
import getImageData from "utils/getImageData";
import walletFormContainer from "stateContainers/walletFormContainer";
import { useHistory } from "react-router-dom";
import getWalletIdFromCovidStatusUrl from "utils/getWalletIdFromCovidStatusUrl";

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
        try {
          const { width, height } = image;
          const covidStatusUrl = decodeQr(
            getImageData(image).data,
            width,
            height
          );
          const walletId = getWalletIdFromCovidStatusUrl(covidStatusUrl);
          await walletFormContainer.set({ walletId });
          history.push("/create-wallet/status");
        } catch (error) {
          toast.error("Invalid Covi-ID QR");
        }
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
