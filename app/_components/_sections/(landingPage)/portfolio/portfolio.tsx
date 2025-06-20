"use client";

import React, { useState } from 'react';
import styles from './portfolio.module.css';
import { projects } from '@/app/_utils/fake_data/endpoint';
import Link from 'next/link';
import ProjectModal from '@/app/_components/_modals/projectShowcase/projectModal';
import { motion } from 'framer-motion';

const Portfolio = () => {

  const [activeProject, setActiveProject] = useState<null | typeof projects[0]>(null);

  const openModal = (project: typeof projects[0]) => setActiveProject(project);
  const closeModal = () => setActiveProject(null);


  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <motion.h2 initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.title}>
            Our Recent Works
          </motion.h2>
          <motion.p initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.description}>Each project is a unique challenge we embrace to deliver exceptional results.</motion.p>
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
                <Link onClick={() => openModal(project)}
                   className={`${styles.ctaButton} hover:bg-opacity-90`} href="#portfolio">
                    View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <ProjectModal
            isOpen={!!activeProject}
            onClose={closeModal}
            videoSrc={activeProject.video}
            title={activeProject.title}
          />
        )}

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