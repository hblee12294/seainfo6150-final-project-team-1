import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.error}>
        <img
          className={styles.hero}
          src="images/computer.jpg"
          alt="404Error"
        />
        <p className={styles.question}>
          404
        </p>
        <p className={styles.question2}>
          Page not found?
        </p>
      </div>
      <div className={styles.explain}>
        <p className={styles.explainWords}>
          Sometimes getting lost isn't that bad.<br></br>
          Click the menu above or get 
          back to our &nbsp;
          <Link
            to="/"
            exact
          >
            homepage
          </Link>.
         </p>
      </div>
    </div>
  )
}

export default ErrorPage
