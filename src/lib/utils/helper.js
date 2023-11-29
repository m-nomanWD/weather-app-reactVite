const convertToCal = (temp) => {
  const cal = (temp - 273.13).toFixed(2)
  return cal
}
const convertToFer = (temp) => {
  const cal = convertToCal(temp)
  const fer = ((9 / 5) * cal + 32).toFixed(2)
  return fer
}
const convertTime = (timestamp, timezoneOffset, type) => {
  const milliseconds = timestamp * 1000

  // Create a new Date object
  const date = new Date(milliseconds)

  // Adjust for timezone offset
  const adjustedMilliseconds = milliseconds + timezoneOffset * 1000
  const adjustedDate = new Date(adjustedMilliseconds)

  // Format the date and time
  const formattedDate = adjustedDate.toISOString().split('T')[0]
  const formattedTime = adjustedDate
    .toISOString()
    .split('T')[1]
    .replace(/\..+/, '')
  if (type === 'time') {
    return formattedTime
  }
  if (type === 'a') {
    return adjustedDate
  } else {
    return formattedDate
  }
}
export { convertToCal, convertToFer, convertTime }
