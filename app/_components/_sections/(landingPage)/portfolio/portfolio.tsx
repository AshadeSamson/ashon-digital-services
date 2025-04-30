import React from 'react';
import Image from 'next/image';
import styles from './portfolio.module.css';
import images from '../../../../../public/images/hero-bg.jpg';

const Portfolio = () => {

  const projects = [
    {
      title: 'Fashion Boutique',
      category: 'E-Commerce',
      description: 'A modern online store with product customization',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    },
    {
      title: 'Tech Startup',
      category: 'Corporate',
      description: 'Innovative design for a SaaS platform',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
    },
    {
      title: 'Adventure Tours',
      category: 'Travel',
      description: 'Interactive booking system with VR previews',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1336&q=80',
    },
  ];

  return (
    <section id="work" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <span className={styles.subtitle}>OUR PORTFOLIO</span>
          <h2 className={styles.title}>Showcase Of Our Recent Work</h2>
          <p className={styles.description}>Each project is a unique challenge we embrace to deliver exceptional results.</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={`group ${styles.projectCard}`}>
              <img src={project.image} alt={project.title} className={`${styles.projectImage} group-hover:scale-105`} />
              <div className={styles.overlayGradient}></div>
              <div className={styles.projectContent}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
              <div className={`${styles.hoverOverlay} group-hover:opacity-100`}>
                <a href="#" className={`${styles.ctaButton} hover:bg-opacity-90`}>View Case Study</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAllWrapper}>
          <a href="#" className={styles.viewAllButton}>
            View all projects
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio