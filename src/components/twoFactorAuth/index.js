import React from "react";
import OtpContainer from "containers/otp";

const TwoFactorAuth = ({ children, otpData = null }) =>
  !otpData ? children : <OtpContainer otpSubmitData={otpData} />;

export default TwoFactorAuth;
