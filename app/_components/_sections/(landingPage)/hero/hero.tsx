import React from 'react';
import styles from './hero.module.css';



const Hero = () => {
  return (
    <section className={styles.hero}>
        <h1 className={styles.heading}>
          Smart <span className={styles.highlight}>Websites</span> Built to Grow Your Business
        </h1>
        <p className={styles.subheading}>
        From idea to launch, we bring your digital vision to life with expert web development, responsive design, and user-first solutions.
        </p>
        <div className={styles.ctaGroup}>
          <button className={styles.button}>Start Your Project</button>
          <button className={styles.outlineButton}>See Our Work</button>
        </div>
    </section>
  );
};

export default Hero;