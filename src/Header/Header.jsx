import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from './Header.module.css'

import MainNav from '../MainNav/MainNav'

const Header = ({ location }) => {
  let nameStyle

  switch (location.pathname) {
    case '/':
      nameStyle = `${styles.name} ${styles.reverse}`
      break
    default:
      nameStyle = styles.name
      break
  }

  return (
    <header className={styles.header}>
      <h1 className={nameStyle}>Seattle Technological University</h1>
      <MainNav />
    </header>
  )
}

export default withRouter(Header)
