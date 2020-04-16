import React from 'react'
import {
  Container,
  MainLogo,
  Header,
  CenterItemsContainer,
  Center,
  Text,
  Heading,
  ProfilePic,
  PicContainer,
  Tick,
  QR,
  QRContainer,
} from './styles.js'

import { DownloadButton, ButtonContainer } from 'components/download-button/styles'

const IssueQRCode = () => {
  return (
    <>
      <Header>
        <MainLogo />
      </Header>
      <Container>
        <Text>
          <Heading>COVI-ID created</Heading>
        </Text>
        <Center>
          <CenterItemsContainer>
            <PicContainer>
              <ProfilePic />
            </PicContainer>
            <QRContainer>
              <QR />
            </QRContainer>
            <ButtonContainer>
              <DownloadButton>Download</DownloadButton>
            </ButtonContainer>
          </CenterItemsContainer>
          <Tick />
        </Center>
      </Container>
    </>
  )
}
export default IssueQRCode
