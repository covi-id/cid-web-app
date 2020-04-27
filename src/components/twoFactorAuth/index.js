import React, { useState } from "react";
import OtpContainer from "containers/otp";

const TwoFactorAuth = ({ children, activateVerification }) => {
  const [stage, setStage] = useState(0);

  return stage === 0 ? children : <OtpContainer />;
};

export default TwoFactorAuth;
