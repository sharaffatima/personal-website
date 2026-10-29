import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" eyebrow="Work" title="Selected work">
          A selection of systems I&rsquo;ve built and problems I&rsquo;ve worked on.
        </SectionHeading>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
