import React from 'react'
import { StyledCard, Icon, Text, TextBox } from './styles'
import ButtonLink from 'components/buttonLink'

const cardsInfo = [
  {
    icon: '1',
    text: 'Wa wa wee wah',
    buttonText: 'One',
  },
  { icon: '2', text: 'Wa wa wee wah', buttonText: 'Two' },
  { icon: '3', text: 'Wa wa wee wah', buttonText: 'Three' },
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
