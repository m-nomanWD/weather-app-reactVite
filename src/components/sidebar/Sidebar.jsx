import React from 'react'
import styles from './index.module.css'
import { Rainy } from '../../constants'
import { useSelector } from 'react-redux'
import { CurrentWeather, AsideHeader, AsideCard } from '../index'
import { convertToCal, convertToFer } from '../../lib/utils/helper'

export default function Sidebar() {
  const { currentWeather } = useSelector((store) => store.currentWeather)

  const { main, wind, weather } = currentWeather
  const { feels_like } = main
  const { speed, gust, deg } = wind
  const cal = convertToCal(feels_like)
  const fer = convertToFer(feels_like)
  return (
    <aside className={styles.sidebarConainer}>
      <AsideHeader />
      <CurrentWeather />
      <div className={styles.cardContiner}>
        <AsideCard headingText={'Feels Like'} text={cal} icon={<Rainy />} />
      </div>
    </aside>
  )
}
