import styled from "styled-components";

const Input = styled.input`
  font-size: 1rem;
  height: 50px;
  border-radius: 60px;
  border: none;
  background-color: #c9c0fa;
  padding: 0 20px;
  width: 100%;
  margin-top: 10px;
  font-weight: 500;
  caret-color: 10px solid #654cf0;
  transition: 0.2s ease-out;
  color: #ffffff;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #c9c0fa inset !important;
  }

  &:focus {
    outline: none;
    box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
    background-color: #b2a5f7;
  }

  &::placeholder {
    font-size: 1rem;
    color: #ffffff;
  }
`;

export { Input };
