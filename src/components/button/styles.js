import styled from "styled-components";

const Button = styled.button`
  border-radius: 60px;
  min-width: 180px;
  min-height: 50px;
  font-size: 15px;
  font-weight: bold;
  transition: 0.2s ease-out;
  border: none;
  cursor: pointer;
  color: #513cc5;
  background-color: #03f5a9;

  &:disabled {
    background-color: #e1fff6;
    color: #03ce8e;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #02e8a0;
  }
`;

export { Button };
