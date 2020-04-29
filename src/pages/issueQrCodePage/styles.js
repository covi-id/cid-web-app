import styled from "styled-components";
import BackgroundDesktop from "assets/images/desktop-coviid-background.svg";

import CenterPiece from "assets/images/desktop-coviid-download-card.svg";
import MobileCenterPiece from "assets/images/mobile-coviid-download-card.svg";

import DownloadQrBackground from "assets/images/qr-download-background.svg";
import DownloadQrLogo from "assets/images/qr-dowload-logo.svg";

import * as ButtonLink from "components/buttonLink/styles";

import * as SocialMediaLinks from "components/socialMediaLinks/styles";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  /* background: url(${BackgroundDesktop}) white no-repeat center; */
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    justify-content: unset;
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 812.5px;
  /* height: 462.5px; */
  background: url(${CenterPiece}) no-repeat;
  background-size: cover;
  border-radius: 40px;
  margin-left: -40px;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    background: url(${MobileCenterPiece}) no-repeat;
    width: unset;
    margin: 0 auto;
    width: 90%;
    height: 100%;
    margin-bottom: 80px;
    background-color: #ffffff;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  margin: 20px auto;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Right = styled.div`
  position: relative;
  width: 400px;
  height: 390px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const ProfilePic = styled.img.attrs(props => ({
  src: props.src
}))`
  height: auto;
  width: 100%;
`;

export const QRContainer = styled.div`
  width: 250px;
  height: 250px;
  justify-content: center;
  display: flex;
  margin: 0 80px 0 0;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0 auto 130px auto;
  }
`;

export const QR = styled.img`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  justify-content: center;
  text-align: center;
  margin: 120px auto 30px auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: unset;
  }
`;

export const Heading = styled.div`
  font-weight: bold;
  font-size: 52px;
  line-height: 110%;
  color: #513cc5;

  & span {
    font-size: inherit;
    font-weight: inherit;
  }

  @media screen and (max-width: 768px) {
    text-transform: capitalize;
    font-size: 2.5rem;
    & span {
      display: none;
    }
  }
`;

export const CardBold = styled.div`
  font-weight: bold;
  font-size: 28px;
  line-height: 110%;
  color: #110a37;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 120px;
    margin: 20px auto;
  }
`;

export const SocialsOverride = styled.div`
  ${SocialMediaLinks.SocialWrapper} {
    width: 10px;
    margin: 0px auto 10px 70px;

    @media screen and (max-width: 768px) {
      margin: 0px auto 0px 60px;
    }
  }
`;

export const Override = styled.div`
  ${ButtonLink.Container} {
    height: 30px;
    width: 100%;
    max-width: 180px;
    min-width: 120px;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      margin: 0px auto 26px auto;
    }
  }
`;

export const DownloadContainer = styled.div`
  background-image: url(${DownloadQrBackground});
  position: absolute;

  background-size: cover;
  background-repeat: no-repeat;
  background-color: #654cf0;
  background-position: top left;
  padding: 40px;
  border-radius: 60px;
  justify-content: center;

  background: "#654cf0";
  width: 435px;
  flex-direction: row;
  z-index: -1;
  text-align: center;
`;

export const DownloadLogo = styled.img.attrs({ src: DownloadQrLogo })`
  margin-top: 30px;
  width: 160px;
`;
