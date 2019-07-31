import React, { Component } from 'react'
import styles from './ContactPage.module.css'

class ContactPage extends Component {
  state = {
    submitted: false
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      submitted: true
    })
  }

  render() {
    return (
      <div className={styles.contact}>
        <img
          className={styles.hero}
          src="images/students10.jpg"
          alt="Students"
        />
        <address className={styles.content}>
          <div className={styles.address}>
            <h3 className={styles.contentHeader}>Campus Infomation</h3>
            <p>
              401 Terry Ave N., Suite 103 (cross street Republican) Seattle, WA
              98109
            </p>
            <p>
              225 Terry Ave N., Suite 300 (cross street Thomas) Seattle, WA
              98109
            </p>
            <p>Tel: (855) 476-3391</p>
          </div>
          <div className={styles.newsletter}>
            <h3 className={styles.contentHeader}>Newsletter</h3>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <div className={styles.info}>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Subscribe" />
            </form>
            {this.state.submitted ? (
              <p className={styles.tip}>Thank you for subscribing us!</p>
            ) : null}
          </div>
        </address>
      </div>
    )
  }
}

export default ContactPage
