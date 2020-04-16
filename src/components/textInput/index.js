import React, { useCallback } from "react";
import { string, oneOf, oneOfType, bool, number } from "prop-types";

import { Container, Label, Input, ErrorMessage } from "./styles";
import { connect } from "formik";

const TextInput = ({
  placeholder,
  label,
  defaultValue,
  name,
  formik,
  disabled,
  type
}) => {
  const value = formik.values[name];
  const error = formik.touched[name] && formik.errors[name];
  const { handleBlur, onFocus } = formik;

  const handleChange = useCallback(
    ({ target }) => {
      formik.setFieldValue(name, target.value);
    },
    [formik, name]
  );

  return (
    <Container>
      <Label for={name}>
        {label} <ErrorMessage show={error}>{error}</ErrorMessage>
      </Label>
      <Input
        value={value}
        name={name}
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={onFocus}
      />
    </Container>
  );
};

TextInput.propTypes = {
  name: string.isRequired,
  type: oneOf(["text", "password", "number"]),
  placeholder: string,
  label: string,
  defaultValue: oneOfType([string, number]),
  disabled: bool
};

export default connect(TextInput);
