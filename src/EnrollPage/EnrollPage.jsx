import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import styles from './EnrollPage.module.css'

import EnrollConfirmation from '../EnrollConfirmation/EnrollConfirmation'
import EnrollForm from '../EnrollForm/EnrollForm'

class EnrollPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: null
    }
  }

  onSubmit = (e, values) => {
    e.preventDefault()

    this.setState({
      form: values
    })
  }

  render() {
    return (
      <div className={styles.enrollPage}>
        <h2 className={styles.header}>
          <span>{`${this.props.degree.title} Program Enrollment`}</span>
        </h2>
        {this.state.form ? (
          <EnrollConfirmation form={this.state.form} />
        ) : (
          <EnrollForm onSubmit={this.onSubmit} />
        )}
      </div>
    )
  }
}

EnrollPage.propTypes = {
  degree: PropTypes.object.isRequired
}
export default withRouter(EnrollPage)
