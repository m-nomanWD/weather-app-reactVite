import React from 'react'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { SingleWeatherStrip, CardHeading } from '../index'
import { Clock } from '../../constants'
export default function WeekWeatherContainer() {
  const { weekWeather } = useSelector((store) => store.currentWeather)
  console.log(weekWeather)
  const { list } = weekWeather
  return (
    <div>
      <CardHeading text={'5-days forecast'} icon={<Clock />} />
      <div className={styles.stripContainer}>
        {list.map((item) => (
          <SingleWeatherStrip key={item.dt} item={item} />
        ))}
      </div>
    </div>
  )
}
