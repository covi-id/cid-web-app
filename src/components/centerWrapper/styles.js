import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;

  @media screen and (max-width: 600px) {
    margin: 0 60px;
    padding-top: 120px;
    height: unset;
  }
`;

export { Container };
