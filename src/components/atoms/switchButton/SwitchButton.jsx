import React from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux'
import { handleConvertTemp } from '../../../features/convertTemp'
export default function SwitchButton() {
  const dispatch = useDispatch()
  const [isToggle, setIsToggle] = React.useState(false)
  return (
    <div className={styles.switchToggleContainer}>
      <span>
        <b>o</b>C
      </span>
      <div className={styles.toggleContainer}>
        <span
          className={isToggle ? styles.toggleSwitch : styles.toggle}
          onClick={() => {
            setIsToggle(!isToggle)
            dispatch(handleConvertTemp())
          }}
        ></span>
      </div>
      <span>
        <b>o</b>F
      </span>
    </div>
  )
}
