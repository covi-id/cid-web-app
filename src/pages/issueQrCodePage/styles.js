import styled from 'styled-components'
import BackgroundDesktop from 'assets/images/desktop-purple-background.svg'
import Logo from 'assets/images/logo-light.svg'
import CenterPiece from 'assets/images/desktop-profile-background.svg'
import GreenTick from 'assets/icons/tickIcon.svg'
import QRCode from 'assets/images/QRCode.svg'
import { Button } from 'components/button/styles'

import BackgroundMobile from 'assets/images/mobile-purple-background.svg'

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  background: url(${BackgroundDesktop}) white no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    background: url(${BackgroundMobile}) white no-repeat center;
    background-size: cover;
    justify-content: unset;
  }
`

export const Card = styled.div`
  display: flex;
  width: 39.31%;
  background: url(${CenterPiece}) no-repeat;
  background-size: cover;
  border-radius: 40px;

  @media screen and (max-width: 600px) {
    width: unset;
    background: none;
  }
`

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 170px;
  margin: 8.84% auto;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const Tick = styled.img.attrs({ src: GreenTick })`
  width: 22.35%;
  position: absolute;
  top: 0%;
  right: 6%;

  @media screen and (max-width: 600px) {
    width: 22.5%;
    right: 0;
    top: 5%;
    left: unset;
  }
`

export const PicContainer = styled.div`
  position: relative;
  max-width: 170px;
  max-height: 170px;
  min-height: 170px;
  overflow: hidden;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    width: unset;
    margin-bottom: 12.35%;
    position: unset;
  }
`

export const ProfilePic = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: auto;
  width: 100%;
`

export const MainLogo = styled.img.attrs({ src: Logo })`
  width: 100%;
  height: 200px;
  display: none;

  @media screen and (max-width: 600px) {
    width: 60.14%;
    height: auto;
    margin: 12.08% auto 9.91% auto;
    display: block;
  }
`
export const QRContainer = styled.div`
  width: 88%;
  justify-content: center;
  display: flex;
  margin: 12.5% auto;

  @media screen and (max-width: 600px) {
    margin-top: 5.07%;
    margin-bottom: 24.7%;
    width: 88.24%;
    height: 88.24%;
  }
`

export const QR = styled.img.attrs({ src: QRCode })`
  width: 100%;
  height: 220px;
  margin: 0 auto;
`

export const Center = styled.div`
  width: 40.2%;
  height: 64.8%;
  position: relative;
  border-radius: 2em;
  margin-left: 0.82%;
  margin-top: 2%;
  min-width: 600px;
  min-height: 580px;
  max-height: 800px;

  @media screen and (max-width: 600px) {
    min-width: unset;
    min-height: unset;
    max-height: unset;
    margin-top: 7.97%;
    width: 41.06%;
    margin-left: 0%;
  }
`

export const Title = styled.div`
  justify-content: center;
  text-align: center;
  margin: 8% auto 2.5% auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: unset;
  }
`

export const Heading = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;

  & span {
    font-size: inherit;
    font-weight: inherit;
  }

  @media screen and (max-width: 600px) {
    text-transform: capitalize;
    font-size: 2.5rem;
    & span {
      display: none;
    }
  }
`

export const Header = styled.div`
  position: absolute;
  top: -2%;
  left: 5%;
`

export const DownloadButton = styled(Button)`
  background: #ffffff;
  color: #513cc5;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    margin-top: 10%;
  }
`
