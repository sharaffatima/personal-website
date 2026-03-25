import { skills } from '../data/skills';
import styles from '../styles/Skills.module.css';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.sectionEyebrow}>✦ what i work with</div>
      <h2 className={styles.secTitle}>Skills</h2>
      <div className={styles.skillsWrap}>
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
