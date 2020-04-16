import styled from 'styled-components'
import FirstIcon from '../../assets/icons/landing-icon.svg'
import PlusIcon from '../../assets/icons/plus-icon.svg'
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

export const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 260px;

  margin: auto auto;
  margin-top: 280px;
`

export const Btn = styled.button`
  width: 247px;
  height: 53px;
  border-radius: 3em;
  margin: 0 auto;
  display: flex;
  background: #03f5a9;
  border: none;
  transition: background 0.5s;

  &:focus,
  &:active {
    outline: none;
  }

  &:focus {
    background: #6ce1ff;
  }

  &:visited {
    outline: none;
    background: #03f5a9;
  }

  &:hover {
    cursor: pointer;
    background: #7cf8d1;
  }
`
export const Icon = styled.img`
  width: 100px;
  margin: 0 auto 30px auto;
`
export const Plus = styled(Icon).attrs({ src: PlusIcon })`
  width: 29px;
  margin: 0px;
  margin-left: 4px;
`
export const LandingIcon = styled(Icon).attrs({ src: FirstIcon })``

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
export const Opener = styled.a`
  text-decoration: none;
  height: 0px;
  width: 0px;
  justify-content: center;

  padding-left: 8.5%;
  padding-bottom: 18%;
`
