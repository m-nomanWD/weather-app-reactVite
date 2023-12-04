import React from 'react'
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
  // const [value, setValue] = React.useState('')
  // const googleKey = 'AIzaSyBeePvyyOPfn73O-_QC5ok9MkcaExj8kiM'
  // const getName = async () => {
  //   const data = await axios(
  //     `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=(cities)&key=${googleKey}`
  //   )
  //   console.log(data)
  // }
  const localStorageData = JSON.parse(localStorage.getItem('cites'))
  console.log(localStorageData)
  const dispatch = useDispatch()
  const { citiesList, currentWeather } = useSelector(
    (store) => store.currentWeather
  )

  if (citiesList.length === 0) {
    return <h1>list empty</h1>
  }
  if (localStorageData !== null) {
    return (
      <>
        <div className={styles.citiesContainer}>
          <CardHeading icon={<PaperAirplain />} text={'Your cities list'} />
          <span className={styles.plus}>
            <PlusButton onClickAction={handleAddCity(currentWeather)} />
          </span>
          {/* <input
          type='text'
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value)
            getName()
          }}
        /> */}
          <div className={styles.singleCityContainer}>
            {localStorageData.map((city) => {
              return <SingleCity city={city} />
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
          {/* <input
          type='text'
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value)
            getName()
          }}
        /> */}
          <div className={styles.singleCityContainer}>
            {citiesList.map((city) => {
              return <SingleCity city={city} />
            })}
          </div>
        </div>
      </>
    )
  }
}
