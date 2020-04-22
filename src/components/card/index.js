import React from 'react'
import { StyledCard, Icon, Text, TextBox } from './styles'
import ButtonLink from 'components/buttonLink'

const cardsInfo = [
  {
    icon: '1',
    text: 'Scan my QR using my phone',
    buttonText: 'Scan QR code',
  },
  {
    icon: '2',
    text: 'I have my QR image downloaded',
    buttonText: 'Upload QR code',
  },

  { icon: '3', text: "I don't have a Covi-ID yet", buttonText: 'Generate ' },
]

const Card = () => {
  return (
    <>
      {cardsInfo.map((card, index) => (
        <StyledCard key={index}>
          <Icon src={card.icon} />
          <TextBox>
            <Text>{card.text}</Text>
            <ButtonLink>{card.buttonText}</ButtonLink>
          </TextBox>
        </StyledCard>
      ))}
    </>
  )
}

export default Card
