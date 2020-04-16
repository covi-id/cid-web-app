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
  background-color: #e1fff6;
  color: #03ce8e;

  &:disabled {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #c8ffee;
  }
`;

export { Button };
