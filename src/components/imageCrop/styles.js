import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const InnerContainer = styled.div`
  background: #ffffff;
  border-radius: 60px;
  width: 640px;
  height: 708px;
  margin: 70px auto;
`;

const CropArea = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: auto 120px;
`;

const ButtonContainer = styled.div`
`;

export { Container, CropArea, ButtonContainer, InnerContainer };
