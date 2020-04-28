import styled from "styled-components";
import Logo from "assets/images/logo-dark.svg";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 75px 80px 0 75px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 9.66%;
    padding-bottom: 0%;
  }
`;

const MainLogo = styled.img.attrs({ src: Logo })`
  width: 161px;
  display: ${props => props.hide && "none"};

  @media screen and (max-width: 600px) {
    width: 110px;
  }
`;

export { MainLogo, Container, Header };
