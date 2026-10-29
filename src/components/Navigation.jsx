import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { site } from '../data/site';
import styles from '../styles/Navigation.module.css';
import { GithubIcon } from './BrandIcons';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.wordmark} onClick={() => setOpen(false)}>
          {site.name}
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav id="site-nav" aria-label="Primary" className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul role="list" className={styles.list}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.github}
                className={`${styles.link} ${styles.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={20} />
                <span className="visually-hidden">GitHub profile (opens in a new tab)</span>
                <span className={styles.githubLabel} aria-hidden="true">GitHub</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
