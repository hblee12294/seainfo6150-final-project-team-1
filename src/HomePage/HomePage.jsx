import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div>
      <div className={styles.hero} />
      <p className={styles.startIntro}>
        Established in 1936, Seattle Technological University is the
        <strong> oldest </strong>
        institution of higher education in Seattle.
      </p>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.stat}>
            <h3 className={styles.statTitle}>Schools</h3>
            <p className={styles.statNumber}>6</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statTitle}>Programs</h3>
            <p className={styles.statNumber}>24</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statTitle}>Candidates</h3>
            <p className={styles.statNumber}>20,000+</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statTitle}>Alumni</h3>
            <p className={styles.statNumber}>360,000+</p>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.secondIntro}>
            Seattle Technological University is devoted to excellence in
            teaching, learning, and research, and to developing leaders in many
            disciplines who make a difference globally. We have an enrollment of
            over
            <strong> 20,000 </strong>
            degree candidates, including undergraduate, graduate, and
            professional students. We have more than <strong>
              360,000
            </strong>{' '}
            alumni around the world.
          </p>
          <p className={styles.thridIntro}>
            Our faculty are engaged with teaching and research to push the
            boundaries of human knowledge. For students who are excited to
            investigate the biggest issues of the 21st century, we offer an
            unparalleled student experience and a generous financial aid
            program, with over $160 million awarded to more than 60% of our
            undergraduate students. We have six degree-granting Schools,
            offering a truly global education.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
