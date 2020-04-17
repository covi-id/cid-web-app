import React from "react";

import { Wrapper } from "./styles";
import Nav from "components/nav";

const Main = ({ children }) => (
  <Wrapper>
    <Nav>{children}</Nav>
  </Wrapper>
);

export default Main;
