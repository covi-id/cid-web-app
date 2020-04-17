import React from 'react'
import {
  Container,
  MainLogo,
  Header,
  StepText,
  StepIndicator,
  StepTextContainer,
  HeadingContainer,
  StepHeading,
} from './styles.js'

import { SubmitButton, Center } from 'components/form-button/styles'

import FormikRegister from 'components/details-form'
import { Link } from 'react-router-dom'

const ProofRequest = () => {
  return (
    <>
      <Header>
        <MainLogo />
      </Header>

      <Container>
        <StepIndicator>
          <StepTextContainer>
            <StepText> Step 1/2</StepText>
          </StepTextContainer>
        </StepIndicator>
        <HeadingContainer>
          <StepHeading>Enter details</StepHeading>
        </HeadingContainer>
        <FormikRegister />
      </Container>
    </>
  )
}
export default ProofRequest
