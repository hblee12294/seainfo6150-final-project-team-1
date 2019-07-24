import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div>
      <p className={styles.startIntro}>
        Established in 1936, Seattle Technological University is the
        <strong> oldest </strong>
        institution of higher education in Seattle.
      </p>
      <img className={styles.hero} src="images/students1.jpg" alt="Students" />
      <p className={styles.secondIntro}>
        <span className={styles.secondFloat}>
          Seattle Technological University is devoted to excellence in teaching,
          learning, and research, and to developing leaders in many disciplines
          who make a difference globally. We have an enrollment of over
          <strong> 20,000 </strong>
          degree candidates, including undergraduate, graduate, and professional
          students. We have more than <strong>360,000</strong> alumni around the
          world.
        </span>
      </p>
      <p className={styles.thridIntro}>
        Our faculty are engaged with teaching and research to push the
        boundaries of human knowledge. For students who are excited to
        investigate the biggest issues of the 21st century, we offer an
        unparalleled student experience and a generous financial aid program,
        with over $160 million awarded to more than 60% of our undergraduate
        students. We have six degree-granting Schools, offering a truly global
        education.
      </p>
    </div>
  )
}

export default HomePage
