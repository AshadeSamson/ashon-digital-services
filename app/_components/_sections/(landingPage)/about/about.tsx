import React from 'react';
import styles from './about.module.css';
import teamImage from '../../../../../public/images/aboutImage.webp'; 

const About: React.FC = () => {

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={`${styles.content} fade-in`}>
            <h2 className={styles.heading}><span className={styles.highlight}>About Us</span></h2>
            <p className={styles.text}>
              At Ashon Digital Services, we craft web platforms designed to work hard for your business. Whether you are launching a new idea, refreshing your brand, or scaling operation, we blend strategic thinking with clean, scalable approaches to create experiences your users will love. 
            </p>
            <p className={styles.text}>
             Remote-first and serving clients globally, we collaborate seamlessly turning complex challenges into smart, intuitive solutions. Every project is a partnership. We listen, guide, and build with purpose, so your brand doesn't just look good online, it performs boldly.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}><span className={styles.dotBlue}></span>25+ Projects Completed</div>
              <div className={styles.stat}><span className={styles.dotPurple}></span>Served Local & Global Clients</div>
              <div className={styles.stat}><span className={styles.dotGreen}></span>99% Client Satisfaction</div>
            </div>
            <a href="#contact" className={styles.button}>Work With Us</a>
          </div>

          <div className={`${styles.imageContainer} fade-in delay-1`}>
            <div className="relative">
              <img
                src={teamImage.src}
                alt="Our team"
                className={styles.image}
              />
              <div className={styles.missionCard}>
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  To empower businesses through smart & innovative web solutions that drive growth and create meaningful connections with their audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;