import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Card,
  TextContainer,
  ButtonWrapper,
  Heading,
} from "./styles.js";

import SmallButton from "components/smallButton";

const WalletDeleted = () => {
  const history = useHistory();

  return (
    <Container>
      <Card>
        <TextContainer>
          <Heading>
            Your data and Covi-ID has been successfully deleted.
          </Heading>
        </TextContainer>
        <ButtonWrapper>
          <SmallButton onClick={() => history.push("/")}>Home</SmallButton>
        </ButtonWrapper>
      </Card>
    </Container>
  );
};
export default WalletDeleted;
