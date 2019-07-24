import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, style }) => (
  <button style={style} className={styles.button}>
    {children}
  </button>
)

export default Button
