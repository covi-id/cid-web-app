import React from 'react'
import {
  SubmitContainer,
  ImageUpload,
  Heading,
  HeadingContainer,
  TextContainer,
  Text,
  Link,
} from './styles'

const ImageSubmit = () => {
  return (
    <SubmitContainer>
      <HeadingContainer>
        <Heading>ImageUpload</Heading>
      </HeadingContainer>
      <ImageUpload>
        <TextContainer>
          <Text>
            Drag and drop or attach file <Link href=' '>here.</Link>
          </Text>
        </TextContainer>
      </ImageUpload>
    </SubmitContainer>
  )
}
export default ImageSubmit
