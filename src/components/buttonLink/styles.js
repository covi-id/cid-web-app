import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.a`
  display: flex;
  text-decoration: none;
  height: 60px;
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

const InternalLinkContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  height: 60px;
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
  padding-bottom: 13px;
  font-size: 16px;
  width: 210px;
`;

const Icon = styled.img`
  width: 30px;
  margin-left: 6px;
  margin-right: 5px;
`;

export { Container, Icon, Text, InternalLinkContainer };
