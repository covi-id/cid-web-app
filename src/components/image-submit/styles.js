import styled from 'styled-components'
import ClipIcon from 'assets/icons/clip-icon.svg'

export const ImageUpload = styled.div`
  width: 80%;
  height: 76.6%;
  margin-left: 9%;
  background-color: #f1f0f8;
  border: 3px dashed #c9c0fa;
  border-radius: 2em;
`

export const SubmitContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  vertical-align: middle;
`

export const HeadingContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: left;
`

export const Heading = styled.div`
  color: #654cf0;
  font-weight: 600;
  font-size: 1.4rem;
  margin-left: 15%;
  margin-bottom: 5.3%;
`
export const Clip = styled.img.attrs({ src: ClipIcon })`
  width: 10%;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  width: 80%;
  margin: 0 auto;
`

export const Text = styled.div`
  color: #a99afa;
  font-size: 1.4vw;
  font-weight: 600;
  margin: 72% 0 0 0;
`
export const Link = styled.a`
  color: #7158f6;
`
