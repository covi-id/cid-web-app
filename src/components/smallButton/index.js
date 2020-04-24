import React from 'react'
import { string } from 'prop-types'
import { BtnContainer, BtnText } from './styles'

const SmallButton = ({ children, to, buttonStyles = {} }) => (
  <BtnContainer {...buttonStyles} to={to}>
    <BtnText>{children}</BtnText>
  </BtnContainer>
)
SmallButton.propTypes = {
  to: string.isRequired,
}
export default SmallButton
