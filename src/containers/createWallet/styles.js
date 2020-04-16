import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

const Footer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

export { Form, Left, Right, Footer, BodyContainer };
