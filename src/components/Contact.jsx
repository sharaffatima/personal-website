import { ArrowUpRight, Mail } from 'lucide-react';
import { site } from '../data/site';
import styles from '../styles/Contact.module.css';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className={styles.title}>
          Have a project in mind?
        </h2>
        <p className={styles.text}>
          I&rsquo;m always interested in discussing thoughtful software projects and new ideas.
        </p>

        <a className={styles.email} href={`mailto:${site.email}`}>
          <Mail size={20} aria-hidden="true" />
          <span>Get in touch</span>
          <ArrowUpRight className={styles.arrow} size={20} aria-hidden="true" />
        </a>

        <ul role="list" className={styles.links}>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <GithubIcon size={18} />
              GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <LinkedinIcon size={18} />
              LinkedIn
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
