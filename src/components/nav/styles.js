import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  padding: 75px 80px 0 75px;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 9.66%;
    padding-bottom: 0%;
  }
`;

const MainLogo = styled.img`
  width: 161px;
  display: ${props => props.hide && "none"};

  @media screen and (max-width: 768px) {
    width: 110px;
  }
`;

export { MainLogo, Container, Header };
