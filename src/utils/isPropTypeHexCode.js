const HEXCODE_REGEX = /^#[0-9A-F]{6}$/i;
const INVALID_HEX_ERROR = "Invalid HexCode specified.";

export default function isPropTypeHexCode(props, propName, componentName) {
  componentName = componentName || "ANONYMOUS";

  if (props[propName]) {
    let value = props[propName];
    if (HEXCODE_REGEX.test(value)) {
      return null;
    }

    return new Error(INVALID_HEX_ERROR);
  }

  // assume all ok
  return null;
}
