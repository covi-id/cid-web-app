import React from 'react'
import {
  Container,
  Card,
  TextContainer,
  SmallText,
  CoviidIcon,
  Heading,
  SocialText
} from './styles'

import SocialMediaLinks from 'components/socialMediaLinks'

const cardsText = [
  {
    text:
      'Your test details have been added to you Covi-ID as unverified data.',
  },
  { text: 'You will be notified via SMS once we have verified your results.' },
  {
    text:
      'Your COVID-19 status will be updated to verified on successful verification.',
  },
]

const CoviidUpdated = () => {
  return (
    <Container>
      <CoviidIcon />
      <Heading>Covi-ID Updated</Heading>
      {cardsText.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <SmallText>{card.text}</SmallText>
          </TextContainer>
        </Card>
      ))}
      <SocialText>Share</SocialText>
      <SocialMediaLinks />
    </Container>
  )
}
export default CoviidUpdated
