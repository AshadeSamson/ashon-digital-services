import React from 'react';
import styles from './portfolio.module.css';
import { projects } from '@/app/_utils/fake_data/endpoint';

const Portfolio = () => {


  return (
    <section id="work" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.headerText}>
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

        {/* <div className={styles.viewAllWrapper}>
          <a href="#" className={styles.viewAllButton}>
            View all projects
            <span className="ml-2">→</span>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Portfolio