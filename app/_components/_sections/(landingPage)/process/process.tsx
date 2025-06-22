"use client";

import React from 'react';
import styles from './process.module.css';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery',
    description: 'We kick things off with a friendly consultation to learn about your business, brand, and goals. This is where we identify what makes your website truly stand out and how to position it to succeed.',
  },
  {
    title: 'Planning',
    description: 'From sitemap to user experience, we plan every page and interaction with clarity and purpose. You’ll get wireframes or mockups that show exactly how your site will look and function.',
  },
  {
    title: 'Implementation',
    description: 'This is where the magic happens. We develop your site using clean code, responsive layouts, and SEO best practices to ensure it loads fast, works on all devices, and is easy to update.',
  },
  {
    title: 'Launch',
    description: 'Once your website is tested, polished, and approved, we launch it for the world to see. We also provide training or ongoing support so you can manage your site with ease.',
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
            A proven process, designed to deliver websites that are clean, effective, and conversion-ready.
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
