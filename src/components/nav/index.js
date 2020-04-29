import React from "react";

import CenterWrapper from "components/centerWrapper";
import { MainLogo, Container, Header } from "./styles";
import { useHistory, useLocation } from "react-router-dom";

function getLogo(path) {
  const backgroundChangeList = {
    "/create-wallet/status/updated": require("assets/images/logo-light.svg")
  };

  return backgroundChangeList[path] || require("assets/images/logo-dark.svg");
}

const Nav = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const logo = getLogo(location.pathname);

  return (
    <Container>
      <Header>
        <MainLogo src={logo} onClick={() => history.push("/")} />
      </Header>
      <CenterWrapper>{children}</CenterWrapper>
    </Container>
  );
};

export default Nav;
