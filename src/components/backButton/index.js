import React from "react";
import { useHistory } from "react-router-dom";

import { BackButton as Button, BackTick } from "./styles";

const BackButton = ({ path = "/" }) => {
  const history = useHistory();
  return (
    <Button>
      <BackTick onClick={() => history.push(path)} />
    </Button>
  );
};

export default BackButton;
