import React from 'react'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas'
import {
  Container,
  Title,
  Heading,
  ProfilePic,
  PicContainer,
  Tick,
  QRContainer,
  DownloadButton,
  MainLogo,
  Card,
  CardContent,
} from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import walletFormContainer from 'stateContainers/walletFormContainer'

const IssueQRCode = () => {
  const [state, setState] = useState()

  const codeStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
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
      <Title>
        <MainLogo />
        <Heading>
          <span>COVI-ID</span> created
        </Heading>
      </Title>
      <Card>
        <CardContent>
          <PicContainer>
            <ProfilePic src={state?.picture} />
          </PicContainer>
          <Tick />

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
        </CardContent>
      </Card>
    </Container>
  )
}

export default IssueQRCode
