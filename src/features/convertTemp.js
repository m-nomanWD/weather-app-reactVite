import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  checkTempUnit: false,
}
const convertTempSlice = createSlice({
  name: 'convertTempSlice',
  initialState,
  reducers: {
    handleConvertTemp: (state, action) => {
      console.log(!state.checkTempUnit)
      state.checkTempUnit = !state.checkTempUnit
    },
  },
})
export default convertTempSlice.reducer
export const { handleConvertTemp } = convertTempSlice.actions
