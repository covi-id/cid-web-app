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
import api from "api";
import { encrypt, decrypt } from "utils/cryptography";
import getNewTaskPubKey from "utils/getNewTaskPubKey";
import keyPairContainer from "stateContainers/keyPairContainer";

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
        const { publicKey, privateKey } = keyPairContainer.state;
        try {
          const { width, height } = image;
          const covidStatusUrl = decodeQr(
            getImageData(image).data,
            width,
            height
          );

          const { walletId } = JSON.parse(covidStatusUrl);
          const { taskPubKey } = await getNewTaskPubKey(publicKey);
          const getWalletPayload = {
            wallet_Id: walletId,
          };
          const encryptedGetWalletPayload = encrypt(
            taskPubKey,
            privateKey,
            JSON.stringify(getWalletPayload)
          );
          const encryptedUserId = encrypt(taskPubKey, privateKey, walletId);
          const {
            result: { getWallet },
          } = await api.wallet.getWallet({
            encryptedUserId,
            encryptedData: encryptedGetWalletPayload,
            userPubKey: publicKey,
          });
          if (getWallet.status !== 0) {
            throw new Error("Invalid Covi-ID QR");
          }
          const decryptedData = decrypt(
            taskPubKey,
            privateKey,
            getWallet.encryptedOutput
          );
          await walletFormContainer.set({
            wallet_id: walletId,
            walletDetails: decryptedData,
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
