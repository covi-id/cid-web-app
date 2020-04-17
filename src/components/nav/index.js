import React from "react";

import CenterWrapper from "components/centerWrapper";
import { MainLogo, Container, Header } from "./styles";

const Nav = ({ children }) => (
  <Container>
    <Header>
      <MainLogo />
    </Header>
    <CenterWrapper>{children}</CenterWrapper>
  </Container>
);

export default Nav;
