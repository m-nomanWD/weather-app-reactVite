import { configureStore } from '@reduxjs/toolkit'
import getWeatherSlice from './features/getWeatherSlice'
const store = configureStore({
  reducer: {
    currentWeather: getWeatherSlice,
  },
})
export default store
