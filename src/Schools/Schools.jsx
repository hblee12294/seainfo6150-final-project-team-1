import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Schools.module.css'

import Degrees from '../Degrees/Degrees'

const Schools = ({ degrees, schools }) => {
  return (
    <div className={styles.schools}>
      {schools.map((school, index) => {
        // thisSchoolsDegrees is an array of all the
        // degrees offered by the school currently being
        // iterated over
        const thisSchoolsDegrees = degrees.filter(degree =>
          degree.schools.includes(school.slug)
        )

        const degreeList = thisSchoolsDegrees.map(degree => (
          <li key={degree.slug}>
            <Link to={`/degree/${degree.slug}`} className={styles.degreeItem}>
              {degree.title}
            </Link>
          </li>
        ))

        return (
          <div key={`${school.slug}`} className={styles.school}>
            <h3 className={styles.schoolName}>{school.name}</h3>
            <p>{school.short_summary}</p>
            <ul className={styles.degreeList}>{degreeList}</ul>
          </div>
        )
      })}
    </div>
  )
}

Schools.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
}

export default Schools
