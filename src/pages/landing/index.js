import React from 'react'
import { Container, LandingIcon, Heading, ButtonsContainer } from './styles.js'
import ButtonLink from 'components/buttonLink/index.js'

const Landing = () => {
  return (
    <Container>
      <LandingIcon />
      <Heading>Hi there,</Heading>
      <ButtonsContainer>
        <ButtonLink
          to='/create-wallet/details'
          icon={require('assets/icons/plus-icon.svg')}>
          Create my Covi-ID
        </ButtonLink>
        <ButtonLink
          to='/create-wallet/status'
          icon={require('assets/icons/plus-icon.svg')}>
          Add a test result
        </ButtonLink>
        <ButtonLink
          href='https://thedeltastudio.typeform.com/to/RCrTgL'
          icon={require('assets/icons/plus-icon.svg')}>
          Register organisation
        </ButtonLink>
      </ButtonsContainer>
    </Container>
  )
}
export default Landing
