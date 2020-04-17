import React from "react";

import CreateWallet from "containers/createWallet";
import {
  Container,
  StepText,
  StepIndicator,
  HeadingContainer,
  StepHeading
} from "./styles.js";

const AddStatusPage = () => (
  <Container>
    <HeadingContainer>
      <StepIndicator>
        <StepText> Step 2/2</StepText>
      </StepIndicator>
      <StepHeading>COVI-ID status</StepHeading>
    </HeadingContainer>
    <CreateWallet />
  </Container>
);

export default AddStatusPage;
