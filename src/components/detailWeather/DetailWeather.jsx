import React from 'react'
import styles from './index.module.css'
import { WeekWeatherContainer, DetailWeatherHeader, CitiesList } from '../index'
export default function DetailWeather() {
  return (
    <div className={styles.detailWeatherContainer}>
      <DetailWeatherHeader />
      <div className='mainContainer'>
        <WeekWeatherContainer />
        <CitiesList />
      </div>
    </div>
  )
}
