import React from 'react'
import styles from './Header.module.css'

import MainNav from '../MainNav/MainNav'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>Seattle Technological University</h1>
      <MainNav />
    </header>
  )
}

export default Header
