import styled from 'styled-components'
import BackgroundDesktop from '../../assets/images/desktop-landing-background.svg'
import Logo from '../../assets/images/logo-dark.svg'

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

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 14px;

  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`

export const Text = styled.div`
  width: 160px;
  height: 20px;
  vertical-align: middle;
  text-align: center;

  font-size: 17px;
  letter-spacing: 0.01em;
  font-weight: bold;
  color: #654cf0;
  margin-right: 23px;
  padding-top: 4.5px;
  padding-left: 10px;
`
export const Header = styled.div`
  position: absolute;
  top: -2%;
  left: 5%;
`

