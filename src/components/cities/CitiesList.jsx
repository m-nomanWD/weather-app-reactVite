import React, { useState } from 'react'
import styles from './index.module.css'
import {
  handleCurrentWeather,
  handleAddCity,
} from '../../features/getWeatherSlice'
import { CardHeading, SingleCity } from '../index'
import { PaperAirplain, PlusButton } from '../../constants'
import { Searchbar } from '../index'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
export default function CitiesList() {
  const localStorageData = JSON.parse(localStorage.getItem('cites'))
  console.log(localStorageData)
  const dispatch = useDispatch()
  const { citiesList, currentWeather, weekWeather } = useSelector(
    (store) => store.currentWeather
  )
  const [isActive, setIsActive] = useState(currentWeather.name)
  function toggle(name) {
    setIsActive(name)
  }

  if (localStorageData !== null) {
    return (
      <>
        <div className={styles.citiesContainer}>
          <CardHeading icon={<PaperAirplain />} text={'Your cities list'} />
          <span className={styles.plus}>
            <PlusButton
              onClickAction={handleAddCity({ currentWeather, weekWeather })}
            />
          </span>

          <div className={styles.singleCityContainer}>
            {localStorageData.map((city, index) => {
              return (
                <SingleCity
                  city={city}
                  index={index}
                  key={index}
                  isActive={isActive}
                  onClickAction={toggle}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className={styles.citiesContainer}>
          <CardHeading icon={<PaperAirplain />} text={'Your cities list'} />
          <span className={styles.plus}>
            <PlusButton onClickAction={handleAddCity(currentWeather)} />
          </span>

          <div className={styles.singleCityContainer}>
            {citiesList.map((city, index) => {
              return (
                <SingleCity
                  city={city}
                  index={index}
                  isActive={isActive}
                  onClickAction={toggle}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  }
}
