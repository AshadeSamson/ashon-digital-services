"use client";

import React from 'react';
import styles from './services.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaSearchDollar, FaShoppingCart, FaServer, FaTeamspeak  } from 'react-icons/fa';

const services = [
  {
    title: 'Custom Web Development',
    description: 'We build custom websites and applications from the ground up — clean code, seamless functionality, and scalable designs tailored to your unique business needs.',
    icon: <FaCode />, 
    color: 'primary'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Get a modern ecommerce website that’s easy to manage, optimized for conversions, and built for growth. Whether you\'re launching your first product or scaling an online store, we make selling simple.',
    icon: <FaShoppingCart />, 
    color: 'brown'
  },
  {
    title: 'Responsive Web Design',
    description: 'We design mobile-first, lightning-fast websites that look and feel amazing on phones, tablets, and desktops. Because great UX = more engagement.',
    icon: <FaMobileAlt />, 
    color: 'purple'
  },
  {
    title: 'SEO Optimization',
    description: 'We optimize your site structure, speed, and content to help you rank higher on Google and attract organic traffic that converts.',
    icon: <FaSearchDollar />, 
    color: 'green'
  },
  {
    title: 'Web Maintenance & Support',
    description: 'From bug fixes to content updates and technical support, we keep your website running smoothly long after launch.',
    icon: <FaServer />, 
    color: 'yellow'
  },
  {
    title: 'Web Design Consultation',
    description: 'Not sure where to start? We\'ll walk you through the process, help you clarify your goals, and recommend the best solution for your business.',
    icon: <FaTeamspeak />, 
    color: 'secondary'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <motion.h2 initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3 }} viewport={{once: true}} className={styles.title}>Our <span className={styles.highlight}>Services</span></motion.h2>
          <motion.p initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.description}>We offer web solutions tailored to your business and get you results.</motion.p>
        </div>

        <div className={styles.cardsGrid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <motion.div initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.4}} viewport={{once: true}} className={`${styles.iconWrapper} ${styles[service.color]}`}>
                {service.icon}
              </motion.div>
              <motion.h3 initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.4}} viewport={{once: true}} className={styles.serviceTitle}>{service.title}</motion.h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;