import styled from 'styled-components'

export const SubmitButton = styled.button`
  :active,
  :focus {
    outline: none;
  }
  background-color: #e1fff6;
  color: #03ce8e;
  border-radius: 3em;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  justify-content: center;
  outline: none;
  transition: background-color 1.2s;
  width: 60%;
  min-height: 60px;
  border: none;

  :active,
  :focus {
    background-color: #03f5a9;
    color: #ffffff;
  }
`
export const Center = styled.div`
  text-align: center;
  align-content: center;
  margin-top: 10%;
`
