import styled from 'styled-components'

const Input = styled.input`
  font-size: 1rem;
  height: 50px;
  border-radius: 60px;
  border: none;
  background-color: #e9e4ff;
  padding: 0 20px;
  width: 100%;
  margin-top: 10px;
  font-weight: 500;
  caret-color: 10px solid #3a2b8b;
  transition: 0.2s ease-out;
  color: #000000;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #e9e4ff inset !important;
  }

  &:focus {
    outline: none;
    box-shadow: 4px 10px 40px rgba(201, 192, 250, 0.8);
    background-color: #e9e4ff;
  }

  &::placeholder {
    font-size: 1rem;
    color: #585858;
  }
`

export { Input }
