import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <div className={styles.wiggly}></div>
      <section id="projects" className={styles.section}>
        <div className={styles.sectionEyebrow}>✦ what i've shipped</div>
        <h2 className={styles.secTitle}>
          Projects
          <span className={styles.underlineSquig}></span>
        </h2>
        <div className={styles.projGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <div className={styles.wiggly}></div>
    </>
  );
}
