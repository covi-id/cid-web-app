import React from 'react'
import { func } from 'prop-types'
import { BtnContainer, BtnText } from './styles'

const SmallButton = ({ children, onClick, buttonStyles = {} }) => (
  <BtnContainer onClick={onClick} {...buttonStyles}>
    <BtnText>{children}</BtnText>
  </BtnContainer>
)
SmallButton.propTypes = {
  onClick: func.isRequired,
}
export default SmallButton
