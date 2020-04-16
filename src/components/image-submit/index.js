import React from 'react'
import { SubmitContainer, ImageUpload, TextContainer, Text } from './styles'

const ImageSubmit = () => {
  return (
    <SubmitContainer>
      <TextContainer>
        <Text>ImageUpload</Text>
      </TextContainer>
      <ImageUpload></ImageUpload>
    </SubmitContainer>
  )
}
export default ImageSubmit
