import React from "react";
import {
  Container,
  StepText,
  StepIndicator,
  HeadingContainer,
  StepHeading
} from "./styles.js";

import { SubmitButton, Center } from "components/form button/styles";

import FormikRegister from "components/details-form/index.js";

function navToNext() {
  return (window.location.href = "issue-credential");
}

const ProofRequest = () => {
  return (
    <Container>
      <StepIndicator>
        <StepText> Step 1/2</StepText>
      </StepIndicator>
      <HeadingContainer>
        <StepHeading>Enter details</StepHeading>
      </HeadingContainer>
      <FormikRegister />
      <Center>
        <SubmitButton onClick={() => navToNext()}>Next</SubmitButton>
      </Center>
    </Container>
  );
};
export default ProofRequest;
