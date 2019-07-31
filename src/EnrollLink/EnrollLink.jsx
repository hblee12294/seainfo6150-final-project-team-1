import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

const EnrollLink = ({ degreeSlug }) => {
  return (
    <Link to={`/enroll/${degreeSlug}`}>
      <Button>Enroll</Button>
    </Link>
  )
}

EnrollLink.propTypes = {
  degreeSlug: PropTypes.string.isRequired
}

export default EnrollLink
