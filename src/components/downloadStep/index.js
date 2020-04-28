import React from 'react'
import {
  StepWrapper,
  LeftWrapper,
  NumberBox,
  StepNumber,
  RightWrapper,
  StepText,
} from './styles'

const DownloadStep = ({step, text, random}) => {
  return (
    <StepWrapper>
      <LeftWrapper>
        <NumberBox>
          <StepNumber>{step}</StepNumber>
        </NumberBox>
      </LeftWrapper>
      <RightWrapper>
        <StepText>{text}</StepText>
        {random}
      </RightWrapper>
    </StepWrapper>
  )
}

export default DownloadStep
