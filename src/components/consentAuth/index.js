import React from "react";
import VerificationConsent from "pages/verificationConsentPage";

const ConsentAuth = ({ children, testData = null, cancel }) =>
  !testData ? (
    children
  ) : (
    <VerificationConsent otpSubmitData={testData} cancel={cancel} />
  );

export default ConsentAuth;
