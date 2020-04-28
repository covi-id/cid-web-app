import React from "react";

import { Wrapper } from "./styles";
import Nav from "components/nav";
import { useLocation } from "react-router-dom";

function getBackgroundImages(value) {
  const backgroundChangeList = {
    "/create-wallet/status/updated": {
      desktop: require("assets/images/desktop-coviid-background.svg"),
      mobile: require("assets/images/mobile-coviid-background.svg")
    },
    "/create-wallet/created": {
      desktop: require("assets/images/desktop-coviid-background.svg"),
      mobile: require("assets/images/mobile-coviid-background.svg")
    }
  };

  return backgroundChangeList[value] || null;
}

const Main = ({ children }) => {
  const location = useLocation();
  const background = getBackgroundImages(location.pathname);
  console.log(background);
  return (
    <Wrapper background={background}>
      <Nav>{children}</Nav>
    </Wrapper>
  );
};

export default Main;
