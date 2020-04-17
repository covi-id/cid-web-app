import styled from "styled-components";
import Logo from "assets/images/logo-dark.svg";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  padding: 75px 80px;
  padding-bottom: 20px;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 40px;
  }
`;

const MainLogo = styled.img.attrs({ src: Logo })`
  width: 161px;
`;

export { MainLogo, Container, Header };
