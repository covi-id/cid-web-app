import styled from 'styled-components'
import Logo from 'assets/images/logo-dark.svg'

const Container = styled.div`
  width: 100%;
`

const Header = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5.55%;
  padding-bottom: 20px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 9.66%;
    padding-bottom: 0%;
  }
`

const MainLogo = styled.img.attrs({ src: Logo })`
  width: 11.18%;
  display: ${(props) => props.hide && 'none'};

  @media screen and (max-width: 600px) {
    width: 38.89%;
  }
`

export { MainLogo, Container, Header }
