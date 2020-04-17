import styled from "styled-components";

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

export { Input };
