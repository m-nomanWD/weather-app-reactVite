import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authFetch from '../axios/custom'
import toast from 'react-hot-toast'
const key = 'e7669c5e6de6efbdf2a42708fbb4cdb7'
const daysCount = 7
const initialState = {
  isLoading: true,
  isError: false,
  currentWeather: {},
  weekWeather: {},
  citiesList: [],
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
      console.log(action.payload)
      const currentCity = state.citiesList.find(
        (city) => city.name === action.payload
      )
      console.log(currentCity)
      state.currentWeather = currentCity
    },
    handleAddCity: (state, action) => {
      const checkCity = state.citiesList.filter(
        (city) => city.name === action.payload.name
      )
      if (checkCity.length === 0) {
        state.citiesList.push(action.payload)
        const newList = state.citiesList
        localStorage.setItem('cites', JSON.stringify(newList))
      } else {
        toast.error('city is already in the list')
      }
    },
    handleRemoveCity: (state, action) => {
      toast.error('city remove from list')
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

      const localStorageData = JSON.parse(localStorage.getItem('cites'))

      if (state.citiesList.length === 0 && localStorageData === null) {
        state.citiesList.push(action.payload.currentWeatherData)
        localStorage.setItem(
          'cites',
          JSON.stringify([action.payload.currentWeatherData])
        )
      } else {
        state.citiesList = localStorageData
      }
    },
    [getCurrentWeather.rejected]: (state) => {
      state.isLoading = false
      state.isError = true
      console.log(state.isError, state.isLoading)
    },
  },
})
export const { handleAddCity, handleRemoveCity, handleCurrentWeather } =
  weatherSlice.actions
export default weatherSlice.reducer
