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
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once:true }}
              transition={{ duration: 1.0, delay: 0.4 }} 
              className={styles.heading}>
            Smart <span className={styles.highlight}>Websites</span> Built to Grow Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:true }}
            transition={{ duration: 1.0, delay: 0.6 }}  
            className={styles.subheading}>
          Whether you're a startup, a growing brand, or a service-based company, from idea to launch, we bring your digital vision to life with user-friendly websites tailored to your business goals.
          </motion.p>
          <div 
            className={styles.ctaGroup}>
            <Link href="#contact" scroll={true}><button className={styles.button}>Start Your Project</button></Link>
            <Link href="#portfolio" scroll={true}><button className={styles.outlineButton}>See Our Work</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;