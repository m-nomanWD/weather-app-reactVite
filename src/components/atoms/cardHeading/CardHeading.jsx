import React from 'react'
import styles from './index.module.css'

export default function CardHeading({ icon, text }) {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.containerCenter}>
        <div className={styles.icon}>{icon} </div>
        <p>{text}</p>
      </div>
    </div>
  )
}
