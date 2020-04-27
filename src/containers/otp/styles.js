import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const LeadText = styled.p`
  font-size: 20px;
  color: #7c7795;
  line-height: 150%;
  text-align: center;
  margin: 20px 0 40px 0;

  & > * {
    font-size: 20px;
  }
`;

export { Form, LeadText, Container };
