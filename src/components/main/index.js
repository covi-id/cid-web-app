import React from "react";

import { Wrapper } from "./styles";
import Nav from "components/nav";
import { useLocation } from "react-router-dom";

function getBackgroundImages(path) {
  const backgroundChangeList = {
    "/create-wallet/status/updated/true": {
      desktop: require("assets/images/desktop-purple-background.svg"),
      mobile: require("assets/images/mobile-purple-background.svg"),
      backgroundColor: "#503dc5",
    },
    "/create-wallet/status/updated/false": {
      desktop: require("assets/images/desktop-purple-background.svg"),
      mobile: require("assets/images/mobile-purple-background.svg"),
      backgroundColor: "#503dc5",
    },
    "/create-wallet/shared/contact-tracer": {
      desktop: require("assets/images/desktop-purple-background.svg"),
      mobile: require("assets/images/mobile-purple-background.svg"),
      backgroundColor: "#503dc5",
    },
    "/create-wallet/created": {
      desktop: require("assets/images/desktop-coviid-background.svg"),
      mobile: require("assets/images/mobile-coviid-background.svg"),
      backgroundColor: "#f1f1f8",
    },
  };

  return backgroundChangeList[path] || null;
}

const Main = ({ children }) => {
  const location = useLocation();
  const background = getBackgroundImages(location.pathname);

  return (
    <Wrapper background={background}>
      <Nav>{children}</Nav>
    </Wrapper>
  );
};

export default Main;
