import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './DegreePage.module.css'

import Button from '../Button/Button'

const DegreePage = ({ degree, schools }) => {
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  )

  const schoolItems = thisDegreesSchools.map(school => (
    <li key={school.name}>{`School of ${school.name}`}</li>
  ))

  const syllabusItems =
    degree.syllabus_pdf_urls &&
    degree.syllabus_pdf_urls.map(url => <li key={url}>{url}</li>)

  return (
    <div className={styles.wrapper}>
      <img src={degree.image} alt={degree.title} className={styles.hero} />
      <section>
        <p>{degree.short_summary}</p>
      </section>
      <section>
        <h3>Level</h3>
        <p>{degree.level}</p>
      </section>
      <section>
        <h3>Schools</h3>
        <ul>{schoolItems}</ul>
      </section>
      <section>
        <h3>Syllabus</h3>
        <ul>{syllabusItems}</ul>
      </section>
      <section>
        <Link to={`/enroll/${degree.slug}`}>
          <Button style={{ color: '#3498db' }}>Enroll</Button>
        </Link>
      </section>
    </div>
  )
}

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
}

export default DegreePage
