import React, { useCallback } from "react";
import { Formik } from "formik";
import { Form, FormContainer } from "./styles";
import ImageSubmit from "../image-submit/index.js";
import validationSchema from "components/details-form/validationSchema";
import TextInput from "components/textInput";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  idNumber: "",
  mobileNumber: ""
};

const FormikRegister = () => {
  return (
    <FormContainer>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={values => {
          // api.auth.createUser(values).then(history.pushState('/step-2'))
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <TextInput
              placeholder="Enter name"
              name="firstName"
              label="Name"
            />
            <TextInput
              name="lastName"
              placeholder="Enter surname"
              label="Surname"
            />
            <TextInput
              name="idNumber"
              placeholder="Enter ID number"
              label="ID Number"
            />
            <TextInput
              name="mobileNumber"
              placeholder="Enter mobile number"
              label="Mobile Number"
            />

            {/* <Center>
              <SubmitButton onClick={handleSubmit} type='submit'>
                Next
              </SubmitButton>
            </Center> */}
          </Form>
        )}
      </Formik>
      <ImageSubmit />
    </FormContainer>
  );
};

export default FormikRegister;
