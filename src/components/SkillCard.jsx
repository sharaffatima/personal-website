import * as Icons from 'lucide-react';
import styles from '../styles/SkillCard.module.css';

export default function SkillCard({ skill }) {
  const IconComponent = Icons[skill.icon];
  
  return (
    <div className={`${styles.skillCard} ${styles[skill.cardClass]}`} data-skill-card>
      <div className={styles.skillCardHeader}>
        {IconComponent && <IconComponent size={24} className={styles.skillIcon} />}
        <div className={styles.skillCardTitle}>{skill.title}</div>
      </div>
      {skill.items.map((item, idx) => (
        <div key={idx} className={styles.skillItem}>
          {item}
        </div>
      ))}
    </div>
  );
}
