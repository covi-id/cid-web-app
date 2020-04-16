import styled from 'styled-components'
import BackgroundDesktop from 'assets/images/desktop-purple-background.svg'
import Logo from 'assets/images/logo-light.svg'
import CenterPiece from 'assets/images/desktop-profile-background.svg'
import Pic from 'assets/images/profile-picture.png'
import GreenTick from 'assets/icons/tickIcon.svg'
import QRCode from 'assets/images/QRCode.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  background: url(${BackgroundDesktop}) white no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`
export const Tick = styled.img.attrs({ src: GreenTick })`
  width: 7%;
  position: absolute;
  top: 4%;
  left: 56.8%;
`

export const PicContainer = styled.div`
  width: 33.56%;
  height: 33.56%;
  min-height: 180px;
  max-height: 200px;
  position: relative;
  top: 5%;
  clip-path: circle(70% at center);
  margin: 0 auto;
`

export const ProfilePic = styled.img.attrs({ src: Pic })`
  width: 100%;
  max-width: 200px;
  min-width: 100px;
`

export const MainLogo = styled.img.attrs({ src: Logo })`
  width: 100%;
  height: 200px;
`
export const QRContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 7%;
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
`

export const CenterItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  min-width: 40%;
  min-width: 100%;
  background-image: url(${CenterPiece});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 2em;
  justify-content: center;
`

export const Heading = styled.div`
  font-size: 3vw;
  font-weight: bold;
  color: #ffffff;
`

export const Text = styled.div`
  justify-content: center;
  text-align: center;
`
export const Header = styled.div`
  position: absolute;
  top: -2%;
  left: 5%;
`
