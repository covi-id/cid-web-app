import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  background: #c9c0fa;
  border-radius: 60px;
  border: none;
  width: 50px;
  height: 60px;
  margin: 10px;
  font-size: 16px;
  color: #110a37;
  text-align: center;
  font-weight: 500;

  &::placeholder {
    color: #ffffff;
  }

  &:active {
      
    box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
  }

  &:focus {
    box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
    outline: none;
  }
`;

export { Input, Container };
