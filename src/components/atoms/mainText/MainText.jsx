import React from 'react'
import styles from './index.module.css'

export default function MainText({ text, extention, level }) {
  const Tag = `h${level}`
  return (
    <div className={styles.textContainer}>
      <Tag className={styles.textContainer}>
        {text} <span>{extention}</span>
      </Tag>
    </div>
  )
}
