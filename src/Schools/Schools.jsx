import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Schools.module.css'

const Schools = ({ degrees, schools }) => {
  return (
    <ul className={styles.schools}>
      {schools.map((school, index) => {
        let imageName

        switch (index) {
          case 0:
            imageName = 'students14.jpg'
            break
          case 1:
            imageName = 'computer4.jpg'
            break
          case 2:
            imageName = 'computer.jpg'
            break
          case 3:
            imageName = 'science1.jpg'
            break
          case 4:
            imageName = 'students9.jpg'
            break
          case 5:
            imageName = 'science2.jpg'
            break
          default:
            break
        }

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
          <li key={`${school.slug}`} className={styles.school}>
            <div className={styles.left}>
              <div
                className={styles.cover}
                style={{ backgroundImage: `url(images/${imageName})` }}
              />
            </div>
            <div className={styles.right}>
              <h2 className={styles.schoolName}>{school.name}</h2>
              <p className={styles.schoolIntro}>{school.short_summary}</p>
              <h3>Programs</h3>
              <ul className={styles.degreeList}>{degreeList}</ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

Schools.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
}

export default Schools
