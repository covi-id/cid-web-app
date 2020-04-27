import React from "react";
import { useHistory } from "react-router-dom";

import { BackButton as Button, BackTick } from "./styles";

const BackButton = ({ path = "/" }) => {
  const history = useHistory();
  return (
    <Button onClick={() => history.push(path)}>
      <BackTick />
    </Button>
  );
};

export default BackButton;
