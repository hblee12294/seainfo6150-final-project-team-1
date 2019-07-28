import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './MainNav.module.css'

const MainNav = ({ location }) => {
  let linkStyle

  switch (location.pathname) {
    case '/':
      linkStyle = `${styles.link} ${styles.reverse}`
      break
    default:
      linkStyle = styles.link
      break
  }

  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navBar}>
        <li className={styles.navItem}>
          <NavLink
            className={linkStyle}
            activeClassName={styles.active}
            to="/"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={linkStyle}
            activeClassName={styles.active}
            to="/schools"
          >
            Schools
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={linkStyle}
            activeClassName={styles.active}
            to="/degrees"
          >
            Degrees
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={linkStyle}
            activeClassName={styles.active}
            to="/calendar"
          >
            Calendar
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={linkStyle}
            activeClassName={styles.active}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={linkStyle}
            activeClassName={styles.active}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(MainNav)
