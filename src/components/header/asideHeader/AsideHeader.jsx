import React from 'react'
import styles from './index.module.css'
import { handleAddCity } from '../../../features/getWeatherSlice'
import { useSelector } from 'react-redux'
import { Searchbar, SwitchButton } from '../../index'
import { PlusButton } from '../../../constants/index'

export default function AsideHeader() {
  const { currentWeather } = useSelector((store) => store.currentWeather)
  return (
    <div className={styles.asideHeaderContainer}>
      <div className={styles.plusButtonContainer}>
        <PlusButton onClickAction={handleAddCity(currentWeather)} />
        <SwitchButton />
      </div>
    </div>
  )
}
