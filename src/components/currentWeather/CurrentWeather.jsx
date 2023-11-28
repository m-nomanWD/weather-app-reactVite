import React from 'react'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { MainText, WeatherIcon } from '../index'
import { convertToCal, convertToFer, convertTime } from '../../lib/utils/helper'
import { PaperAirplain, SunRise, SunSet } from '../../constants'
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

  return (
    <>
      <div className={styles.timeContainer}>
        <div>
          <span>
            <PaperAirplain />
          </span>
          <MainText text={`${name},${country}`} level={5} />
        </div>
        <MainText level={5} text={todayDate} />
      </div>
      <div className={styles.timeContainer}>
        <div>
          <span>
            <SunRise />
          </span>
          <MainText text={sunRise} />
        </div>
        <div>
          <span>
            <SunSet />
          </span>
          <MainText text={sunSet} />
        </div>
      </div>
      <div className={styles.currentWeatherTemp}>
        <MainText text={checkTempUnit ? fer : cal} level={1} extention={'o'} />
      </div>
      <p>{description}</p>
      <div className={styles.weatherIcon}>
        <WeatherIcon iconId={icon} />
      </div>
    </>
  )
}
