import React from 'react'
import { useSelector } from 'react-redux'
import styles from './index.module.css'
import { CardHeading, MainText } from '../index'
export default function AsideCard({ text, headingText, icon }) {
  return (
    <div className={styles.card}>
      <CardHeading text={headingText} icon={icon} />
      <MainText text={text} level={3} extention={'o'} />
    </div>
  )
}
