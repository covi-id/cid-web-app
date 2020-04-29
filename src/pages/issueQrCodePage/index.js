import React from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import {
  Container,
  Title,
  Heading,
  Right,
  QRContainer,
  Card,
  CardContent,
  CardBold,
  Override,
  SocialsOverride,
  DownloadContainer,
  DownloadLogo,
  OverrideButton,
  OverrideInternalLink
} from "./styles";
import { useState } from "react";
import walletFormContainer from "stateContainers/walletFormContainer";
import DownloadStep from "components/downloadStep";
import SocialMediaLinks from "components/socialMediaLinks";

const IssueQRCode = () => {
  const [listItems] = useState([
    {
      text: "Download your Covi-ID",
      random: (
        <OverrideButton onClick={() => download()}>Download</OverrideButton>
      )
    },
    {
      text: "Add your latest test results",
      random: (
        <OverrideInternalLink to="/create-wallet/status">
          Add a test result
        </OverrideInternalLink>
      )
    },
    {
      text: "Share that you’ve just created your Covi-ID",
      random: (
        <SocialsOverride>
          <SocialMediaLinks />
        </SocialsOverride>
      )
    }
  ]);

  const download = async () => {
    window.scrollTo(0, 0);
    html2canvas(
      document.querySelector(`#${walletFormContainer.state.walletId}`) ||
        document.body
    ).then(function(canvas) {
      saveAs(
        canvas.toDataURL("image/png", 1),
        `${walletFormContainer.state.walletId}.png`
      );
    });
  };

  function saveAs(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
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
              <QRCode
                style={{
                  width: "190px",
                  height: "auto"
                }}
                fgColor="#513CC5"
                value={walletFormContainer.state.covidStatusUrl}
                level="H"
                includeMargin
                // renderAs="svg"
              />
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

      <DownloadContainer id={walletFormContainer.state.walletId}>
        <QRCode
          style={{
            width: "90%",
            height: "auto"
          }}
          fgColor="#513CC5"
          renderAs="svg"
          level="H"
          includeMargin
          value={walletFormContainer.state.covidStatusUrl}
        />
        <DownloadLogo />
      </DownloadContainer>
    </>
  );
};

export default IssueQRCode;
