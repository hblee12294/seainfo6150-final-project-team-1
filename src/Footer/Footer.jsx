import React from 'react'
import styles from './Footer.module.css'
import { NavLink, withRouter } from 'react-router-dom'

const Footer = () => {
  let linkStyle = 'footerNav'
  return (
      <footer className={styles.footer}>
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
      <p>© 2019 Seattle Technological University</p>
    </footer>
  )
}

export default Footer
