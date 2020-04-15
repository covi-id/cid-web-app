import React from 'react'
import {
  Container,
  MainLogo,
  Header,
  CenterItemsContainer,
  Center,
  Text,
  Heading,
} from './styles.js'

const IssueQRCode = () => {
  return (
    <>
      <Header>
        <MainLogo />
      </Header>
      <Container>
        <Center>
          <Text>
            <Heading>COVI-ID created</Heading>
          </Text>
          <CenterItemsContainer></CenterItemsContainer>
        </Center>
      </Container>
    </>
  )
}
export default IssueQRCode
