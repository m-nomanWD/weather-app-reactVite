import React from 'react'
import styles from './index.module.css'
import { handleAddCity } from '../../../features/getWeatherSlice'
import { useSelector } from 'react-redux'
import { Searchbar, SwitchButton } from '../../index'
import { PlusButton, ClearSky, Sun } from '../../../constants/index'

export default function AsideHeader() {
  const { currentWeather } = useSelector((store) => store.currentWeather)
  return (
    <div className={styles.asideHeaderContainer}>
      <div className={styles.plusButtonContainer}>
        <span className={styles.logo}>Guider</span>
        <SwitchButton />
      </div>
    </div>
  )
}
