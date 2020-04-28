import styled from 'styled-components'

export const StepWrapper = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;

  margin: 30px 0px 20px 0px;

  @media screen and (max-width: 600px) {
    flex-direction: column;

    margin: 0px auto;
    justify-content: center;
    width: 100%;
  }
`

// ================LEFT SIDE====================

export const LeftWrapper = styled.div`
  width: 60px;

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: 100px;
    justify-content: center;
  }
`
export const NumberBox = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #b2a5f7;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  margin-top: 10px;
  margin: 10px 20px 0 0px;

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    width: 30px;
    height: 30px;
  }
`
export const StepNumber = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #b2a5f7;
  margin: 6px auto;

  @media screen and (max-width: 600px) {
    margin: 2px auto;
  }
`
// ================RIGHT SIDE====================

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: left;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
export const StepText = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7c7795;
  margin: 0px auto 10px 2px;
  text-align: left;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;

    margin: 13px auto;
  }
`
