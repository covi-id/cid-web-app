import styled from "styled-components";

const StepIndicator = styled.div`
  padding: 0 20px;
  height: 35px;
  background-color: #efecfe;
  border-radius: 30px;
  display: flex;
  width: 40.685%;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 41.3%;
  }
`;

const StepText = styled.p`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 17px;
`;

export { StepIndicator, StepText };
