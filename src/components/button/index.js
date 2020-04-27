import React from "react";
import { oneOf, func } from "prop-types";
import { Button as StyledButton } from "./styles";
import isPropTypeHexCode from "utils/isPropTypeHexCode";

const Button = ({ children, type, onClick, disabled, loading, variant }) => (
  <StyledButton
    type={type}
    onClick={onClick}
    disabled={disabled}
    variant={variant}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  type: oneOf(["submit", "button"]),
  onClick: func.isRequired,
  backgroundColor: isPropTypeHexCode,
  foreground: isPropTypeHexCode
};

export default Button;
