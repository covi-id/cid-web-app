import React from 'react'
import {
  Container,
  Card,
  TextContainer,
  SmallText,
  CoviidIcon,
  Heading,
  SocialText,
  ButtonLinkOverride,
} from './styles'

import SocialMediaLinks from 'components/socialMediaLinks'
import ButtonLink from 'components/buttonLink'
import { useLocation } from 'react-router-dom'

const cardsTextConsentFalse = [
  {
    text:
      'Your test details have been added to your Covi-ID as unverified data.',
  },
]

const cardsTextConsentTrue = [
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
  const location = useLocation()
  console.log(location)

  const consented = location.pathname.includes(
    '/create-wallet/status/updated/:consentNotGiven'
  )

  const textToShow = consented ? cardsTextConsentFalse : cardsTextConsentTrue

  return (
    <Container>
      <CoviidIcon />
      <Heading>Covi-ID Updated</Heading>
      {textToShow.map((card, index) => (
        <Card key={index}>
          <TextContainer>
            <SmallText>{card.text}</SmallText>
          </TextContainer>
        </Card>
      ))}

      <ButtonLinkOverride>
        <ButtonLink to='/'>Home</ButtonLink>
      </ButtonLinkOverride>
      <SocialText>Share</SocialText>

      <SocialMediaLinks />
    </Container>
  )
}
export default CoviidUpdated
