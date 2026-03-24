import { ArrowRight, Rocket, Zap } from 'lucide-react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroSup} pop pop1`}>
        <Zap size={18} style={{ display: 'inline-block', marginRight: '0.5rem' }} />
        Open to opportunities · Backend Engineer · Always learing
      </div>
      <h1 className={`${styles.heroName} pop pop2`}>
        <span className={styles.fillPink}>FATIMA</span>
        <br />
        <span className={styles.stroke}>SHARAF</span>
      </h1>
      <p className={`${styles.heroRole} pop pop3`}>
        <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>Backend Developer & System Designer</span>
        <span className={styles.cursorBlink}></span>
      </p>
      <p className={`${styles.heroDesc} pop pop3`}>
        I build scalable backend systems and robust APIs. Experienced with Django, PostgreSQL, and Docker
        in production environments. Passionate about clean architecture, system design, and solving real-world problems
        through technology. Currently volunteering at SharafAI working on real-world projects.
      </p>
      <div className={`${styles.stickerRow} pop pop3`}>
        <span className={`${styles.sticker} ${styles.s1}`}>Python</span>
        <span className={`${styles.sticker} ${styles.s2}`}>Django</span>
        <span className={`${styles.sticker} ${styles.s3}`}>PostgreSQL</span>
        <span className={`${styles.sticker} ${styles.s4}`}>Docker</span>
        <span className={`${styles.sticker} ${styles.s5}`}>REST APIs</span>
        <span className={`${styles.sticker} ${styles.s6}`}>Git / GitHub</span>
        <span className={`${styles.sticker} ${styles.s1}`}>Linux</span>
      </div>
      <div className={`${styles.heroCtas} pop pop4`}>
        <a className={`${styles.btn} ${styles.btnMain}`} href="#projects">
          <Rocket size={18} style={{ display: 'inline-block', marginRight: '0.5rem' }} />
          See my work
        </a>
        <a className={`${styles.btn} ${styles.btnGhost}`} href="#contact">
          Let's talk
          <ArrowRight size={18} style={{ display: 'inline-block', marginLeft: '0.5rem' }} />
        </a>
      </div>
    </div>
  );
}
