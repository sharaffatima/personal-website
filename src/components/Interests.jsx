import { BookOpen, Brain, Layers, Zap } from 'lucide-react';
import styles from '../styles/Interests.module.css';

export default function Interests() {
  const interests = [
    {
      icon: Layers,
      title: 'Building Reliable Systems',
      description:
        'I\'m passionate about architecting scalable, maintainable systems that handle real-world complexity. From database design to API architecture, I love crafting systems that stand the test of time.'
    },
    {
      icon: Brain,
      title: 'Embedding AI & ML',
      description:
        'Exploring how to integrate AI and machine learning into backend systems intelligently. I\'m fascinated by building systems that leverage AI for better decision-making and automation.'
    },
    {
      icon: Zap,
      title: 'Infrastructure & DevOps',
      description:
        'I enjoy working with containerization, deployment pipelines, and infrastructure automation. Creating efficient CI/CD workflows and scalable infrastructure excites me.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description:
        'I\'m always eager to learn new technologies, frameworks, and best practices. Whether it\'s a new programming language or emerging architectural pattern, I embrace growth and adaptation.'
    }
  ];

  return (
    <section id="interests" className={styles.section}>
      <div className={styles.sectionEyebrow}>✦ what drives me</div>
      <h2 className={styles.secTitle}>Interests & Passions</h2>
      <div className={styles.interestsGrid}>
        {interests.map((interest, idx) => {
          const IconComponent = interest.icon;
          return (
            <div key={idx} className={styles.interestCard}>
              <div className={styles.interestIconWrapper}>
                <IconComponent size={32} className={styles.interestIcon} />
              </div>
              <h3 className={styles.interestTitle}>{interest.title}</h3>
              <p className={styles.interestDesc}>{interest.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
