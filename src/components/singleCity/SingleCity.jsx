import React from 'react'
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { MainText, WeatherIcon } from '../index'
import { convertToCal, convertToFer, convertTime } from '../../lib/utils/helper'
import { useEffect, useState } from 'react'
import { handleCurrentWeather } from '../../features/getWeatherSlice'

export default function SingleCity({ city, index, isActive, onClickAction }) {
  const dispatch = useDispatch()
  const { checkTempUnit } = useSelector((store) => store.tempSlice)
  const { main, sys, name, weather, timezone, dt } = city
  const { temp } = main
  const { country } = sys
  const { description, icon } = weather[0]
  const cal = convertToCal(temp)
  const fer = convertToFer(temp)
  const time = convertTime(dt, timezone, 'a')
  const [currentTime, setCurrentTime] = useState(new Date(time))
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
  const formattedTime = currentTime
    .toISOString()
    .split('T')[1]
    .replace(/\..+/, '')
  return (
    <div
      className={
        isActive === name ? styles.activeCity : styles.singleCityContainer
      }
      onClick={() => {
        dispatch(handleCurrentWeather(name))

        onClickAction(name)
      }}
    >
      <div className={styles.cityHeader}>
        <MainText text={`${name}, ${country}`} level={4} />
        <MainText text={formattedTime} level={5} />
      </div>
      <div className={styles.tempContainer}>
        <MainText text={checkTempUnit ? fer : cal} level={1} extention={'o'} />
        <p>{description}</p>
        <WeatherIcon iconId={icon} />
      </div>
    </div>
  )
}
