import styled from "styled-components";
import CloseIcon from "assets/images/modal-close.svg";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  @media screen and (max-width: 600px) {
    height: 100%;
    overflow: hidden;
  }
`;

const CloseContainer = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 20px;
  padding-top: 20px;
`;

const CloseImg = styled.img.attrs({ src: CloseIcon })`
  width: 20px;
`;

const InnerContainer = styled.div`
  background: #ffffff;
  border-radius: 60px;
  width: 640px;
  height: 708px;
  margin: 70px auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin: 0;
  }
`;

const CropArea = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: auto 120px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const ButtonContainer = styled.div``;

export {
  Container,
  CropArea,
  ButtonContainer,
  InnerContainer,
  CloseContainer,
  CloseImg
};
