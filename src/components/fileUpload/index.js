import React, { useCallback, useState } from "react";
import { string } from "prop-types";
import { useDropzone } from "react-dropzone";
import { connect } from "formik";

import {
  Container,
  FileContainer,
  DropzoneLabel,
  AttachmentIcon,
  Label,
  CloseButton,
  ErrorMessage
} from "./styles";
import toBase64 from "utils/toBase64";

const FileUpload = ({ placeholder, dropText, label, name, formik }) => {
  const { setFieldValue, handleBlur } = formik;
  const error = formik.errors[name];

  const [image, setImage] = useState(null);
  const onDrop = useCallback(
    async acceptedFiles => {
      const file = acceptedFiles[0];
      const base64Image = await toBase64(file);
      setFieldValue(name, base64Image);
      setImage(URL.createObjectURL(file));
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
    onDrop
  });

  return (
    <Container>
      <Label>
        {label} <ErrorMessage show={!!error}>{error}</ErrorMessage>
      </Label>

      <CloseButton active={!!image} onClick={removeHandler}>
        <img src={require("assets/images/close_icon.svg")} alt="close icon" />
      </CloseButton>

      <FileContainer {...getRootProps()} backgroundImage={image}>
        <input onBlur={handleBlur} name={name} {...getInputProps()} />
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
  );
};

FileUpload.propTypes = {
  placeholder: string.isRequired,
  dropText: string.isRequired,
  label: string.isRequired,
  name: string.isRequired
};

export default connect(FileUpload);
