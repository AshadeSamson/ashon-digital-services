"use client";

import React from 'react';
import styles from './process.module.css';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep to understand your business goals, target audience, and project requirements.',
  },
  {
    title: 'Planning',
    description: 'We create detailed project plans, wireframes, and specifications.',
  },
  {
    title: 'Implementation',
    description: 'We get to work, and provide constant updates and feedback while at it.',
  },
  {
    title: 'Launch',
    description: 'We thoroughly test and deploy your solution, then provide training and support.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.title}>
            Our <span className={styles.highlight}>Development</span> Process
          </motion.h2>
          <motion.p initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.description}>
            A transparent, step-by-step approach to delivering exceptional results.
          </motion.p>
        </div>

        <div className={styles.gridBox}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconCircle}>
                <span className={styles.stepNumber}>{index + 1}</span>
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="#contact" scroll={true} className={styles.ctaButton}>
            Get Started With Us <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
