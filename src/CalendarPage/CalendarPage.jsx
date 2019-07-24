import React from 'react'
import PropTypes from 'prop-types'
import Calendar from "../Calendar/Calendar";

const CalendarPage = ({ dates }) => {
  return (
    <div>
      <Calendar dates={dates} />
    </div>
  )
}

CalendarPage.propTypes = {
  dates: PropTypes.array.isRequired
}

export default CalendarPage
