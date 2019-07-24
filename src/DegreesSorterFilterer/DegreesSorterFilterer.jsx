import React from 'react'
import PropTypes from 'prop-types'
import styles from './DegreesSorterFilterer.module.css'

const DegreesSorterFilterer = ({ onSort, onFilter, schools }) => {
  return (
    <div className={styles.filterer}>
      <section className={styles.filters}>
        <div className={styles.selectWrapper}>
          <select name="level" id="level" onChange={onFilter}>
            <option value="" disabled selected>
              Filter by level
            </option>
            <option value="none">None</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="mastery">Mastery</option>
          </select>
        </div>
        <div className={styles.selectWrapper}>
          <select name="school" id="school" onChange={onFilter}>
            <option value="" disabled selected>
              Filter by school
            </option>
            <option value="none">None</option>
            {schools.map((school, index) => (
              <option key={school.slug} value={school.slug}>
                School of {school.name}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className={styles.sorter}>
        <select onChange={onSort}>
          <option value="" disabled selected>
            Order
          </option>
          <option value="none">None</option>
          <option value="AZ">A - Z</option>
          <option value="ZA">Z - A</option>
        </select>
      </section>
    </div>
  )
}

DegreesSorterFilterer.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  schools: PropTypes.array.isRequired
}

export default DegreesSorterFilterer
