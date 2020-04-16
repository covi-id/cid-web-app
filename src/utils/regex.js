export const containsSpecialCharacters = (value) => {
  return /[$!%*#?&]/gm.test(value)
}
