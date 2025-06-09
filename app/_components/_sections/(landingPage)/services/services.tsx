import React from 'react';
import styles from './services.module.css';
import { FaCode, FaMobileAlt, FaSearchDollar, FaShoppingCart, FaServer, FaTeamspeak  } from 'react-icons/fa';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Bespoke web applications that reflects you and engages your audience. Built with modern tools for optimal performance.',
    icon: <FaCode />, 
    color: 'primary'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Online stores with secure checkout, inventory management, and conversion optimization.',
    icon: <FaShoppingCart />, 
    color: 'brown'
  },
  {
    title: 'Responsive Web Design',
    description: 'Mobile-first designs that adapt seamlessly to any device, ensuring perfect user experience everywhere.',
    icon: <FaMobileAlt />, 
    color: 'purple'
  },
  {
    title: 'SEO Optimization',
    description: 'Technical SEO and strategy to drive your business to top of search rankings and boost organic traffic.',
    icon: <FaSearchDollar />, 
    color: 'green'
  },
  {
    title: 'Web Maintenance & Support',
    description: 'Ongoing updates, performance optimization, and reliable support to keep you running smoothly.',
    icon: <FaServer />, 
    color: 'yellow'
  },
  {
    title: 'Web Design Consultation',
    description: 'Indifferent about your project? Book a free consultation to discuss your needs and get strategic guidance and expert advice.',
    icon: <FaTeamspeak />, 
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
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;