import React from 'react'
import { string, func, bool } from 'prop-types'
import {
  Container,
  CheckboxContainer,
  Icon,
  StyledCheckbox,
  HiddenCheckbox,
  CheckboxLabel,
} from './styles'
const Checkbox = ({
  label,
  handleChange,
  name,
  checked,
  disabled,
  labelInlineInd,
}) => {
  return (
    <Container>
      <CheckboxLabel inline={labelInlineInd}>{label}</CheckboxLabel>
      <label>
        <CheckboxContainer>
          <HiddenCheckbox
            disabled={disabled}
            name={name}
            checked={checked}
            onChange={(e) =>
              handleChange({ target: { value: !checked, name } })
            }
          />
          <StyledCheckbox checked={checked}>
            <Icon viewBox='0 0 24 24'>
              <polyline points='20 6 9 17 4 12' />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
      </label>
    </Container>
  )
}
Checkbox.propTypes = {
  label: string,
  name: string,
  handleClick: func,
  disabled: bool,
  labelInlineInd: bool,
}
Checkbox.defaultProps = {
  label: '',
  name: '',
  handleClick: () => {},
  disabled: false,
  labelInlineInd: false,
}
export default Checkbox
