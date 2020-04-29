import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { RecaptchaWrapper } from './styles'

import { ENV } from 'utils/environment'

const Recaptcha = ({ handleChange }) => {
  return (
    <RecaptchaWrapper>
      <ReCAPTCHA
        sitekey={ENV.SITE_KEY}
        onChange={handleChange}
      />
    </RecaptchaWrapper>
  )
}

export default Recaptcha
