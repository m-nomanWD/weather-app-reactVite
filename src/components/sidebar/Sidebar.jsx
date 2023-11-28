import React from 'react'
import styles from './index.module.css'
import { Rainy, FeelsLike, ArrowUp, ArrowDown, Wind } from '../../constants'
import { useSelector } from 'react-redux'
import { CurrentWeather, AsideHeader, AsideCard } from '../index'
import { convertToCal, convertToFer } from '../../lib/utils/helper'

export default function Sidebar() {
  const { currentWeather } = useSelector((store) => store.currentWeather)
  const { checkTempUnit } = useSelector((store) => store.tempSlice)
  const { main, wind, weather } = currentWeather
  const { feels_like, temp_min, temp_max } = main
  const { speed, gust, deg } = wind
  const cal = convertToCal(feels_like)
  const fer = convertToFer(feels_like)
  const minTempCal = convertToCal(temp_min)
  const minTempFer = convertToFer(temp_min)
  const maxTempCal = convertToCal(temp_max)
  const maxTempFer = convertToFer(temp_max)

  return (
    <aside className={styles.sidebarConainer}>
      <AsideHeader />
      <CurrentWeather />
      <div className={styles.cardContiner}>
        <AsideCard
          headingText={'Feels Like'}
          text={checkTempUnit ? fer : cal}
          icon={<FeelsLike />}
          extention={'o'}
        />
        <AsideCard
          headingText={'Wind'}
          text={speed}
          icon={<Wind />}
          extention={'mi'}
        />
        <AsideCard
          headingText={'min temp'}
          text={checkTempUnit ? minTempFer : minTempCal}
          icon={<ArrowDown />}
          extention={'0'}
        />
        <AsideCard
          headingText={'max temp'}
          text={checkTempUnit ? maxTempFer : maxTempCal}
          icon={<ArrowUp />}
          extention={'o'}
        />
      </div>
    </aside>
  )
}
