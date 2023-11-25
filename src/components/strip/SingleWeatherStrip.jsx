import React from 'react'
import styles from './index.module.css'
import { MainText } from '../index'
import { useSelector } from 'react-redux'
import { convertToCal, convertToFer } from '../../lib/utils/helper'
export default function SingleWeatherStrip({ item }) {
  const { main, weather } = item
  const ferTemp = convertToFer(main.temp)
  const calTemp = convertToCal(main.temp)
  const { checkTempUnit } = useSelector((store) => store.tempSlice)
  console.log(checkTempUnit)
  return (
    <div className={styles.stripCenter}>
      <MainText
        level={5}
        text={checkTempUnit ? ferTemp : calTemp}
        extention={'o'}
      />
      <span>{weather[0].icon}</span>
    </div>
  )
}
