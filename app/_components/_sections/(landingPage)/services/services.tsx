import React from 'react';
import styles from './services.module.css';
import { FaCode, FaMobileAlt, FaSearchDollar, FaShoppingCart, FaServer, FaChartLine, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Bespoke web applications built with modern frameworks like React, Vue, and Node.js for optimal performance.',
    icon: <FaCode />, 
    color: 'primary'
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-first designs that adapt seamlessly to any device, ensuring perfect user experience everywhere.',
    icon: <FaMobileAlt />, 
    color: 'purple'
  },
  {
    title: 'SEO Optimization',
    description: 'Technical SEO and content strategy to boost search rankings and organic traffic.',
    icon: <FaSearchDollar />, 
    color: 'green'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Online stores with secure payment gateways, inventory management, and conversion optimization.',
    icon: <FaShoppingCart />, 
    color: 'brown'
  },
  {
    title: 'Web Hosting',
    description: 'High-speed hosting with backups, SSL, and 24/7 technical support.',
    icon: <FaServer />, 
    color: 'yellow'
  },
  {
    title: 'Performance Optimization',
    description: 'Improve speed and performance with advanced optimization techniques.',
    icon: <FaChartLine />, 
    color: 'secondary'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>Our <span className={styles.highlight}>Services</span></h2>
          <p className={styles.description}>We offer comprehensive web solutions tailored to your business needs.</p>
        </div>

        <div className={styles.cardsGrid}>
          {services.map((service, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={`${styles.iconWrapper} ${styles[service.color]}`}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className={styles.learnMore}>Learn more <FaArrowRight /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;