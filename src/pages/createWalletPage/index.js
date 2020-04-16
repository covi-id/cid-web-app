import React from "react";

import CreateWallet from "containers/createWallet";
import {
  Container,
  StepText,
  StepIndicator,
  HeadingContainer,
  StepHeading
} from "./styles.js";

const ProofRequest = () => (
  <Container>
    <StepIndicator>
      <StepText> Step 1/2</StepText>
    </StepIndicator>
    <HeadingContainer>
      <StepHeading>Enter details</StepHeading>
    </HeadingContainer>
    <CreateWallet />
  </Container>
);

export default ProofRequest;
