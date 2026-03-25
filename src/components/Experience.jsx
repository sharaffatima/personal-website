import { experiences } from '../data/experiences';
import styles from '../styles/Experience.module.css';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.sectionEyebrow}>✦ professional journey</div>
      <h2 className={styles.secTitle}>Experience</h2>
      <div className={styles.experienceTimeline}>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
