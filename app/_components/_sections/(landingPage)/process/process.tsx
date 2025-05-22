"use client";

import React from 'react';
import styles from './process.module.css';
import { FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    title: 'Discovery',
    description: 'We dive deep to understand your business goals, target audience, and project requirements.',
  },
  {
    title: 'Planning',
    description: 'We create detailed project plans, wireframes, and technical specifications.',
  },
  {
    title: 'Development',
    description: 'Our team builds your solution with clean, efficient code following best practices.',
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
          <span className={styles.subtitle}>Our Methodology</span>
          <h2 className={styles.title}>
            Our <span className={styles.highlight}>Development</span> Process
          </h2>
          <p className={styles.description}>
            A transparent, step-by-step approach to delivering exceptional results.
          </p>
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
          <a href="#contact" className={styles.ctaButton}>
            Get Started With Us <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
