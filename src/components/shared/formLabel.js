import React from 'react'
import styled, { css } from 'styled-components'

export const Label = styled.label`
  font-size: 1.06rem;
  color: #654cf0;
  font-weight: bold;
  width: 100%;
  text-align: left;
`

const ErrorMessage = styled.label`
  font-size: 0.73rem;
  font-weight: 600;
  color: #ff4870;
  opacity: 0;
  transition: 0.2s ease-out;
  padding-top: 8px;
  text-align: right;
  margin-left: 20px;
  width: 100%;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`

const FormLabel = ({ name, error, description }) => (
  <Label htmlFor={name}>
    {description} <ErrorMessage show={error}>{error}</ErrorMessage>
  </Label>
)

export default FormLabel
