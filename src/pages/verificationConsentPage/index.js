import React from 'react'
import {
  Container,
  Card,
  TextContainer,
  Text,
  Bold,
  LargeText,
  ButtonWrapper,
} from './styles.js'

import SmallButton from 'components/smallButton'

const cardText = [
  {
    paraOne:
      'In order to verify do you consent to us sharing the following data with the laboratory you indicated that completed this test.',
    boldOne: 'Your verified mobile number',
    boldTwo: 'Your test reference number',
    paraTwo:
      'On successful verification, your COVI-ID status will be updated to verified.',
    largeText: 'Do you consent to this verification?',
  },
]

const VerificationConsent = () => {
  return (
    <Container>
      {cardText.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <Text>{card.paraOne}</Text>
            <Bold>{card.boldOne}</Bold>
            <Bold>{card.boldTwo}</Bold>
            <Text>{card.paraTwo}</Text>
            <LargeText>{card.largeText}</LargeText>
          </TextContainer>
          <ButtonWrapper>
            <SmallButton
              buttonStyles={{ background: '#D3FDF0', color: '#03CE8E' }}>
              No
            </SmallButton>
            <SmallButton>Yes</SmallButton>
          </ButtonWrapper>
        </Card>
      ))}
    </Container>
  )
}
export default VerificationConsent
