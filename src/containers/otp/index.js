import React, { useCallback } from "react";
import { Formik } from "formik";
import { string, object } from "yup";

import OtpInput from "components/otpInput";
import { Button } from "components/button/styles";
import Heading1 from "components/shared/h1";

import { Form, LeadText, Container } from "./styles";

const INITIAL_VALUES = {
  otp: ""
};

const VALIDATION_SCHEMA = object().shape({
  otp: string()
    .length(4)
    .required()
    .label("Code")
});

const OtpContainer = ({ receiver = "0766971653" }) => {
  const onSubmitHandler = useCallback(values => {
    console.log({ values });
  }, []);

  const resendOtp = useCallback(() => {}, []);

  return (
    <Container>
      <Heading1>Verification code</Heading1>
      <LeadText>
        Please enter the verification
        <br /> code sent to <strong>{receiver}</strong>
      </LeadText>
      <Formik
        validationSchema={VALIDATION_SCHEMA}
        initialValues={INITIAL_VALUES}
        onSubmit={onSubmitHandler}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <OtpInput name="otp" />
            <Button type="button" variant="secondary">
              Resend OTP
            </Button>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default OtpContainer;
