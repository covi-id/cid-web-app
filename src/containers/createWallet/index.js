import React from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import { Form, Left, Right, Footer, BodyContainer } from "./styles";
import TextInput from "components/textInput";
import FileUpload from "components/fileUpload";
import Button from "components/button";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  idNumber: "",
  mobileNumber: ""
};

const VALIDATION_SCHEMA = object().shape({
  firstName: string()
    .label("First Name")
    .required("Required"),

  lastName: string()
    .label("Last Name")
    .required("Required"),

  mobileNumber: string()
    .label("Mobile Number")
    .min(10, "Please enter a valid South African mobile number")
    .max(10, "Please enter a valid South African mobile number")
    .required("Required"),

  idNumber: string()
    .label("ID Number")
    .min(13, "Must be 13 characters")
    .max(13, "Must be 13 characters")
    .required("Required"),

  picture: string("Required").test("picture", "Required", value =>
    /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
      value
    )
  )
});

const FormikRegister = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={values => {
        // api.auth.createUser(values).then(history.pushState('/step-2'))
      }}
    >
      {({ handleSubmit }) => (
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
            </Left>

            <Right>
              <FileUpload
                name="picture"
                label="Upload picture"
                dropText="Drop files :)"
                placeholder="Drag and drop or click to add file here."
              />
            </Right>
          </BodyContainer>

          <Footer>
            <Button type="submit" onClick={handleSubmit}>
              Next
            </Button>
          </Footer>
        </Form>
      )}
    </Formik>
  );
};

export default FormikRegister;
