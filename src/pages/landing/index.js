import React from 'react'
import {
  Container,
  LandingIcon,
  Center,
  Heading,
  Btn,
  Plus,
  Text,
  MainLogo,
  Header,
  Opener,
} from './styles.js'

const Landing = () => {
  return (
    <>
      <Header>
        <MainLogo />
      </Header>
      <Container>
        <Center>
          <LandingIcon />
          <Heading>Hi there,</Heading>
          <Opener href='/proof-request'>
            <Btn>
              <Text>Create new wallet</Text>
              <Plus />
            </Btn>
          </Opener>
        </Center>
      </Container>
    </>
  )
}
export default Landing
