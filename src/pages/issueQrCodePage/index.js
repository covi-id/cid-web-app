import React from 'react'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas'
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
  DownloadButton,
} from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import walletFormContainer from 'stateContainers/walletFormContainer'

const IssueQRCode = () => {
  const [state, setState] = useState()

  const codeStyle = {
    margin: '5%',
    height: '25%',
    width: '25%',
  }

  useEffect(() => {
    const walletState = { ...walletFormContainer.state }
    setState(walletState)
  }, [])

  function download() {
    html2canvas(document.body).then(function (canvas) {
      saveAs(canvas.toDataURL(), 'CoviID.png')
    })
  }

  function saveAs(uri, filename) {
    var link = document.createElement('a')
    if (typeof link.download === 'string') {
      link.href = uri
      link.download = filename

      //Firefox requires the link to be in the body
      document.body.appendChild(link)

      //simulate click
      link.click()

      //remove the link when done
      document.body.removeChild(link)
    } else {
      window.open(uri)
    }
  }

  return (
    <Container>
      <Text>
        <Heading>COVI-ID created</Heading>
      </Text>
      <Center>
        <CenterItemsContainer>
          <PicContainer>
            <ProfilePic src={state?.picture} />
          </PicContainer>
          <QRContainer>
            {state?.covidStatusUrl && (
              <QRCode
                value={state.covidStatusUrl}
                bgColor='#513CC5'
                fgColor='#FFFFFF'
                style={codeStyle}
              />
            )}
          </QRContainer>
          <DownloadButton onClick={() => download()}>Download</DownloadButton>
        </CenterItemsContainer>
        <Tick />
      </Center>
    </Container>
  )
}

export default IssueQRCode
