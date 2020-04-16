import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  font-size: 17px;
  color: #654cf0;
  font-weight: bold;
  height: 25px;
  width: 100%;
  text-align: left;
`;

const Input = styled.input`
  font-size: 16px;
  height: 50px;
  border-radius: 60px;
  border: none;
  background-color: #c9c0fa;
  padding: 0 20px;
  width: 100%;
  margin-top: 8px;
  font-weight: 500;
  caret-color: 10px solid #654cf0;
  transition: 0.2s ease-out;

  &:focus {
    outline: none;
    box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
  }

  &::placeholder {
    font-size: 16px;
    color: #ffffff;
  }
`;

const ErrorMessage = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #e90000;
  opacity: 0;
  transition: 0.2s ease-out;
  padding-top: 8px;
  text-align: right;
  font-style: italic;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

export { Container, Label, Input, ErrorMessage };
