import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  display: flex;
  text-decoration: none;
  height: 50px;
  justify-content: space-evenly;

  align-items: center;
  background: #03f5a9;
  border-radius: 60px;
  font-weight: bold;
  color: #654cf0;
  padding: 5px;
  min-width: 247px;

  &:hover {
    background-color: #02e8a0;
  }
`;

const Text = styled.span`
  padding: 10px;
`;

const Icon = styled.img`
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

export { Container, Icon, Text };
