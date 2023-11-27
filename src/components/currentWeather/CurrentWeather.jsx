import React from 'react'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { MainText } from '../index'
import { convertToCal, convertToFer, convertTime } from '../../lib/utils/helper'

export default function CurrentWeather() {
  const { currentWeather } = useSelector((store) => store.currentWeather)
  console.log(currentWeather)
  const { checkTempUnit } = useSelector((store) => store.tempSlice)
  const { main, sys, name, wind, weather, timezone } = currentWeather
  const { temp, feels_like, temp_min, temp_max } = main
  const { country, sunrise, sunset } = sys
  const { description, icon } = weather[0]
  const cal = convertToCal(temp)
  const fer = convertToFer(temp)
  const sunRise = convertTime(sunrise, timezone, 'time')
  const sunSet = convertTime(sunset, timezone, 'time')
  const todayDate = convertTime(sunset, timezone, 'date')
  const minTempCal = convertToCal(temp_min)
  const minTempFer = convertToFer(temp_min)
  const maxTempCal = convertToCal(temp_max)
  const maxTempFer = convertToFer(temp_min)

  return (
    <>
      <div className={styles.timeContainer}>
        <MainText text={`${name},${country}`} level={5} />
        <MainText level={5} text={todayDate} />
      </div>
      <div className={styles.timeContainer}>
        <MainText text={sunRise} />
        <MainText text={sunSet} />
      </div>
      <div className={styles.currentWeatherTemp}>
        <MainText text={checkTempUnit ? fer : cal} level={1} extention={'o'} />
      </div>
      <p>{description}</p>
    </>
  )
}
