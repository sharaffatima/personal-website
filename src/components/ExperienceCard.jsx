import styles from '../styles/ExperienceCard.module.css';

export default function ExperienceCard({ experience }) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.timeline}>
        <div className={styles.dot}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.company}>{experience.company}</p>
          </div>
          <span className={styles.badge}>{experience.type}</span>
        </div>

        <p className={styles.period}>{experience.period}</p>
        <p className={styles.description}>{experience.description}</p>

        {experience.achievements && (
          <ul className={styles.achievements}>
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        )}

        <div className={styles.technologies}>
          {experience.technologies.map((tech, idx) => (
            <span key={idx} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
