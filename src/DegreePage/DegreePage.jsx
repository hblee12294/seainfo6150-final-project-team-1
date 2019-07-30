import React from 'react'
import PropTypes from 'prop-types'
import styles from './DegreePage.module.css'

import EnrollLink from '../EnrollLink/EnrollLink'

const COLOR = {
  beginner: '#16A085',
  intermediate: '#2E86C1',
  advanced: '#CB4335',
  mastery: '#7D3C98'
}

const DegreePage = ({ degree, schools }) => {
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  )

  const schoolItems = thisDegreesSchools.map(school => (
    <li key={school.name}>{`School of ${school.name}`}</li>
  ))

  const syllabusItems =
    degree.syllabus_pdf_urls &&
    degree.syllabus_pdf_urls.map(url => (
      <li key={url}>
        <a
          className={styles.syllabusLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
      </li>
    ))

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            {degree.title}{' '}
            <span
              className={styles.tag}
              style={{ color: COLOR[degree.level.toLowerCase().trim()] }}
            >
              {degree.level[0].toUpperCase() + degree.level.slice(1).trim()}
            </span>
          </h2>
          <p className={styles.intro}>
            {degree.short_summary || 'We enter to learn, leave to achieve'}
          </p>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Provided By</h3>
            <ul className={styles.sectionContent}>{schoolItems}</ul>
          </section>
          {syllabusItems ? (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Syllabus</h3>
              <ul className={styles.sectionContent}>{syllabusItems}</ul>
            </section>
          ) : null}
          <section className={styles.section}>
            <EnrollLink degreeSlug={degree.slug} />
          </section>
        </div>
        <img src={degree.image} alt={degree.title} className={styles.hero} />
      </div>
    </div>
  )
}

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
}

export default DegreePage
