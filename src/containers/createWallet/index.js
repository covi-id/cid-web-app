import React, { useCallback } from "react";
import { Formik } from "formik";
import { object, string, bool, ref, number, mixed, reach } from "yup";

import {
  Form,
  Left,
  Right,
  Footer,
  BodyContainer,
  MobileNumberContainer
} from "./styles";
import TextInput from "components/textInput";
import FileUpload from "components/fileUpload";
import Button from "components/button";
import walletFormContainer from "stateContainers/walletFormContainer";
import { useHistory } from "react-router-dom";
import Checkbox from "components/checkbox";
import Select from "components/select";
import FormLabel from "components/shared/formLabel";
import api from "api";
import FormHeader from "components/formHeader";

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

const VALIDATION_SCHEMA = object().shape({
  firstName: string()
    .label("First Name")
    .required("*Required"),

  lastName: string()
    .label("Last Name")
    .required("*Required"),

  mobileNumber: string()
    .label("Mobile Number")
    .length(9, "Invalid number")
    .required("*Required"),

  countryCode: string().required(),

  identificationType: string()
    .label("Document Type")
    .required("*Required"),

  identificationValue: string()
    .when("identificationType", {
      is: "IdentificationDocument",
      then: string().length(13),
      otherwise: string().length(8)
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
      console.log(photo.split(",")[0]);
      const createWalletData = {
        firstName,
        lastName,
        photo: photo.split(",")[1],
        mobileNumber: mobileNumber
      };

      try {
        const { data } = await api.wallet.createWallet(createWalletData);
        await walletFormContainer.set({
          walletId: data.walletId,
          picture: data.picture
        });
        twoStepCallback(walletFormContainer.state);
      } catch (error) {
        console.log(error);
      }
    },
    [twoStepCallback]
  );

  return (
    <>
      <FormHeader heading="Enter details" />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={addDataToState}
      >
        {({ handleSubmit, handleChange, values, errors }) => {
          return (
            <Form onSubmit={handleSubmit}>
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
                    <TextInput
                      name="countryCode"
                      containerStyle={{ width: "100px", marginRight: "10px" }}
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
                      <a
                        href="https://docs.google.com/document/d/19u3WE-w5VfNNyxQrYmZxsRRHH-WY0VBfE1eMmxRf9rQ/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        privacy policy
                      </a>
                    </>
                  }
                />

                <Button type="submit" onClick={handleSubmit}>
                  Next
                </Button>
              </Footer>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateWallet;
