import React from "react";

import { StepIndicator, StepText } from "./styles";

const Step = ({ children }) => (
  <StepIndicator>
    <StepText>{children}</StepText>
  </StepIndicator>
);

export default Step;
