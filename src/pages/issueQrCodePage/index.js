import React from 'react'
import QRCode from 'qrcode.react'
import html2canvas from 'html2canvas'
import {
  Container,
  Title,
  Heading,
  ProfilePic,
  Right,
  QRContainer,
  DownloadButton,
  MainLogo,
  QR,
  Card,
  CardContent,
  CardBold,
  Override,
  SocialsOverride,
} from './styles'
import { useState } from 'react'
import { useEffect } from 'react'
import walletFormContainer from 'stateContainers/walletFormContainer'
import Nav from 'components/nav'
import DownloadStep from 'components/downloadStep'
import ButtonLink from 'components/buttonLink'

import SocialMediaLinks from 'components/socialMediaLinks'

const listItems = [
  { text: 'Download your Covi-ID', random: <ButtonLink>Download</ButtonLink> },
  {
    text: 'Add your latest test results',
    random: <ButtonLink>Add a test result</ButtonLink>,
  },
  {
    text: 'Share that you’ve just created your Covi-ID',
    random: (
      <SocialsOverride>
        <SocialMediaLinks />
      </SocialsOverride>
    ),
  },
]

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
    <>
      <Container>
        <Title>
          <Heading>
            Covi-ID Generated <br /> successfully
          </Heading>
        </Title>
        <Card>
          <CardContent>
            <QRContainer>
              <QR />
            </QRContainer>
            <Right>
              <CardBold>What do I do next?</CardBold>
              <Override>
                {listItems.map((item, index) => (
                  <DownloadStep
                    key={index}
                    step={index + 1}
                    text={item.text}
                    random={item.random}
                  />
                ))}
              </Override>
            </Right>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default IssueQRCode
