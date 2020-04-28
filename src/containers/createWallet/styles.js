import styled from "styled-components";
import { AttachmentIcon, DropzoneLabel } from "components/fileUpload/styles";
import { Button } from "components/button/styles";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${Button} {
    background: #e1fff6;
    color: #03ce8e;
  }
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
  text-align: center;

  ${AttachmentIcon} {
    @media screen and (max-width: 600px) {
      padding-top: 58%;
    }
  }

  ${DropzoneLabel} {
    @media screen and (max-width: 600px) {
      padding-bottom: 58%;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    flex-direction: column-reverse;
  }
`;

const MobileNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  text-align: center;
  padding: 18px 0 50px 30px;

  @media screen and (max-width: 768px) {
    padding: 30px 0 50px 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 0px 50px 10px;
  }
`;

export { Form, Left, Right, Footer, BodyContainer, MobileNumberContainer };
