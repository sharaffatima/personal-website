import styles from '../styles/SectionHeading.module.css';

export default function SectionHeading({ id, eyebrow, title, children }) {
  return (
    <header className={styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 id={id} className={styles.title}>{title}</h2>
      {children ? <p className={styles.text}>{children}</p> : null}
    </header>
  );
}
