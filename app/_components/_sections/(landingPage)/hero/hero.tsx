"use client";

import React from 'react';
import styles from './hero.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once:true }}
              transition={{ duration: 1.0, delay: 0.4 }} 
              className={styles.heading}>
            Smart <span className={styles.highlight}>Websites</span> Built to Grow Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:true }}
            transition={{ duration: 1.0, delay: 0.4 }}  
            className={styles.subheading}>
          From idea to launch, we bring your digital vision to life with expert web development, responsive design, and user-first solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className={styles.ctaGroup}>
            <Link href="#contact" scroll={true}><button className={styles.button}>Start Your Project</button></Link>
            <Link href="#portfolio" scroll={true}><button className={styles.outlineButton}>See Our Work</button></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;