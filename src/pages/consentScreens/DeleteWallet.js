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

const VerificationConsent = ({ cancel }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { walletId } = walletFormContainer.state;

  const deleteWallet = useCallback(
    async (value) => {
      if (!value) {
        history.goBack();
        return;
      }
      setLoading(true);
      try {
        const response = await api.wallet.deleteWallet(walletId);
        console.log(response);
        history.push("/create-wallet/status/updated/" + value);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    },
    [history, walletId]
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
