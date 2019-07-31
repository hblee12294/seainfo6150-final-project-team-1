import React from 'react'
import PropTypes from 'prop-types'
import styles from './EnrollConfirmation.module.css'

const EnrollConfirmation = ({ form }) => {
  const displayElements = Object.entries(form).map(value => (
    <li key={`enroll-${value[0]}`} className={styles.item}>
      <div className={styles.left}>{value[0]}</div>
      <div className={styles.right}>{value[0] === 'Degree of Interest' ? value[1].join(' / ') : value[1]}</div>
    </li>
  ))

  return <ul className={styles.list}>{displayElements}</ul>
}

EnrollConfirmation.propTypes = {
  form: PropTypes.object.isRequired
}

export default EnrollConfirmation
