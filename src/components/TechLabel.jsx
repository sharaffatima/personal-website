import styles from '../styles/TechLabel.module.css';

export default function TechLabel({ children }) {
  return <li className={styles.label}>{children}</li>;
}
