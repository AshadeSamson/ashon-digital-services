import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';



const Hero = () => {
  return (
    <section className={styles.hero} id="home">
        <h1 className={styles.heading}>
          Smart <span className={styles.highlight}>Websites</span> Built to Grow Your Business
        </h1>
        <p className={styles.subheading}>
        From idea to launch, we bring your digital vision to life with expert web development, responsive design, and user-first solutions.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="#contact" scroll={true}><button className={styles.button}>Start Your Project</button></Link>
          <Link href="#portfolio" scroll={true}><button className={styles.outlineButton}>See Our Work</button></Link>
        </div>
    </section>
  );
};

export default Hero;