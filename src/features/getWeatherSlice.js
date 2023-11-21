import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authFetch from '../axios/custom'
const key = 'e7669c5e6de6efbdf2a42708fbb4cdb7'
const daysCount = 5
const initialState = {
  isLoading: true,
  isError: false,
  currentWeather: {},
  weekWeather: {},
}
export const getCurrentWeather = createAsyncThunk(
  'currentWeater/getCurrentWeather',
  async (url) => {
    try {
      const currentWeatherData = await authFetch(`/weather${url}&appid=${key}`)
      const weekWeatherData = await authFetch(
        `/forecast${url}&cnt=${daysCount}&appid=${key}`
      )

      const resp = {
        currentWeatherData: currentWeatherData.data,
        weekWeatherData: weekWeatherData.data,
      }

      return resp
    } catch (error) {
      console.log(error)
    }
  }
)
const weatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    handleCurrentWeather: (state, action) => {
      console.log(state)
    },
  },
  extraReducers: {
    [getCurrentWeather.pending]: (state) => {
      state.isLoading = true
    },
    [getCurrentWeather.fulfilled]: (state, action) => {
      state.isLoading = false

      state.currentWeather = action.payload.currentWeatherData
      state.weekWeather = action.payload.weekWeatherData
    },
    [getCurrentWeather.rejected]: (state) => {
      state.isLoading = false
      state.isError = true
      console.log(state.isError, state.isLoading)
    },
  },
})

export default weatherSlice.reducer
