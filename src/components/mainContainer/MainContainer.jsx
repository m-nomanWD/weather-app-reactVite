import React from 'react'
import styles from './index.module.css'
import { DetailWeather, Sidebar } from '../index'
export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <DetailWeather />
    </div>
  )
}
