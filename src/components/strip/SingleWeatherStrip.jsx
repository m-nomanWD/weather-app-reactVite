import React from 'react'
import styles from './index.module.css'
export default function SingleWeatherStrip({ item }) {
  console.log(item)
  const { main, weather } = item
  return (
    <div>
      {main.temp} <span>{weather[0].icon}</span>
    </div>
  )
}
