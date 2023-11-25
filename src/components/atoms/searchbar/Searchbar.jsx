import React from 'react'
import styles from './index.module.css'
import { SearchIcon } from '../../../constants/index'
import { getCurrentWeather } from '../../../features/getWeatherSlice'
export default function Searchbar() {
  const [city, setCity] = React.useState()

  return (
    <div className={styles.inputContainer}>
      <input
        type='text'
        placeholder='city'
        className={styles.input}
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
      />
      <SearchIcon onClickAction={getCurrentWeather(`?q=${city}`)} />
    </div>
  )
}
