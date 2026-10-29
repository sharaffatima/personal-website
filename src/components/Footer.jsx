import { site } from '../data/site';
import styles from '../styles/Footer.module.css';
import { GithubIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p className={styles.detail}>Built with React &amp; Vite</p>
        <a className={styles.link} href={site.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon size={16} />
          GitHub
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
