import styled, { css } from "styled-components";

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

const HideContainer = styled.div`
  opacity: 0;
  pointer-events: none;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

const Footer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

export { Form, Footer, BodyContainer, TestDateSection, HideContainer };
