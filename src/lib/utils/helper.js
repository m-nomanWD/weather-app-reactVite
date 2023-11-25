const convertToCal = (temp) => {
  const cal = (temp - 273.13).toFixed(2)
  return cal
}
const convertToFer = (temp) => {
  const cal = convertToCal(temp)
  const fer = ((9 / 5) * cal + 32).toFixed(2)
  return fer
}
export { convertToCal, convertToFer }
