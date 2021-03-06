import React, { useCallback, useState, useEffect } from "react";
import { Formik } from "formik";
import { object, string, bool } from "yup";
import { toast } from "react-toastify";
import * as international from "libphonenumber-js";

import {
  Form,
  Left,
  Right,
  Footer,
  BodyContainer,
  MobileNumberContainer,
  CheckboxLink,
} from "./styles";
import TextInput from "components/textInput";
import FileUpload from "components/fileUpload";
import Button from "components/button";
import walletFormContainer from "stateContainers/walletFormContainer";
import Checkbox from "components/checkbox";
import Select from "components/select";
import FormLabel from "components/shared/formLabel";
import api from "api";
import FormHeader from "components/formHeader";
import Recaptcha from "components/recaptcha";
import countries from "constants/countries";
import useQuery from "hooks/useQuery";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  consent: false,
  photo: "",
  countryCode: "ZA",
  email: "email@email.com",
};

const containsNumbers = (value) => {
  return /[0-9]/gm.test(value);
};

const containsLetters = (value) => {
  return /[a-zA-Z]/gm.test(value);
};

const containsSpecialCharacters = (value) => {
  return /[$!%*#?&]/gm.test(value);
};

const VALIDATION_SCHEMA = object().shape({
  firstName: string()
    .label("First Name")
    .required("*Required")
    .max(32)
    .test(
      "Special characters",
      "Must not contain numbers",
      (value) => !containsNumbers(value)
    ),

  lastName: string()
    .label("Last Name")
    .required("*Required")

    .max(32, "Must be less than 32 characters")
    .test(
      "Special characters",
      "Must not contain numbers",
      (value) => !containsNumbers(value)
    ),

  mobileNumber: string()
    .label("Mobile Number")
    .min(9, "Invalid number")
    .max(16, "Invalid number")
    .required("*Required")
    .test(
      "Special characters",
      "Invalid number",
      (value) => !containsLetters(value)
    )
    .test(
      "Special characters",
      "Invalid number",
      (value) => !containsSpecialCharacters(value)
    ),

  countryCode: string().required(),

  photo: string("*Required").test("photo", "Unsupported format", (value) =>
    /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
      value
    )
  ),
  consent: bool()
    .label("Consent")
    .required("*Required")

    .test(
      "Test for true",
      "You must agree to the privacy policy before proceeding",
      (value) => value === true
    ),
});

function getNumberFormat(mobileNumber, countryCode) {
  const pn = international.parsePhoneNumberFromString(
    mobileNumber,
    countryCode
  );

  if (pn) {
    const returbObj = {
      international: pn.format("E.164").replace("+", ""),
      national: pn.format("NATIONAL").replace(/[\D]/g, ""),
    };
    return returbObj;
  }

  return null;
}

const CreateWallet = ({ twoStepCallback }) => {
  const [loading, setLoading] = useState(false);
  const [reCaptchaSuccess, setRecaptchaSuccess] = useState(false);
  const { sessionId } = useQuery();

  useEffect(() => {
    async function updateFormWalletWithSessionId() {
      await walletFormContainer.set({ sessionId });
    }

    updateFormWalletWithSessionId(sessionId);
  }, [sessionId]);

  const addDataToState = useCallback(
    async (values) => {
      const mobileNumberFormatted = getNumberFormat(
        values.mobileNumber,
        values.countryCode
      );
      await walletFormContainer.set({
        walletDetails: {
          ...values,
          mobileNumber: mobileNumberFormatted.international,
          photo: values.photo.split(",")[1],
        },
      });

      const createWalletData = {
        mobileNumber: mobileNumberFormatted.international,
        mobileNumberReference: mobileNumberFormatted.national,
      };

      setLoading(true);

      try {
        const { data } = sessionId
          ? await api.wallet.createWalletWithSessionId(
              sessionId,
              createWalletData
            )
          : await api.wallet.createWallet(createWalletData);

        await walletFormContainer.set({
          token: data.token,
        });
        twoStepCallback(walletFormContainer.state);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    },
    [twoStepCallback, sessionId]
  );

  function handleReCAPTCHA() {
    setRecaptchaSuccess(true);
  }

  return (
    <>
      <FormHeader heading="Enter details" />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={(values) => reCaptchaSuccess && addDataToState(values)}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => {
          return (
            <>
              <Form
                hasErrors={
                  Object.keys(errors).length > 0 ||
                  Object.keys(touched).length === 0
                }
                onSubmit={handleSubmit}
              >
                <BodyContainer>
                  <Left>
                    <TextInput
                      placeholder="Enter name"
                      name="firstName"
                      label="Name"
                    />
                    <TextInput
                      name="lastName"
                      placeholder="Enter last name"
                      label="Last name"
                    />
                    <FormLabel
                      name="mobileNumber"
                      description="Mobile Number"
                      error={errors["mobileNumber"]}
                    />
                    <MobileNumberContainer>
                      <Select
                        containerStyle={{ width: "110px", marginRight: "10px" }}
                        name="countryCode"
                        displayProp="dial_code"
                        valueProp="code"
                        items={countries.sort(
                          (a, b) =>
                            a.dial_code.substring(1) - b.dial_code.substring(1)
                        )}
                      />
                      <TextInput
                        name="mobileNumber"
                        type="number"
                        placeholder="Enter mobile number"
                      />
                    </MobileNumberContainer>
                  </Left>

                  <Right>
                    <FileUpload
                      name="photo"
                      label="Upload picture"
                      dropText="Drop files :)"
                      placeholder="Drag and drop or click to add file here."
                    />
                  </Right>
                </BodyContainer>
                <Footer>
                  <Checkbox
                    name="consent"
                    onChange={handleChange}
                    labelInlineInd={true}
                    checked={!!values?.consent}
                    label={
                      <>
                        By proceeding, I consent to the{" "}
                        <CheckboxLink
                          href="https://docs.google.com/document/d/19u3WE-w5VfNNyxQrYmZxsRRHH-WY0VBfE1eMmxRf9rQ/edit?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          privacy policy
                        </CheckboxLink>
                      </>
                    }
                  />
                  <Recaptcha name="recaptcha" handleChange={handleReCAPTCHA} />
                  <Button
                    disabled={loading}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Next
                  </Button>
                </Footer>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateWallet;
