import React, { useCallback } from "react";
import { Formik } from "formik";
import { object, bool, date, string } from "yup";

import {
  Form,
  Footer,
  BodyContainer,
  TestDateSection,
  InputWrapper,
  MakeInline,
  ItemContainer
} from "./styles";
import TextInput from "components/textInput";
import Button from "components/button";
import walletFormContainer from "stateContainers/walletFormContainer";
import RadioButton from "components/radioButton";
import Select from "components/select";
import api from "api";
import { useHistory } from "react-router-dom";
import FormHeader from "components/formHeader";

const INITIAL_VALUES = {
  referenceNumber: "",
  dateTested: "",
  covidStatus: "Untested",
  laboratory: "",
  receivedResult: false
};

const VALIDATION_SCHEMA = object().shape({
  referenceNumber: string().max(30 | "Max 30 characters."),
  dateTested: date().required(),
  covidStatus: string().required(),
  laboratory: string().required()
});

const AddStatus = ({ twoStepCallback }) => {
  const addDataToState = useCallback(
    async values => {
      await walletFormContainer.set({ covidTest: { ...values } });
      const { covidTest } = {
        ...walletFormContainer.state
      };
      twoStepCallback(covidTest);
    },
    [twoStepCallback]
  );

  return (
    <>
      <FormHeader heading="New test result" showBack={false} />
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={addDataToState}
      >
        {({ handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <BodyContainer>
              <>
                <TestDateSection>
                  <ItemContainer>
                    <TextInput
                      label="Test reference number"
                      placeholder="Enter reference number"
                      name="referenceNumber"
                    />
                  </ItemContainer>
                  <ItemContainer>
                    <Select
                      label="Laboratory"
                      placeholder="Please select"
                      name="laboratory"
                      displayProp="label"
                      valueProp="value"
                      items={[
                        {
                          label: "NHLS (National Health Laboratory Service)",
                          value: "NHLS"
                        }
                      ]}
                    />
                  </ItemContainer>
                </TestDateSection>
                <InputWrapper>
                  <ItemContainer>
                    <TextInput
                      name="dateTested"
                      type="date"
                      placeholder="Enter date"
                      label="Test date"
                    />
                  </ItemContainer>
                </InputWrapper>
                <MakeInline>
                  <ItemContainer>
                    <RadioButton
                      name="receivedResult"
                      options={[
                        { label: "Yes", value: true },
                        { label: "No", value: false }
                      ]}
                      label="Did you get your results?"
                    />
                  </ItemContainer>
                  <ItemContainer>
                    {/* {values.receivedResult && ( */}
                    <Select
                      label="Test status"
                      placeholder="Please select"
                      name="covidStatus"
                      displayProp="label"
                      valueProp="value"
                      items={[
                        { label: "Untested", value: "Untested" },
                        { label: "Negative", value: "Negative" },
                        { label: "Positive", value: "Positive" },
                        { label: "Recovered", value: "Recovered" }
                      ]}
                    />
                    {/* )} */}
                  </ItemContainer>
                </MakeInline>
              </>
            </BodyContainer>

            <Footer>
              <Button type="submit" onClick={handleSubmit}>
                Next
              </Button>
            </Footer>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddStatus;
