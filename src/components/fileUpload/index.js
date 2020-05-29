import React, { useCallback, useState } from "react";
import { string } from "prop-types";
import { useDropzone } from "react-dropzone";
import { connect } from "formik";

import {
  Container,
  FileContainer,
  DropzoneLabel,
  AttachmentIcon,
  CloseButton,
} from "./styles";
import toBase64 from "utils/toBase64";
import FormLabel from "components/shared/formLabel";
import FormItemWrapper from "components/shared/formItemWrapper";
import ImageCrop from "components/imageCrop";
import b64toBlob from "utils/b64toBlob";
import compressImage from "utils/compressImage";

const FileUpload = ({ placeholder, dropText, label, name, formik }) => {
  const [uncroppedImage, setUncroppedImage] = useState(null);
  const { setFieldValue } = formik;
  const error = formik.touched[name] && formik.errors[name];
  const [image, setImage] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const base64Image = await toBase64(file);
    setUncroppedImage(base64Image);
  }, []);

  const cropHandler = useCallback(
    async (image) => {
      const compressedImage = await compressImage(image);
      const file = b64toBlob(compressedImage, "image/png");
      setFieldValue(name, compressedImage);
      setImage(URL.createObjectURL(file));
      setUncroppedImage(null);
    },
    [name, setFieldValue]
  );

  const removeHandler = useCallback(() => {
    setFieldValue(name, "");
    setImage(null);
  }, [name, setFieldValue]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop,
  });

  const closeHandler = useCallback(() => {
    setUncroppedImage(null);
  }, []);

  return (
    <FormItemWrapper>
      <ImageCrop
        open={!!uncroppedImage}
        closeHandler={closeHandler}
        cropHandler={cropHandler}
        imageB64={uncroppedImage}
      />
      <Container>
        <FormLabel error={error} description={label} name={name} />

        <CloseButton active={!!image} onClick={removeHandler}>
          <img src={require("assets/images/close_icon.svg")} alt="close icon" />
        </CloseButton>

        <FileContainer {...getRootProps()} backgroundImage={image}>
          {image && (
            <img
              src={image}
              style={{ width: "100%", borderRadius: "20px" }}
              alt="profile upload"
            />
          )}
          <input name={name} {...getInputProps()} />
          {image ? null : isDragActive ? (
            <DropzoneLabel>{dropText}</DropzoneLabel>
          ) : (
            <>
              <AttachmentIcon />
              <DropzoneLabel>{placeholder}</DropzoneLabel>
            </>
          )}
        </FileContainer>
      </Container>
    </FormItemWrapper>
  );
};

FileUpload.propTypes = {
  placeholder: string.isRequired,
  dropText: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
};

export default connect(FileUpload);
