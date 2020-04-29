import styled from 'styled-components'
import Back from 'assets/icons/back-icon.svg'

export const BackTick = styled.img.attrs({ src: Back })`
  width: 50px;
  margin: 0;
  padding: 0;
  padding-top: 6px;
  padding-right: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 27px;
    padding-right: 3px;
    width: 33px;
  }
`
export const BackButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`

export const InlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -50px;
`

export const Container = styled.div`
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const StepIndicator = styled.div`
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
`

export const StepText = styled.p`
  margin: auto;
  color: #c9c0fa;
  font-weight: 600;
  font-size: 17px;
`

export const HeadingContainer = styled.div`
  justify-content: left;
  display: flex;
  flex-direction: column;
`
export const StepHeading = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #654cf0;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin: 2.42% 0 12.36% 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin: 2.42% 0 12.36% 0;
  }
`
