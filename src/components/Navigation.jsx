import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        FATIMA.DEV
      </a>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={toggleMenu}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
        <li>
          <a href="#projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>Experience</a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
