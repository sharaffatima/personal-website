import { Code, Globe, GraduationCap, Lock, Sparkles, Wrench } from 'lucide-react';
import styles from '../styles/About.module.css';

export default function About() {
  const funFacts = [
    { icon: GraduationCap, text: 'Graduating in 2026 (Computer Science)' },
    { icon: Code, text: 'Volunteering at SharafAI to help build meaningful projects' },
    { icon: Lock, text: '1+ year experience in critical infrastructure & security' },
    { icon: Wrench, text: 'Passionate about system design & backend architecture' },
    { icon: Globe, text: 'Open to full-time roles & challenging projects' }
  ];

  return (
    <>
      <div className={styles.aboutStrip}>
        <div>
          <h3>
            A bit about me <Sparkles size={24} style={{ display: 'inline-block', marginLeft: '0.5rem', verticalAlign: 'middle' }} />
          </h3>
          <p>
            I'm a backend engineer graduating in 2026 with practical experience building production systems.
            I've worked on critical infrastructure in IT/OT security and am now volunteering at SharafAI, a Syrian non-profit organization.
            I focus on clean code, system design, and creating solutions that make a real impact.
          </p>
        </div>
        <ul className={styles.funFacts}>
          {funFacts.map((fact, idx) => {
            const IconComponent = fact.icon;
            return (
              <li key={idx}>
                <IconComponent size={18} className={styles.factIcon} />
                {fact.text}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
