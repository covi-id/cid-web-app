import React, { useCallback } from "react";
import { connect } from "formik";

import { Container, Checkmark, Label, Options } from "./styles";
import FormLabel from "components/shared/formLabel";
import FormItemWrapper from "components/shared/formItemWrapper";

const RadioButton = ({ label, name, options = [], formik }) => {
  const { values, setFieldValue, errors } = formik;
  const formValue = values[name];
  const error = errors[name];

  const handleChange = useCallback(
    value => {
      console.log(value);
      setFieldValue(name, value);
    },
    [name, setFieldValue]
  );

  return (
    <FormItemWrapper>
      <FormLabel description={label} name={name} error={error} />
      <Options>
        {options.map(({ label, value }, key) => {
          const checked = value === formValue;
          return (
            <Container key={key} onClick={() => handleChange(value)}>
              <Label>{label}</Label>
              <Checkmark active={checked} />
            </Container>
          );
        })}
      </Options>
    </FormItemWrapper>
  );
};

export default connect(RadioButton);
