import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  /* margin: auto; */
`;

export const Heading = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 14px;

  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
`;

export const Text = styled.div`
  width: 160px;
  height: 20px;
  vertical-align: middle;
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.01em;
  font-weight: bold;
  color: #654cf0;
`;

export const StepIndicator = styled.div`
  padding: 0 20px;
  height: 35px;
  background-color: #efecfe;
  border-radius: 30px;
  display: flex;
  width: 115px;
`;

export const StepText = styled.p`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 16px;
`;

export const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  flex-direction: column;
`;
export const StepHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #654cf0;
  margin: 10px 0 30px 0;

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
