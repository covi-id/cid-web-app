import styled from 'styled-components'
import BackgroundDesktop from '../../assets/images/desktop-purple-background.svg'
import Logo from '../../assets/images/logo-light.svg'
import CenterPiece from '../../assets/images/desktop-profile-background.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  background: url(${BackgroundDesktop}) white no-repeat center;
  background-size: cover;
`
export const MainLogo = styled.img.attrs({ src: Logo })`
  width: 100%;
  height: 200px;
`

export const Center = styled.div`
  width: 40.2%;
  height: 63.8%;
  position: relative;
  border-radius: 2em;
  margin-left: 0.82%;
  margin-top: 2%;
  min-width: 40%;
  min-height: 20%;
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
`

export const Heading = styled.div`
  font-size: 3vw;
  font-weight: bold;
  color: #ffffff;
`

export const Text = styled.div`
  justify-content: center;
  text-align: center;
  position: absolute;
  top: -12%;
  left: 18.6%;
`
export const Header = styled.div`
  position: absolute;
  top: -2%;
  left: 5%;
`
