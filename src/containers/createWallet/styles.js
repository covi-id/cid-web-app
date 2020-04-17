import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;

  @media screen and (max-width: 600px) {
    margin: 0 70px;
  }
`;

const Footer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

export { Form, Left, Right, Footer, BodyContainer };
