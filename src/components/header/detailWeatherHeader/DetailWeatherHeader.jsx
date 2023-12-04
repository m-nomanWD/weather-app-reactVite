import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.css'
import { MainText } from '../../index'
import { Searchbar } from '../../index'

export default function DetailWeatherHeader() {
  // const { currentWeather } = useSelector((store) => store.currentWeather)
  // const { name } = currentWeather
  return (
    <div className={styles.detailWeatherContainer}>
      <div className={styles.textContainer}>
        <MainText text={`Today's Weather`} />
      </div>
      <Searchbar />
    </div>
  )
}
