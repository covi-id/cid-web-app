import jsQR from "jsqr";

function decodeQr(imageData, width, height, options = {}) {
  try {
    return jsQR(imageData, width, height).data;
  } catch (error) {
    throw error
  }
}

export default decodeQr;
