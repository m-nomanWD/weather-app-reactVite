import React from 'react'
import styles from './index.module.css'
import { useSelector } from 'react-redux'
import { SingleWeatherStrip, CardHeading } from '../index'
import { Clock } from '../../constants'
export default function WeekWeatherContainer() {
  const { weekWeather } = useSelector((store) => store.currentWeather)
  console.log(weekWeather)
  const { list, city } = weekWeather
  const { timezone } = city
  return (
    <div className={styles.weekWeatherContainer}>
      <CardHeading text={'3-hours forecast'} icon={<Clock />} />
      <div className={styles.stripContainer}>
        {list.map((item, index) => (
          <SingleWeatherStrip
            key={item.dt}
            item={item}
            timezone={timezone}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
