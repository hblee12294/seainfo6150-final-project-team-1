import React from 'react'
import PropTypes from 'prop-types'

import styles from './Calendar.module.css'

const Calendar = ({ dates }) => {
  return (
    <div className={styles.calendarWrapper}>
      {dates.map((date, index) => {
        return (
          <article key={`${date.date}-${index}`} className={styles.article}>
            <address className={styles.time}>
              <time dateTime={date.date}>{date.date}</time>
            </address>
            <p>{date.description}</p>
          </article>
        )
      })}
    </div>
  )
}

Calendar.propTypes = {
  dates: PropTypes.array.isRequired
}

export default Calendar
