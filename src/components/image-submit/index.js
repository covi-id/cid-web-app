import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
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
        <Heading>Upload image</Heading>
      </HeadingContainer>
      <ImageUpload>{MyDropzone()}</ImageUpload>
    </SubmitContainer>
  )
}
export default ImageSubmit

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    alert('File uploaded!')
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <TextContainer>
        <Text>
          Drag and drop or attach file <Link href=' '>here.</Link>
        </Text>
      </TextContainer>
    </div>
  )
}
