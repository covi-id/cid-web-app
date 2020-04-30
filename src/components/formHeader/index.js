import React from "react";
import { Container, HeadingContainer } from "./styles";
import BackButton from "components/backButton";
import Heading1 from "components/shared/h1";

const FormHeader = ({ heading, children, showBack = true }) => (
  <HeadingContainer>
    {children}
    <Container>
      {showBack && <BackButton path="/" />}
      <Heading1>{heading}</Heading1>
    </Container>
  </HeadingContainer>
);

export default FormHeader;
