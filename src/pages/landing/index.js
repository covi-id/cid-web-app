import React from "react";
import { Container, LandingIcon, Heading } from "./styles.js";
import ButtonLink from "components/buttonLink/index.js";

const Landing = () => {
  return (
    <Container>
      <LandingIcon />
      <Heading>Hi there,</Heading>
      <ButtonLink
        to="/create-wallet/details"
        icon={require("assets/icons/plus-icon.svg")}
      >
        Create my Covi-ID
      </ButtonLink>
    </Container>
  );
};
export default Landing;
