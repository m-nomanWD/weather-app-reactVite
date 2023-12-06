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
  weekWeatherList: [],
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
      const currentCity = state.citiesList.find(
        (city) => city.name === action.payload
      )
      const currentWeekWeather = state.weekWeatherList.find(
        (weekWeather) => weekWeather.city.name === action.payload
      )
      state.currentWeather = currentCity
      state.weekWeather = currentWeekWeather
    },
    handleAddCity: (state, action) => {
      const { currentWeather, weekWeather } = action.payload
      const checkCity = state.citiesList.filter(
        (city) => city.name === currentWeather.name
      )
      if (checkCity.length === 0) {
        state.citiesList.push(currentWeather)
        state.weekWeatherList.push(weekWeather)
        const newList = state.citiesList
        const newWeekWeather = state.weekWeatherList
        localStorage.setItem('cites', JSON.stringify(newList))
        localStorage.setItem('weekWeather', JSON.stringify(newWeekWeather))
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
      const localStorageWeekData = JSON.parse(
        localStorage.getItem('weekWeather')
      )

      if (state.citiesList.length === 0 && localStorageData === null) {
        state.citiesList.push(action.payload.currentWeatherData)
        state.weekWeatherList.push(action.payload.weekWeatherData)
        localStorage.setItem(
          'cites',
          JSON.stringify([action.payload.currentWeatherData])
        )
        localStorage.setItem(
          'weekWeather',
          JSON.stringify([action.payload.weekWeatherData])
        )
      } else {
        state.citiesList = localStorageData
        state.weekWeatherList = localStorageWeekData
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
