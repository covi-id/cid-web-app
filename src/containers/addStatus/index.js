import React, { useCallback } from "react";
import { Formik } from "formik";
import { object, string, bool } from "yup";

import {
  Form,
  Left,
  Right,
  Footer,
  BodyContainer,
  TestDateSection
} from "./styles";
import TextInput from "components/textInput";
import FileUpload from "components/fileUpload";
import Button from "components/button";
import walletFormContainer from "stateContainers/walletFormContainer";
import { useHistory } from "react-router-dom";
import RadioButton from "components/radioButton";
import Select from "components/select";

const INITIAL_VALUES = {
  tested: false,
  testDate: ""
};

const VALIDATION_SCHEMA = object().shape({
  tested: bool().required()
});

const AddStatus = () => {
  const history = useHistory();
  const addDataToState = useCallback(
    values => {
      walletFormContainer.set(values);
      history.push("/create-wallet/status");
    },
    [history]
  );
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={addDataToState}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <BodyContainer>
            <RadioButton
              name="tested"
              options={[
                { label: "Yes", value: true, checked: true },
                { label: "No", value: false, checked: false }
              ]}
              label="Have you done a CoviID test?"
            />
            <TestDateSection>
              <TextInput
                name="testDate"
                placeholder="Enter date"
                label="Test date"
              />
              <Select
                name="testDate"
                placeholder="Please select"
                label="Laboratory"
                items={[]}
              />
            </TestDateSection>
          </BodyContainer>

          <Footer>
            <Button type="submit" onClick={handleSubmit}>
              Update Status
            </Button>
          </Footer>
        </Form>
      )}
    </Formik>
  );
};

export default AddStatus;
