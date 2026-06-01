import styles from './experience-timeline.module.css';

export default function ExperienceTimeline() {

  // array of objects
  const experiences = [
    {
      title: "Bachelor of Science in Information Technology",
      description: "Polytechnic University of the Philippines — Quezon City Campus. Relevant coursework: Data Analytics, Mobile & Web Development, System Integration & Architecture, Multimedia, Project Management, Information Assurance & Security, Capstone.",
      year: "2022 - 2026",
      current: true
    },
    {
      title: "Quality Analyst / Frontend Developer",
      description: "PRIME Philippines — Built a React + Vite ticketing module, redesigned landing pages in Wix Studio, performed manual QA, and integrated custom forms with Salesforce.",
      year: "Feb 2026 - May 2026"
    },
    {
      title: "Part-time Tutor",
      description: "Department of Social Welfare and Development (Tara, Basa! Tutoring Program) — Delivered structured lessons and supported diverse learners while balancing academic commitments.",
      year: "Jun 2024 - Jul 2024"
    },
    {
      title: "Science, Engineering, Technology & Mathematics",
      description: "South East-Asia Institute of Trade and Technology.",
      year: "2020 - 2022"
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