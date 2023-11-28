import React from 'react'
import styles from './index.module.css'
import { MainText, WeatherIcon } from '../index'
import { useSelector } from 'react-redux'
import { convertToCal, convertToFer, convertTime } from '../../lib/utils/helper'
export default function SingleWeatherStrip({ item, timezone, index }) {
  const { main, weather, dt } = item
  const ferTemp = convertToFer(main.temp)
  const calTemp = convertToCal(main.temp)
  const time = convertTime(dt, timezone, 'time').slice(0, 5)
  const { checkTempUnit } = useSelector((store) => store.tempSlice)
  console.log(checkTempUnit)
  return (
    <div
      className={
        index === 0
          ? `${styles.stripCenter} ${styles.active}`
          : styles.stripCenter
      }
    >
      <p>{index === 0 ? 'Now' : time}</p>
      <MainText
        level={3}
        text={checkTempUnit ? ferTemp : calTemp}
        extention={'o'}
      />
      <div>
        <WeatherIcon iconId={weather[0].icon} />
      </div>
    </div>
  )
}
