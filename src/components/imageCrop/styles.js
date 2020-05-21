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

  @media screen and (max-width: 768px) {
    height: 100%;
    overflow: hidden;
  }
`;

const CloseContainer = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 40px;
  padding-top: 40px;
`;

const CloseImg = styled.img.attrs({ src: CloseIcon })`
  width: 20px;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  background: #ffffff;
  border-radius: 60px;
  width: 640px;
  height: 708px;
  margin: 70px auto;
  padding-bottom: 45px;
  overflow: auto;
  box-shadow: 0px 5px 40px rgba(108, 109, 133, 0.15);

  ::-webkit-scrollbar {
    width: 10px;
    height: 0px;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px #bfbfbf;
    border-radius: 10px;
    margin: 42px 0px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 35px #e9e4ff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
    margin: 0 auto;

    ::-webkit-scrollbar {
      width: 8px;
      height: 0px;
    }
  }
`;

const CropArea = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: auto 120px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const ButtonContainer = styled.div``;

export {
  Container,
  CropArea,
  ButtonContainer,
  InnerContainer,
  CloseContainer,
  CloseImg,
};
