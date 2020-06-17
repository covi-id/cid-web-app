import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import {
  Container,
  Card,
  TextContainer,
  Text,
  ButtonWrapper,
} from "./styles.js";

import SmallButton from "components/smallButton";
import api from "api/index.js";
import walletFormContainer from "stateContainers/walletFormContainer";
import getNewTaskPubKey from "utils/getNewTaskPubKey.js";
import keyPairContainer from "stateContainers/keyPairContainer.js";
import { encrypt, decrypt } from "utils/cryptography.js";
import nProgress from 'nprogress';

const ContactTracerSharing = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { wallet_id } = walletFormContainer.state;
  const { publicKey, privateKey } = keyPairContainer.state;

  const submitConsent = useCallback(
    async (value) => {
      if (!value) {
        history.push(`/`);
        return;
      }
      nProgress.start()
      setLoading(true);
      try {
        const { taskPubKey } = await getNewTaskPubKey(publicKey);
        const encryptedUserId = encrypt(taskPubKey, privateKey, wallet_id);
        const {
          result: { submitConsent },
        } = await api.testResults.submitConsent({
          encryptedUserId,
          userPubKey: publicKey,
        });

        if (submitConsent.status !== 0) {
          throw new Error("Unable to give consent to share data");
        }

        const { consent_code } = decrypt(
          taskPubKey,
          privateKey,
          submitConsent.encryptedOutput
        );

        history.push("/create-wallet/shared/contact-tracer", { consent_code });
      } catch (error) {
        toast.error(error);
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
          <Text>
            In order to notify anyone in the Covi-ID ecosystem who may be at{" "}
          </Text>
          <ul style={{ color: `#7c7795` }}>
            <li>
              <b>
                Your anonymised checkins will be submitted to Safe Places
                <br />
                <br />
              </b>
            </li>
            <li>
              <b>
                Organisations you have visited may be notified of the date and
                time their premises was at risk
              </b>
            </li>
          </ul>
          <Text>
            I consent to my anonymised data being sent to Safe Places to
            contribute towards national contact tracing.
          </Text>
        </TextContainer>
        <ButtonWrapper>
          <SmallButton
            disabled={loading}
            onClick={() => history.push("/")}
            buttonStyles={{ background: "#D3FDF0", color: "#03CE8E" }}
          >
            No
          </SmallButton>
          <SmallButton disabled={loading} onClick={() => submitConsent(true)}>
            Yes
          </SmallButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
export default ContactTracerSharing;
