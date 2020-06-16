import React, { Component } from 'react'
import { number, string } from 'prop-types'

import SingleOtpInput from './singleInput'
import { Container } from './styles'
import { connect } from 'formik'

// keyCode constants
const BACKSPACE = 8
const LEFT_ARROW = 37
const RIGHT_ARROW = 39
const DELETE = 46
const SPACEBAR = 32

const isObject = (obj) => typeof obj === 'object'

class OtpInput extends Component {
  static defaultProps = {
    numInputs: 6,
    isDisabled: false,
    shouldAutoFocus: false,
  }

  state = {
    activeInput: null,
  }

  getOtpValue = () => {
    const { formik, name } = this.props
    const { values } = formik
    const value = values[name]
    return value ? value.toString().split('') : []
  }

  // Helper to return OTP from input
  handleOtpChange = (otp) => {
    const { isInputNum, formik, name } = this.props
    const { setFieldValue } = formik
    const otpValue = otp.join('')
    setFieldValue(name, isInputNum ? Number(otpValue) : otpValue)
  }

  // Focus on input by index
  focusInput = (input) => {
    const { numInputs } = this.props
    const activeInput = Math.max(Math.min(numInputs - 1, input), 0)

    this.setState({ activeInput })
  }

  // Focus on next input
  focusNextInput = () => {
    const { activeInput } = this.state
    this.focusInput(activeInput + 1)
  }

  // Focus on previous input
  focusPrevInput = () => {
    const { activeInput } = this.state
    this.focusInput(activeInput - 1)
  }

  // Change OTP value at focused input
  changeCodeAtFocus = (value) => {
    const { activeInput } = this.state
    const otp = this.getOtpValue()
    otp[activeInput] = value[0]

    this.handleOtpChange(otp)
  }

  // Handle pasted OTP
  handleOnPaste = (e) => {
    e.preventDefault()
    const { numInputs } = this.props
    const { activeInput } = this.state
    const otp = this.getOtpValue()

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = e.clipboardData
      .getData('text/plain')
      .slice(0, numInputs - activeInput)
      .split('')

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        otp[pos] = pastedData.shift()
      }
    }

    this.handleOtpChange(otp)
  }

  handleOnChange = (e) => {
    this.changeCodeAtFocus(e.target.value)
    this.focusNextInput()
  }

  // Handle cases of backspace, delete, left arrow, right arrow, space
  handleOnKeyDown = (e) => {
    if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
      e.preventDefault()
      this.changeCodeAtFocus('')
      this.focusPrevInput()
    } else if (e.keyCode === DELETE || e.key === 'Delete') {
      e.preventDefault()
      this.changeCodeAtFocus('')
    } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
      e.preventDefault()
      this.focusPrevInput()
    } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
      e.preventDefault()
      this.focusNextInput()
    } else if (
      e.keyCode === SPACEBAR ||
      e.key === ' ' ||
      e.key === 'Spacebar'
    ) {
      e.preventDefault()
    }
  }

  checkLength = (e) => {
    if (e.target.value.length > 1) {
      e.preventDefault()
      this.focusNextInput()
    }
  }

  componentDidMount() {
    this.setState({
      activeInput: 0,
    })
  }

  renderInputs = () => {
    const { activeInput } = this.state
    const {
      numInputs,
      inputStyle,
      focusStyle,
      separator,
      isDisabled,
      disabledStyle,
      hasErrored,
      errorStyle,
      shouldAutoFocus,
      isInputNum,
    } = this.props
    const otp = this.getOtpValue()
    const inputs = []

    for (let i = 0; i < numInputs; i++) {
      inputs.push(
        <SingleOtpInput
          key={i}
          focus={activeInput === i}
          value={otp && otp[i]}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
          onInput={this.checkLength}
          onPaste={this.handleOnPaste}
          onFocus={(e) => {
            this.setState({ activeInput: i })
            e.target.select()
          }}
          onBlur={() => this.setState({ activeInput: -1 })}
          separator={separator}
          inputStyle={inputStyle}
          focusStyle={focusStyle}
          isLastChild={i === numInputs - 1}
          isDisabled={isDisabled}
          disabledStyle={disabledStyle}
          hasErrored={hasErrored}
          errorStyle={errorStyle}
          shouldAutoFocus={shouldAutoFocus}
          isInputNum={isInputNum}
        />
      )
    }

    return inputs
  }

  render() {
    const { containerStyle } = this.props

    return (
      <Container
        style={Object.assign(
          { display: 'flex' },
          isObject(containerStyle) && containerStyle
        )}
        className={!isObject(containerStyle) ? containerStyle : ''}>
        {this.renderInputs()}
      </Container>
    )
  }
}

OtpInput.propTypes = {
  numInputs: number.isRequired,
  name: string.isRequired,
}

export default connect(OtpInput)
