import { ArrowRight } from 'lucide-react';
import { site } from '../data/site';
import styles from '../styles/Hero.module.css';
import Button from './Button';

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" />
          {site.name} — Software engineer
        </p>
        <h1 id="hero-title" className={styles.title}>
          Building thoughtful software, from complex systems to polished experiences.
        </h1>
        <p className={styles.text}>
          I&rsquo;m a software engineer focused on building useful, reliable applications with clean
          architecture and considered interfaces.
        </p>
        <div className={styles.actions}>
          <Button href="#work">Explore my work</Button>
          <Button href="#contact" variant="link" icon={<ArrowRight size={16} />}>
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
