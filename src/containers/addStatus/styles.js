import styled, { css } from "styled-components";
import { Input } from "components/textInput/styles";
import { Button } from "components/button/styles";

const Form = styled.form`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ItemContainer = styled.div`
  flex: 1;
  min-width: 275px;
  padding-right: 25px;
  max-width: 275px;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 245px;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 215px;
  }
`;

const MakeInline = styled.div`
  display: flex;
  flex: row;
  height: 70px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestDateSection = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  ${Input} {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
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

  ${Button} {
    background: #03f5a9;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export {
  Form,
  Footer,
  BodyContainer,
  TestDateSection,
  HideContainer,
  InputWrapper,
  MakeInline,
  ItemContainer
};
