import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Degrees.module.css'

import Button from '../Button/Button'

const Degrees = ({ degrees }) => {
  return (
    <ul className={styles.degreeList}>
      {degrees.map((degree, index) => {
        return (
          <li key={`${degree.slug}`} className={styles.degreeItem}>
            <img
              src={degree.image}
              alt={degree.title}
              className={styles.degreeImage}
            />
            <div className={styles.degreeInfo}>
              <h4 className={styles.degreeTitle}>{degree.title}</h4>
              <Link to={`/degree/${degree.slug}`}>
                {/* <Button style={{ color: '#fff', borderColor: '#fff' }}> */}
                <Button>Detail</Button>
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

Degrees.propTypes = {
  degrees: PropTypes.array.isRequired
}

export default Degrees
