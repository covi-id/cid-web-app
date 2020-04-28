import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -50px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  flex-direction: column;
`;

export { Container, HeadingContainer };
