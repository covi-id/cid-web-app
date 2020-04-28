import jsQR from "jsqr";

function decodeQr(imageData, width, height, options = {}) {
  try {
    return jsQR(imageData, width, height).data;
  } catch (error) {
    console.error(error);
  }
}

export default decodeQr;
