import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import {
  Container,
  Card,
  TextContainer,
  Text,
  ButtonWrapper,
  Heading,
} from "./styles.js";

import SmallButton from "components/smallButton";
import api from "api/index.js";
import walletFormContainer from "stateContainers/walletFormContainer";
import getNewTaskPubKey from "utils/getNewTaskPubKey.js";
import keyPairContainer from "stateContainers/keyPairContainer.js";
import { encrypt } from "utils/cryptography.js";
import nProgress from 'nprogress';

const VerificationConsent = ({ cancel }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { wallet_id } = walletFormContainer.state;
  const { publicKey, privateKey } = keyPairContainer.state;

  const deleteWallet = useCallback(
    async (value) => {
      if (!value) {
        history.goBack();
        return;
      }
      nProgress.start()
      setLoading(true);
      try {
        const { taskPubKey } = await getNewTaskPubKey(publicKey);
        const encryptedUserId = encrypt(taskPubKey, privateKey, wallet_id);
        const payload = {
          walletId: wallet_id,
        };
        const encryptedData = encrypt(
          taskPubKey,
          privateKey,
          JSON.stringify(payload)
        );

        const {
          result: { deleteWallet },
        } = await api.wallet.deleteWallet({
          encryptedUserId,
          userPubKey: publicKey,
          encryptedData,
        });

        if (deleteWallet.status !== 0) {
          throw new Error("Unable to delete wallet");
        }

        history.push("/delete-wallet/complete" + value);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
        nProgress.done()
      }
    },
    [history, privateKey, publicKey, wallet_id]
  );

  return (
    <Container>
      <Card>
        <TextContainer>
          <Heading>
            Are you sure you want to permanently delete your data with Covi-ID?
          </Heading>
          <Text>
            Once your data is deleted, we will not be able to notify you if you
            have come into contact with someone with COVID-19 in the past 2
            weeks!
          </Text>
        </TextContainer>
        <ButtonWrapper>
          <SmallButton
            disabled={loading}
            onClick={() => deleteWallet(false)}
            buttonStyles={{ background: "#D3FDF0", color: "#03CE8E" }}
          >
            No
          </SmallButton>
          <SmallButton disabled={loading} onClick={() => deleteWallet(true)}>
            Yes
          </SmallButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
export default VerificationConsent;
