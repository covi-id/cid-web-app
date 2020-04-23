import React from 'react'
import {
  Container,
  CardsContainer,
  Heading,
  HeadingContainer,
} from './styles.js'
import Card from 'components/card/'

const ConnectCoviid = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Connect Covi-ID</Heading>
      </HeadingContainer>
      <CardsContainer>
        <Card />
      </CardsContainer>
    </Container>
  )
}
export default ConnectCoviid
