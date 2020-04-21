import React from 'react'
import { useHistory } from 'react-router-dom'

import CreateWallet from 'containers/createWallet'
import {
  Container,
  StepText,
  StepIndicator,
  HeadingContainer,
  StepHeading,
  BackTick,
  InlineContainer,
  BackButton,
} from './styles.js'

const CreateWalletPage = () => {
  const history = useHistory()
  return (
    <Container>
      <HeadingContainer>
        <StepIndicator>
          <StepText>Step 1/2</StepText>
        </StepIndicator>
        <InlineContainer>
          <BackButton onClick={() => history.push('/')}>
            <BackTick />
          </BackButton>
          <StepHeading>Enter details</StepHeading>
        </InlineContainer>
      </HeadingContainer>
      <CreateWallet />
    </Container>
  )
}

export default CreateWalletPage
