import { configureStore } from '@reduxjs/toolkit'
import getWeatherSlice from './features/getWeatherSlice'
import convertTempSlice from './features/convertTemp'
const store = configureStore({
  reducer: {
    currentWeather: getWeatherSlice,
    tempSlice: convertTempSlice,
  },
})
export default store
