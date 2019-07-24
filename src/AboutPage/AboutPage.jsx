import React from 'react'
import styles from './AboutPage.module.css'

const AboutPage = () => {
  return (
    <div>
      <section className={`${styles.firstSection}`}>
        <img className={styles.hero} src="images/campus1.jpg" alt="Campus" />
        <p className={styles.intro}>
          Seattle Technological University is known for the excellence of our
          education, the beauty of our setting, our gifted faculty, and the
          uniqueness of our campus culture.
        </p>
      </section>
      <section className={`${styles.section} ${styles.secondSection}`}>
        <h3 className={styles.sectionTitle}>
          A Transformative Educational Experience
        </h3>
        <div className={styles.sectionContent}>
          <p>
            Every year, some 2,400 of the world’s top undergraduate students are
            challenged to exceed their own highest personal and intellectual
            expectations. The mastery our graduates demonstrate across the
            professional and vocational spectrum, and the influence they
            wield—whether in their own communities or on the world stage—is
            testament to a singularly empowering undergraduate experience.
          </p>
          <p>
            Our lively academic community places a high value on rigorous,
            probing inquiry, and creative, cross-discipline thinking. Its
            collaborative approach to scholarship encourages students to
            question, debate, and refine their points of view, not only with
            each other, but with our world-class faculty—often by working
            directly with them on groundbreaking projects.
          </p>
          <p>
            Seattle Technological University's education fosters the highest
            standard of readiness for the “real world” in its graduates, in
            terms of ability to think, act, and contribute meaningfully and
            effectively in their chosen areas of interest.
          </p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.thirdSection}`}>
        <h3 className={styles.sectionTitle}>The “Full-Engagement” Advantage</h3>
        <div className={styles.sectionContent}>
          <p>
            Our full-engagement academic philosophy extends to the running of
            the College itself. The student voice is central to decision-making
            here; students serve on major committees of the Board of Trustees,
            participate in faculty search, and contribute to strategic planning.
          </p>
          <p>
            Students participate in a wide range of extracurricular projects:
            The College and its surrounding community and the greater Seattle
            area offer hundreds of internships, advocacy projects, and the rare
            advantages of being a vital member of the single largest academic
            “hotspot” in the country.
          </p>
          <p>
            Expected to be fully engaged while here, students carry this sense
            of purposeful involvement and personal commitment throughout life.
          </p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.fourthSection}`}>
        <h3 className={styles.sectionTitle}>
          A Widely Envied Campus Environment
        </h3>
        <div className={styles.sectionContent}>
          <p>
            The sheer sense of scale of the breathtaking natural environment, in
            which buildings are thoughtfully sited, distinguish our physical
            setting in the classically Northwest town of Seattle, Washington.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
