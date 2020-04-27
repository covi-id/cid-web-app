import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 60px;
  width: 180px;
  min-height: 50px;
  font-size: 0.94rem;
  font-weight: bold;
  transition: 0.2s ease-out;
  border: none;
  cursor: pointer;
  color: #513cc5;
  background-color: #03f5a9;
  margin: 25px auto;

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

  ${({ secondary }) =>
    secondary &&
    css`
      color: #b6b3c9;
      background-color: transparent;

      &:hover {
        background-color: transparent;
        color: #8b86a9;
      }
    `}
`;

export { Button };
