import React, { useCallback, useState } from "react";
import { Formik } from "formik";
import { object, string, bool } from "yup";
import { toast } from "react-toastify";

import {
  Form,
  Left,
  Right,
  Footer,
  BodyContainer,
  MobileNumberContainer,
  CheckboxLink
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

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  consent: false,
  photo: "",
  countryCode: "+27",
  identificationType: "",
  identificationValue: ""
};

const containsNumbers = value => {
  return /[0-9]/gm.test(value);
};

const containsLetters = value => {
  return /[a-zA-Z]/gm.test(value);
};

const containsSpecialCharacters = value => {
  return /[$!%*#?&]/gm.test(value);
};

const VALIDATION_SCHEMA = object().shape({
  firstName: string()
    .label("First Name")
    .required("*Required")
    .test(
      "Special characters",
      "Must not contain numbers",
      value => !containsNumbers(value)
    ),

  lastName: string()
    .label("Last Name")
    .required("*Required")
    .test(
      "Special characters",
      "Must not contain numbers",
      value => !containsNumbers(value)
    ),

  mobileNumber: string()
    .label("Mobile Number")
    .length(9, "Invalid number")
    .required("*Required")
    .test(
      "Special characters",
      "Invalid number",
      value => !containsLetters(value)
    )
    .test(
      "Special characters",
      "Invalid number",
      value => !containsSpecialCharacters(value)
    ),

  countryCode: string().required(),

  identificationType: string()
    .label("Document Type")
    .required("*Required"),

  identificationValue: string()
    .when("identificationType", {
      is: "IdentificationDocument",
      then: string("*Required").matches(/^[0-9]{13}$/, "Must be 13 characters"),
      otherwise: string("*Required").min(6, "*Required")
    })
    .label("Identity Number"),

  photo: string("*Required").test("picture", "*Required", value =>
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
      value => value === true
    )
});

const CreateWallet = ({ twoStepCallback }) => {
  const [loading, setLoading] = useState(false);
  const [reCaptchaSuccess, setRecaptchaSuccess] = useState(false);

  const addDataToState = useCallback(
    async values => {
      await walletFormContainer.set({
        person: {
          ...values,
          mobileNumber: `${values.countryCode.replace("+", "")}${
            values.mobileNumber
          }`
        }
      });
      const {
        state: {
          person: { firstName, lastName, mobileNumber, photo }
        }
      } = walletFormContainer;

      const createWalletData = {
        firstName,
        lastName,
        photo: photo.split(",")[1],
        mobileNumber: mobileNumber
      };

      setLoading(true);

      try {
        const { data } = await api.wallet.createWallet(createWalletData);
        await walletFormContainer.set({
          walletId: data.walletId,
          picture: data.picture,
          covidStatusUrl: data.covidStatusUrl
        });
        twoStepCallback(walletFormContainer.state);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    },
    [twoStepCallback]
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
        onSubmit={values => reCaptchaSuccess && addDataToState(values)}
      >
        {({ handleSubmit, handleChange, values, errors }) => {
          return (
            <>
              <Form
                hasErrors={
                  Object.keys(errors).length > 0 ||
                  Object.keys(touched).length === 0
                }
                onSubmit={handleSubmit}>
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
                        valueProp="dial_code"
                        items={countries.sort()}
                      />
                      <TextInput
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                      />
                    </MobileNumberContainer>
                    <Select
                      placeholder="Please select"
                      label="Document Type"
                      name="identificationType"
                      displayProp="label"
                      valueProp="value"
                      items={[
                        {
                          label: "SA ID Number",
                          value: "IdentificationDocument"
                        },
                        { label: "Passport", value: "Passport" }
                      ]}
                    />
                  </Left>

                  <Right>
                    <FileUpload
                      name="photo"
                      label="Upload picture"
                      dropText="Drop files :)"
                      placeholder="Drag and drop or click to add file here."
                    />
                    <TextInput
                      name="identificationValue"
                      placeholder={
                        values.identificationType === "IdentificationDocument"
                          ? "Enter 13 digit ID"
                          : "Enter passport ID"
                      }
                      label={
                        values.identificationType === "IdentificationDocument"
                          ? "SA ID Number"
                          : "Passport Number"
                      }
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
