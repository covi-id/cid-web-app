import styled, { css } from 'styled-components'
import * as FormLabel from 'components/shared/formLabel'

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    ${FormLabel.Label} {
      text-align: center;
      & label {
        margin-left: 0px;
      }
    }
  }
`

const FileContainer = styled.div`
  height: 240px;
  border: 2px dashed #c9c0fa;
  width: 240px;
  background-color: #f1f0f8;
  border-radius: 20px;
  display: flex;
  padding: 0 50px;
  margin-bottom: 14px;
  margin-top: 14px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      border: 2px solid #c9c0fa;
      padding: 0;
    `}

  &:focus {
    outline: none;
  }
`

const Label = styled.label`
  font-size: 1.06rem;
  color: #654cf0;
  font-weight: bold;
  height: 25px;
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
`

const DropzoneLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #b2a5f7;
`

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
`

const AttachmentIcon = styled.img.attrs({
  src: require('assets/images/attachment_icon.svg'),
  alt: 'attachment icon',
})`
  margin: 10px;
`

export {
  Container,
  FileContainer,
  DropzoneLabel,
  AttachmentIcon,
  Label,
  CloseButton,
}
