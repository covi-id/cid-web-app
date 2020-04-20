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
          <BackTick onClick={() => history.push('/')} />
          <StepHeading>Enter details</StepHeading>
        </InlineContainer>
      </HeadingContainer>
      <CreateWallet />
    </Container>
  )
}

export default CreateWalletPage
