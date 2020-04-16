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

import FormikTest from 'components/test-info-form'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const IssueCredential = ({ ...props }) => {
  const location = useLocation()
  return (
    <>
      <Header>
        <MainLogo />
      </Header>
      <Container>
        <StepIndicator>
          <StepTextContainer>
            <StepText> Step 2/2</StepText>
          </StepTextContainer>
        </StepIndicator>
        <HeadingContainer>
          <StepHeading>COVI-ID Status</StepHeading>
        </HeadingContainer>
        <FormikTest formValues={location.state.form1} />
      </Container>
    </>
  )
}
export default IssueCredential
