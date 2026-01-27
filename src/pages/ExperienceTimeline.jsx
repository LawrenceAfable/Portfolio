import styles from './experience-timeline.module.css';

export default function ExperienceTimeline() {

  // array of objects
  const experiences = [
    {
      title: "BSIT Undergraduate",
      description: "Currently pursuing a Bachelor of Science in Information Technology and expected to graduate in 2026.",
      year: "2026",
      current: true
    },
    {
      title: "Hello World!",
      description: "Wrote my first lines of code",
      year: "2021"
    }
  ]

  return (
    <div className={styles.timelineContainer}>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.timelineItem}>

          <div className={`${styles.timelineDot} ${exp.current ? styles.active : ''}`}></div>
          <div className={styles.timelineContent}>
            <div className={styles.timelineRow}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <span className={styles.yearBadge}>{exp.year}</span>
            </div>
            <p className={styles.companyName}>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}