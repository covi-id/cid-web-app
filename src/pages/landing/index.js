import React from "react";
import {
  Container,
  LandingIcon,
  Heading,
  ButtonsContainer,
} from "./styles";
import ButtonLink from "components/buttonLink";

const Landing = () => {
  return (
    <Container>
      <LandingIcon />
      <Heading>Hi there,</Heading>
      <ButtonsContainer>
        <>
          <ButtonLink
            to="/create-wallet/details"
            icon={require("assets/icons/plus-icon.svg")}
          >
            Create my Covi-ID
          </ButtonLink>
          <ButtonLink
            to="/create-wallet/status"
            icon={require("assets/icons/plus-icon.svg")}
          >
            Add a test result
          </ButtonLink>
        </>

        {/* <DeleteContainer>
          <ButtonLink disabled={true} to="/delete-wallet" variant="secondary">
            Delete my data
          </ButtonLink>
        </DeleteContainer> */}
      </ButtonsContainer>
    </Container>
  );
};
export default Landing;
