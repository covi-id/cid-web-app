import styled from "styled-components";

const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    align-items: center;
    padding-bottom: 20px;
  }
`;

export default FormItemWrapper;
