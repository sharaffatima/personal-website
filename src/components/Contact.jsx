import { Rocket } from 'lucide-react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:sharaffatima000@gmail.com'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/sharaffatima'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fatima-sharaf-417480340/'
    }
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contactBlob}>
        <h3><Rocket size={24} style={{ display: 'inline-block', marginRight: '0.5rem', verticalAlign: 'middle' }} />Let's Connect</h3>
        <p>
          I'm interested in roles where I can contribute to meaningful projects and grow as a backend engineer.
          Whether you're building healthcare tech, scalable systems, or solving complex infrastructure problems—
          let's talk. I'm available for full-time positions, freelance projects, and collaborations starting 2026.
        </p>
        <div className={styles.contactLinks}>
          {contactLinks.map((link, idx) => (
            <a key={idx} className={styles.contactBtn} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
