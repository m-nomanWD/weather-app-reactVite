import React from 'react'
import styles from './index.module.css'

export default function MainText({ text, extention, level }) {
  const Tag = `h${level}`
  return <Tag>{text}</Tag>
}
