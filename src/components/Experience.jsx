import { experiences } from '../data/experiences';
import ExperienceCard from './ExperienceCard';
import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.sectionEyebrow}>✦ professional journey</div>
      <h2 className={styles.secTitle}>
        Experience
        <span className={styles.underlineSquig}></span>
      </h2>
      <div className={styles.experienceTimeline}>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
