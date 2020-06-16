import React from "react";

import DeleteWallet from "./deleteWallet";
import AddTest from "./addTest";

const ConnectCoviID = ({ purpose }) => {
  if (purpose === "deleteWallet") {
    return <DeleteWallet purpose={purpose} />;
  }

  return <AddTest purpose={purpose} />;
};

export default ConnectCoviID;
