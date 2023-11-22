import React from 'react'
import styles from './index.module.css'

import { useSelector } from 'react-redux'
import { CurrentWeather, AsideHeader, AsideCard } from '../index'

export default function Sidebar() {
  return (
    <aside>
      <AsideHeader />
      <CurrentWeather />
      <AsideCard />
    </aside>
  )
}