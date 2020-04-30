import React, { PureComponent } from "react";

import { Input } from "./styles";

const isObject = obj => typeof obj === "object";

class SingleOtpInput extends PureComponent {
  input;

  // Focus on first render
  // Only when shouldAutoFocus is true
  componentDidMount() {
    const {
      input,
      props: { focus, shouldAutoFocus }
    } = this;

    if (input && focus && shouldAutoFocus) {
      input.focus();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      input,
      props: { focus }
    } = this;

    // Check if focusedInput changed
    // Prevent calling function if input already in focus
    if (prevProps.focus !== focus && input && focus) {
      input.focus();
      input.select();
    }
  }

  getClasses = (...classes) =>
    classes.filter(c => !isObject(c) && c !== false).join(" ");

  render() {
    const {
      separator,
      isLastChild,
      inputStyle,
      focus,
      isDisabled,
      hasErrored,
      errorStyle,
      focusStyle,
      disabledStyle,
      shouldAutoFocus,
      isInputNum,
      value,
      ...rest
    } = this.props;

    const numValueLimits = isInputNum ? { min: 0, max: 9 } : {};

    return (
      <>
        <Input
          type={isInputNum ? "number" : "tel"}
          {...numValueLimits}
          maxLength="1"
          ref={input => {
            this.input = input;
          }}
          disabled={isDisabled}
          placeholder="-"
          value={value ? value : ""}
          {...rest}
        />
        {!isLastChild && separator}
      </>
    );
  }
}

export default SingleOtpInput;
