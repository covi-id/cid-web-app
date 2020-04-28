import React from 'react'
import {
  Container,
  Card,
  TextContainer,
  SmallText,
  CoviidIcon,
  Heading,
  SocialWrapper,
  SocialLinks,
  Facebook,
  Twitter,
  Whatsapp,
  SocialText,
  ExternalLink,
} from './styles'

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
      <SocialWrapper>
        <SocialText>Share</SocialText>
        <SocialLinks>
          <ExternalLink
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/sharer/sharer.php?u=www.coviid.me&t=COVI-ID'>
            <Facebook />
          </ExternalLink>
          <ExternalLink
            target='_blank'
            as='a'
            rel='noopener noreferrer'
            href='https://twitter.com/share?url=www.coviid.me&text=Join%20us%20in%20stopping%20the%20spread%20of%20Covid-19%20%0A%0A%0ARegister%20for%20your%20Covi-ID%20here%3A%20www.coviid.me'>
            <Twitter />
          </ExternalLink>
          <ExternalLink
            target='_blank'
            rel='noopener noreferrer'
            href='whatsapp://send?text=www.coviid.me" data-action="share/whatsapp/share"'>
            <Whatsapp />
          </ExternalLink>
        </SocialLinks>
      </SocialWrapper>
    </Container>
  )
}
export default CoviidUpdated
