import React, { useState } from "react";
import Cropper from "react-easy-crop";

import {
  Container,
  ButtonContainer,
  CropArea,
  InnerContainer,
  CloseContainer,
  CloseImg,
  Title,
  Header,
} from "./styles";
import Button from "components/button";
import getCroppedImg from "utils/cropImage";

const ImageCrop = ({ imageB64, open, closeHandler, cropHandler }) => {
  const [state, setState] = useState({
    image: imageB64,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 4 / 4,
    croppedAreaPixels: null,
  });

  const onCropChange = (crop) => {
    setState({ ...state, crop });
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setState({ ...state, croppedAreaPixels });
  };

  const onZoomChange = (zoom) => {
    setState({ ...state, zoom });
  };

  const completeCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageB64,
        state.croppedAreaPixels,
        0
      );
      cropHandler(croppedImage);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    open && (
      <Container>
        <InnerContainer>
          <Header>
            <Title>Crop Image</Title>
            <CloseContainer>
              <CloseImg onClick={closeHandler} />
            </CloseContainer>
          </Header>

          <CropArea>
            <Cropper
              containerStyle={{ width: "400px", height: "400px" }}
              image={imageB64}
              aspect={state.aspect}
              zoom={state.zoom}
              crop={state.crop}
              onCropChange={onCropChange}
              onCropComplete={onCropComplete}
              onZoomChange={onZoomChange}
            />
          </CropArea>
          <ButtonContainer>
            <Button onClick={closeHandler} variant="tertiary">
              Cancel
            </Button>
            <Button onClick={completeCrop}>Done</Button>
          </ButtonContainer>
        </InnerContainer>
      </Container>
    )
  );
};

export default ImageCrop;
