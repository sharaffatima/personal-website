import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <h2 id="about-title" className={styles.title}>
          A little about me
        </h2>
        <div className={styles.text}>
          <p>
            I&rsquo;m a Computer Science graduate with a focus on backend development, full-stack applications, and applied AI. I enjoy building software end to end — from designing APIs and data models to developing the interfaces that make systems useful in practice.
          </p>
          <p>
            I've gained hands-on experience in IT/OT operations for critical infrastructure and contribute to software projects as a backend developer at SharafAI.
          </p>
          <p>
            My projects range from full-stack business applications and offline-first systems to explainable machine learning for ECG anomaly detection.
            I value clean architecture, maintainable code, and practical solutions to real problems. I'm always looking to deepen my technical skills and build software that is both useful and dependable.
          </p>
        </div>
      </div>
    </section>
  );
}
