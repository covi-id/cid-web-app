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

const INITIAL_VALUES = {
  otp: "",
};

const VALIDATION_SCHEMA = object().shape({
  otp: string().length(4).required().label("Code"),
});

const OtpContainer = ({ otpSubmitData }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { walletDetails } = otpSubmitData;
  const onSubmitHandler = useCallback(
    async ({ otp }) => {
      setLoading(true);
      try {
        const { data } = await api.auth.confirmOtp({
          otp,
          walletDetails: {
            ...walletDetails,
          },
        });

        await walletFormContainer.set({
          key: data.key,
          walletId: data.walletId,
        });

        history.push("/create-wallet/created");
      } catch (error) {
        toast(error);
      } finally {
        setLoading(false);
      }
    },
    [history, walletDetails]
  );

  const resendOtp = useCallback(async () => {
    setLoading(true);
    try {
      const { token } = walletFormContainer.state;
      const { data } = await api.auth.resendOtp(
        { mobileNumber: walletDetails.mobileNumber },
        { Authorization: token }
      );

      await walletFormContainer.set({
        token: data.token,
      });
    } catch (error) {
      toast(error);
    } finally {
      setLoading(false);
    }
  }, [walletDetails.mobileNumber]);

  return (
    <Container>
      <Heading1>Verification code</Heading1>
      <LeadText>
        Please enter the verification
        <br /> code sent to <strong>{walletDetails.mobileNumber}</strong>
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
