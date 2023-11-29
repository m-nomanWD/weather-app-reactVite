import React from 'react'
import styles from './index.module.css'
import { handleCurrentWeather } from '../../features/getWeatherSlice'
import { CardHeading, SingleCity } from '../index'
import { PaperAirplain } from '../../constants'
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
  const dispatch = useDispatch()
  const { citiesList } = useSelector((store) => store.currentWeather)
  if (citiesList.length === 0) {
    return <h1>list empty</h1>
  } else {
    return (
      <>
        <div className={styles.citiesContainer}>
          <CardHeading icon={<PaperAirplain />} text={'Your cities list'} />

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
