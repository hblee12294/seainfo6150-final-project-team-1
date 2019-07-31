import React from 'react'
import PropTypes from 'prop-types'
import Calendar from '../Calendar/Calendar'
import styles from './CalendarPage.module.css'

const CalendarPage = ({ dates }) => {
  return (
    <div className={styles.calendar}>
      <Calendar dates={dates} />
    </div>
  )
}

CalendarPage.propTypes = {
  dates: PropTypes.array.isRequired
}

export default CalendarPage
