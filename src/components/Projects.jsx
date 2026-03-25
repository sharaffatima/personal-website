import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <section id="projects" className={styles.section}>
        <div className={styles.sectionEyebrow}>✦ what i've shipped</div>
        <h2 className={styles.secTitle}>Projects</h2>
        <div className={styles.projGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
