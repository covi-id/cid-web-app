import React from "react";
import { Container, HeadingContainer } from "./styles";
import BackButton from "components/backButton";
import Heading1 from "components/shared/h1";

const FormHeader = ({ heading, children }) => (
  <HeadingContainer>
    {children}
    <Container>
      <BackButton path="/" />
      <Heading1>{heading}</Heading1>
    </Container>
  </HeadingContainer>
);

export default FormHeader;
