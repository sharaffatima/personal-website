import { skills } from '../data/skills';
import SkillCard from './SkillCard';
import styles from '../styles/Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.sectionEyebrow}>✦ what i work with</div>
      <h2 className={styles.secTitle}>
        Skills
        <span className={styles.underlineSquig}></span>
      </h2>
      <div className={styles.skillsWrap}>
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
