import React from "react";

import AddStatus from "containers/addStatus";
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
    <AddStatus />
  </Container>
);

export default AddStatusPage;
