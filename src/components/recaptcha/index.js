import React from 'react'
import { RecaptchaWrapper } from './styles'

const Recaptcha = () => {
  return (
    <RecaptchaWrapper>
      <form action='?' method='POST'>
        <div
          class='g-recaptcha'
          data-sitekey='6Lfw6u8UAAAAAPM_pXvNmxXIt4EZGzyJ3TzbjX67'></div>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </RecaptchaWrapper>
  )
}

export default Recaptcha
