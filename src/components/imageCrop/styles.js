import styled from "styled-components";
import CloseIcon from "assets/images/modal-close.svg";
import Row from "components/shared/row";

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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseImg = styled.img.attrs({ src: CloseIcon })`
  width: 20px;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  background: #ffffff;
  border-radius: 60px;
  width: 640px;
  height: auto;
  margin: 70px auto;
  overflow: auto;
  box-shadow: 0px 5px 40px rgba(108, 109, 133, 0.15);
  padding: 20px 0px;

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
    height: 100%;
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
  margin: 15px 120px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 15px auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
  }

  button {
    margin: 25px 5px;

    @media screen and (max-width: 768px) {
      margin: 15px 5px;
    }
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #654cf0;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 15px 40px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export {
  Container,
  CropArea,
  ButtonContainer,
  InnerContainer,
  CloseContainer,
  CloseImg,
  Title,
  Header,
};
