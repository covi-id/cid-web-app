import React, { useState } from "react";
import CreateWallet from "containers/createWallet";
import { Container } from "./styles.js";
import TwoFactorAuth from "components/twoFactorAuth/index.js";

const CreateWalletPage = () => {
  const [otpData, setOtpData] = useState(null);
  return (
    <Container>
      <TwoFactorAuth otpData={otpData}>
        <CreateWallet twoStepCallback={data => setOtpData(data)} />
      </TwoFactorAuth>
    </Container>
  );
};

export default CreateWalletPage;
