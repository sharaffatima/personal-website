import { ArrowUpRight } from 'lucide-react';
import styles from '../styles/ProjectCard.module.css';
import TechLabel from './TechLabel';

export default function ProjectCard({ project, index }) {
  const { category, title, description, tags, image, link } = project;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={styles.card}>
      <figure className={styles.frame}>
        <img
          className={styles.image}
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 640px) 50vw, 100vw"
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </figure>

      <div className={styles.body}>
        <p className={styles.meta}>
          <span>{number}</span>
          <span className={styles.rule} aria-hidden="true" />
          <span>{category}</span>
        </p>

        <h3 className={styles.title}>
          {link ? (
            <a
              className={styles.titleLink}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
              <span className="visually-hidden"> — {link.label} (opens in a new tab)</span>
            </a>
          ) : (
            title
          )}
        </h3>

        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <ul role="list" className={styles.tags} aria-label="Technologies">
            {tags.map((tag) => (
              <TechLabel key={tag}>{tag}</TechLabel>
            ))}
          </ul>
          {link ? <ArrowUpRight className={styles.arrow} size={22} aria-hidden="true" /> : null}
        </div>
      </div>
    </article>
  );
}
