import { Activity, BarChart3, ExternalLink } from 'lucide-react';
import styles from '../styles/ProjectCard.module.css';

const projectIcons = {
  Activity,
  BarChart3
};

export default function ProjectCard({ project }) {
  const IconComponent = projectIcons[project.icon];
  
  return (
    <div className={`${styles.projCard} ${styles[project.cardClass]}`}>
      <div className={styles.projNum}>{project.number}</div>
      {IconComponent && (
        <div className={styles.projIconWrapper}>
          <IconComponent size={48} className={styles.projIcon} strokeWidth={1.5} />
        </div>
      )}
      <div className={styles.projName}>{project.name}</div>
      <p className={styles.projDesc}>{project.description}</p>
      <div className={styles.projTags}>
        {project.tags.map((tag, idx) => (
          <span key={idx} className={styles.projTag}>
            {tag}
          </span>
        ))}
      </div>
      <a className={styles.projLink} href={project.link} target="_blank" rel="noopener noreferrer">
        <ExternalLink size={16} />
        github.com
      </a>
    </div>
  );
}
