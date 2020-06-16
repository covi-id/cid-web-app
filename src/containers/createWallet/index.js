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
import countries from "constants/countries";
import useQuery from "hooks/useQuery";
import getNewTaskPubKey from "utils/getNewTaskPubKey";
import keyPairContainer from "stateContainers/keyPairContainer";
import { encrypt, decrypt } from "utils/cryptography";
import Sha256 from "utils/sha256";

const INITIAL_VALUES = {
  first_name: "",
  last_name: "",
  mobile_number: "",
  has_consent: false,
  photo_reference: "",
  country_code: "ZA",
  is_my_mobile_number: false,
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
  first_name: string()
    .label("First Name")
    .required("*Required")
    .max(32)
    .test(
      "Special characters",
      "Must not contain numbers",
      (value) => !containsNumbers(value)
    ),

  last_name: string()
    .label("Last Name")
    .required("*Required")

    .max(32, "Must be less than 32 characters")
    .test(
      "Special characters",
      "Must not contain numbers",
      (value) => !containsNumbers(value)
    ),

  is_my_mobile_number: bool().required(),

  mobile_number: string()
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

  country_code: string().required(),

  photo_reference: string("*Required").test(
    "photo",
    "Unsupported format",
    (value) =>
      /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
        value
      )
  ),
  has_consent: bool()
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
        values.mobile_number,
        values.country_code
      );
      await walletFormContainer.set({
        walletDetails: {
          ...values,
          mobile_number: mobileNumberFormatted.international,
          photo_reference: "image_thingy_mah_bobby",
        },
      });

      const hashed_mobile_number = Sha256.hash(mobileNumberFormatted);

      const createWalletData = {
        ...walletFormContainer.state.walletDetails,
        hashed_mobile_number,
        //TODO: Add in image once api is ready
        photo_reference: "image_thingy_mah_bobby",
        created_at: new Date().toISOString(),
        mobile_number_verified: false
      };

      setLoading(true);

      try {
        const { taskPubKey } = await getNewTaskPubKey(
          keyPairContainer.state.publicKey
        );

        // ENCRYPT DATA WITH NEW SERVER PUB KEY
        const encryptedData = encrypt(
          taskPubKey,
          keyPairContainer.state.privateKey,
          JSON.stringify(createWalletData)
        );

        // CREATE WALLET
        const { result } = await api.wallet.createWallet({
          userPubKey: keyPairContainer.state.publicKey,
          encryptedData,
          mobileNumber: walletFormContainer.state.walletDetails.mobile_number,
        });

        // GET WALLETID FROM DECRYPTED PAYLOAD
        const { wallet_id } = decrypt(
          taskPubKey,
          keyPairContainer.state.privateKey,
          result.createWallet.encryptedOutput
        );

        // SET WALLET ID
        await walletFormContainer.set({
          wallet_id,
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

  return (
    <>
      <FormHeader heading="Enter details" />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={addDataToState}
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
                      name="first_name"
                      label="Name"
                    />
                    <TextInput
                      name="last_name"
                      placeholder="Enter last name"
                      label="Last name"
                    />
                    <FormLabel
                      name="mobile_number"
                      description="Mobile Number"
                      error={errors["mobileNumber"]}
                    />
                    <MobileNumberContainer>
                      <Select
                        containerStyle={{ width: "110px", marginRight: "10px" }}
                        name="country_code"
                        displayProp="dial_code"
                        valueProp="code"
                        items={countries.sort(
                          (a, b) =>
                            a.dial_code.substring(1) - b.dial_code.substring(1)
                        )}
                      />
                      <TextInput
                        name="mobile_number"
                        type="number"
                        placeholder="Enter mobile number"
                      />
                    </MobileNumberContainer>
                  </Left>

                  <Right>
                    <FileUpload
                      name="photo_reference"
                      label="Upload picture"
                      dropText="Drop files :)"
                      placeholder="Drag and drop or click to add file here."
                    />
                  </Right>
                </BodyContainer>
                <Footer>
                  <Checkbox
                    name="has_consent"
                    onChange={handleChange}
                    labelInlineInd={true}
                    checked={!!values?.has_consent}
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
