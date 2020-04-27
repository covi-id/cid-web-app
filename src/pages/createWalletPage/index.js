import React from "react";
import CreateWallet from "containers/createWallet";
import { Container } from "./styles.js";
import FormHeader from "components/formHeader/index.js";

const CreateWalletPage = () => {
  return (
    <Container>
      <FormHeader heading="Enter details" />
      <CreateWallet />
    </Container>
  );
};

export default CreateWalletPage;
