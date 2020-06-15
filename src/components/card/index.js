import React, { useCallback } from "react";
import { toast } from "react-toastify";
import {
  StyledCard,
  Text,
  TextBox,
  ItemWrapper,
  FileInput,
  FileUpload,
} from "./styles";
import ButtonLink from "components/buttonLink";
import Button from "components/button";
import { Formik } from "formik";
import decodeQr from "utils/decodeQrB64";
import getImageData from "utils/getImageData";
import walletFormContainer from "stateContainers/walletFormContainer";
import { useHistory } from "react-router-dom";

/**
 *
 * @param {"deleteWallet" | "addTest"} purpose
 */
function getUrl(purpose) {
  switch (purpose) {
    case "deleteWallet":
      return "/delete-wallet";
    default:
      return "/create-wallet/status";
  }
}

const Card = ({ type, icon, link, text, buttonText, onClick, purpose }) => {
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

          const qrData = JSON.parse(covidStatusUrl);
          await walletFormContainer.set({
            wallet_id: qrData.walletId,
            key: qrData.key,
          });

          const nextPage = getUrl(purpose);
          history.push(nextPage);
        } catch (error) {
          toast.error("Invalid Covi-ID QR");
        }
      };
    },
    [history, purpose]
  );

  if (type === "file") {
    return (
      <StyledCard>
        <ItemWrapper>
          {icon}
          <TextBox>
            <Text>{text}</Text>
            <Formik>
              <FileUpload>
                <FileInput type="file" onChange={handleQrUpload} />
                <Button onClick={onClick}>{buttonText}</Button>
              </FileUpload>
            </Formik>
          </TextBox>
        </ItemWrapper>
      </StyledCard>
    );
  }

  if (type === "link")
    return (
      <StyledCard>
        <ItemWrapper>
          {icon}
          <TextBox>
            <Text>{text}</Text>
            <ButtonLink to={link}>{buttonText}</ButtonLink>
          </TextBox>
        </ItemWrapper>
      </StyledCard>
    );

  return null;
};

export default Card;
