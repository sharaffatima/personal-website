import { toolGroups } from '../data/tools';
import styles from '../styles/Tools.module.css';
import SectionHeading from './SectionHeading';

export default function Tools() {
  return (
    <section id="tools" className={styles.section} aria-labelledby="tools-title">
      <div className="container">
        <SectionHeading id="tools-title" eyebrow="Toolkit" title="Tools I work with" />
        <dl className={styles.groups}>
          {toolGroups.map((group) => (
            <div key={group.id} className={styles.row}>
              <dt className={styles.label}>{group.label}</dt>
              <dd className={styles.items}>
                <ul role="list" className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
