import { Heart, Sparkles } from 'lucide-react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      made with <Heart size={16} style={{ display: 'inline-block', marginLeft: '0.3rem', marginRight: '0.3rem', verticalAlign: 'middle', fill: 'currentColor' }} /> by fatima sharaf · 2026 ·
      <span className={styles.star}><Sparkles size={16} style={{ display: 'inline-block', verticalAlign: 'middle' }} /></span>
    </footer>
  );
}
