import React from 'react'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { MainText } from '../index'
import { convertToCal, convertToFer } from '../../lib/utils/helper'

export default function CurrentWeather() {
  const { currentWeather } = useSelector((store) => store.currentWeather)
  const { checkTempUnit } = useSelector((store) => store.tempSlice)
  const { main, sys, name, wind, weather } = currentWeather
  const { temp, feels_like, temp_min, temp_max } = main
  const { country, sunrise, sunset } = sys
  const { description, icon } = weather
  const cal = convertToCal(temp)
  const fer = convertToFer(temp)
  return (
    <>
      <div>
        <MainText text={`${name},${country}`} level={5} />
      </div>
      <div>
        <MainText text={checkTempUnit ? fer : cal} level={1} extention={'o'} />
      </div>
    </>
  )
}
