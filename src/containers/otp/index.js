import React, { useCallback, useState } from "react";
import { Formik } from "formik";
import { string, object } from "yup";
import { toast } from "react-toastify";

import OtpInput from "components/otpInput";
import { Button } from "components/button/styles";
import Heading1 from "components/shared/h1";

import { Form, LeadText, Container } from "./styles";
import api from "api";
import { useHistory } from "react-router-dom";
import walletFormContainer from "stateContainers/walletFormContainer";
import { encrypt, decrypt } from "utils/cryptography";
import getNewTaskPubKey from "utils/getNewTaskPubKey";
import keyPairContainer from "stateContainers/keyPairContainer";

const INITIAL_VALUES = {
  otp: "",
};

const VALIDATION_SCHEMA = object().shape({
  otp: string().length(6).required().label("Code"),
});

const OtpContainer = ({ otpSubmitData }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { wallet_id } = otpSubmitData;
  const { privateKey, publicKey } = keyPairContainer.state;

  const onSubmitHandler = useCallback(
    async ({ otp }) => {
      setLoading(true);
      try {
        // CONSTRUCT PAYLOAD
        const payload = {
          otp,
        };

        // GET NEW KEY
        const { taskPubKey } = await getNewTaskPubKey(publicKey);

        // ENCRYPT DATA
        const encryptedData = encrypt(
          taskPubKey,
          privateKey,
          JSON.stringify(payload)
        );

        const encryptedUserId = encrypt(taskPubKey, privateKey, wallet_id);

        const body = {
          encryptedData,
          userPubKey: publicKey,
          encryptedUserId,
        };

        // DECONSTRUCT RESULT
        const {
          result: { mobileConfirm },
        } = await api.mobileVerification.confirm(body);

        if (!mobileConfirm || mobileConfirm.status !== 0)
          throw new Error("Failed to confirm otp");

        history.push("/create-wallet/created");
      } catch (error) {
        toast(error);
      } finally {
        setLoading(false);
      }
    },
    [history, privateKey, publicKey, wallet_id]
  );

  const resendOtp = useCallback(async () => {
    setLoading(true);
    try {
      // const { token } = walletFormContainer.state;
      // const { data } = await api.auth.resendOtp(
      //   { mobileNumber: walletDetails.mobileNumber },
      //   { Authorization: token }
      // );
      // await walletFormContainer.set({
      //   token: data.token,
      // });
    } catch (error) {
      toast(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      <Heading1>Verification code</Heading1>
      <LeadText>
        Please enter the verification
        <br /> code sent to{" "}
        <strong>{walletFormContainer.state.mobile_number}</strong>
      </LeadText>
      <Formik
        validationSchema={VALIDATION_SCHEMA}
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <OtpInput name="otp" />
            <Button
              type="button"
              disabled={loading}
              onClick={resendOtp}
              variant="secondary"
            >
              Resend OTP
            </Button>
            <Button disabled={loading} onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default OtpContainer;
