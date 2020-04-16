import React from "react";
import { Container, LandingIcon, Heading } from "./styles.js";
import ButtonLink from "components/buttonLink/index.js";

const Landing = () => {
  return (
    <Container>
      <LandingIcon />
      <Heading>Hi there,</Heading>
      <ButtonLink
        to="/proof-request"
        icon={require("assets/icons/plus-icon.svg")}
      >
        Create a new wallet
      </ButtonLink>
    </Container>
  );
};
export default Landing;
