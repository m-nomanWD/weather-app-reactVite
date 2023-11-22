import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainContainer } from './components'

import './App.css'
import { ClockLoader } from 'react-spinners'
import { toast } from 'react-hot-toast'
import axios from 'axios'

import { getCurrentWeather } from './features/getWeatherSlice'

function App() {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const dispatch = useDispatch()
  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      // Get the user's current position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Success callback
          setLat(position.coords.latitude)

          setLon(position.coords.longitude)
        },
        function (error) {
          // Error callback
          console.error(`Error getting location: ${error.message}`)
        }
      )
    } else {
      console.error('Geolocation is not supported by your browser')
    }
  }
  useEffect(() => {
    getCurrentLocation()
  }, [lat, lon])
  useEffect(() => {
    isLoading && dispatch(getCurrentWeather(`?lat=${lat}&lon=${lon}`))
  }, [lat, lon])
  const { isLoading, isError, currentWeather } = useSelector(
    (store) => store.currentWeather
  )

  if (isLoading) {
    return <ClockLoader color={'red'} loading={isLoading} size={150} />
  } else {
    return (
      <>
        <MainContainer />
      </>
    )
  }
}

export default App
