import styled from 'styled-components'

export const DownloadButton = styled.button`
  :active,
  :focus {
    outline: none;
  }
  background-color: #ffffff;
  color: #513cc5;
  border-radius: 3em;
  font-family: 'Montserrat';
  font-size: 1.3rem;
  font-weight: 800;
  line-height: 150%;
  justify-content: center;
  outline: none;
  transition: background-color 1.2s;
  width: 29%;
  min-height: 60px;
  border: none;

  :active,
  :focus {
    background-color: #03f5a9;
    color: #513cc5;
  }
`
export const ButtonContainer = styled.div`
  text-align: center;
  align-content: center;
  margin-top: 4%;
`
