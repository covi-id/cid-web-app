import styled from 'styled-components'

export const Field = styled.div`
  justify-content: left;
  height: 21.4%;
  text-align: left;
`

export const Input = styled.input`
  font-family: 'Montserrat';
  font-size: 1.4vw;
  font-weight: 400;
  border: none;
  height: 56%;
  width: 100%;
  transition: color 2s;
  border-radius: 2em;
  color: #ffffff;
  background: #c9c0fa;
  padding-left: 6%;

  &:active,
  :focus,
  :visited {
    outline: none;
  }

  :placeholder:active {
    outline: none;
  }

  :focus:hover {
    color: #ffffff;

    outline: none;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #ffffff;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #ffffff;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #ffffff;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #ffffff;
  }
`
export const Label = styled.div`
  color: #654cf0;
  font-weight: 600;
  font-size: 1.4vw;
  margin-left: 5%;
  margin-bottom: 4%;
`
