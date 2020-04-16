import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FileContainer = styled.div`
  height: 100%;
  border: 2px dashed #c9c0fa;
  width: 100%;
  background-color: #f1f0f8;
  border-radius: 20px;
  display: flex;
  padding: 0 50px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-position: top left;
      background-size: cover;
      background-repeat: no-repeat;
      border: 2px solid #c9c0fa;
    `}

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 17px;
  color: #654cf0;
  font-weight: bold;
  height: 25px;
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
`;

const DropzoneLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #b2a5f7;
`;

const CloseButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #654cf0;
  transform: scale(0);
  transition: 0.2s ease-out;
  position: absolute;
  right: -17px;
  top: 20px;

  &:focus {
    outline: none;
  }

  ${({ active }) =>
    active &&
    css`
      transform: scale(1);
    `}

  &:hover {
    background-color: #583dee;
  }
`;

const AttachmentIcon = styled.img.attrs({
  src: require("assets/images/attachment_icon.svg"),
  alt: "attachment icon"
})`
  margin: 10px;
`;

const ErrorMessage = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #e90000;
  opacity: 0;
  transition: 0.2s ease-out;
  padding-top: 8px;
  text-align: right;
  font-style: italic;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;

export {
  Container,
  FileContainer,
  DropzoneLabel,
  AttachmentIcon,
  Label,
  CloseButton,
  ErrorMessage
};
