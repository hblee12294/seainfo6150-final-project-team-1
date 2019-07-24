import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MainNav.module.css'

const MainNav = () => {
  return (
    <nav>
      <ul className={styles.navBar}>
        <li className={styles.navItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/schools">Schools</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/degrees">Degrees</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Directions and Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
