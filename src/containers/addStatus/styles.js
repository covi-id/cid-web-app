import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestDateSection = styled.div`
  display: flex;

  & > * {
    margin-right: 60px;
  }
`;

const Footer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

export { Form, Footer, BodyContainer, TestDateSection };
