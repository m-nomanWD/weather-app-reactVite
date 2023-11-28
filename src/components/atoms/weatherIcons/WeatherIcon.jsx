import React from 'react'
import styles from './index.module.css'
import {
  Cloud,
  Thunder,
  Snow,
  Rainy,
  FewCloudDay,
  FewCloudNight,
  Moon,
  Sun,
} from '../../../constants'

export default function WeatherIcon({ iconId }) {
  if (iconId === '01d') {
    return <Sun />
  }
  if (iconId === '01n') {
    return <Moon />
  }
  if (iconId === '02d') {
    return <FewCloudDay />
  }
  if (iconId === '02n') {
    return <FewCloudNight />
  }
  if (iconId === '03d' || iconId === '03n') {
    return <Cloud />
  }
  if (iconId === '04d' || iconId === '04n') {
    return (
      <div className={styles.multiCloud}>
        <Cloud />
        <Cloud />
      </div>
    )
  }
  if (
    iconId === '09d' ||
    iconId === '09n' ||
    iconId === '10d' ||
    iconId === '10n'
  ) {
    return <Rainy />
  }
  if (iconId === '11d' || iconId === '11n') {
    return <Thunder />
  }
  if (iconId === '13d' || iconId === '13n') {
    return <Snow />
  }
}
