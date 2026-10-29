import styles from '../styles/Button.module.css';

/**
 * variant "primary": filled forest-green button
 * variant "link":    minimal text link, usually with a trailing icon
 */
export default function Button({ href, variant = 'primary', icon, external = false, children, ...rest }) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href} {...externalProps} {...rest}>
      <span>{children}</span>
      {icon ? <span className={styles.icon} aria-hidden="true">{icon}</span> : null}
    </a>
  );
}
