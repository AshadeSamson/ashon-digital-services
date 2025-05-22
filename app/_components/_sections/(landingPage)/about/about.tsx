import React from 'react';
import styles from './about.module.css';
import { FaBullseye, FaEye } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={`${styles.content} fade-in`}>
            <h2 className={styles.heading}><span className={styles.highlight}>About Us</span></h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ex nisl. Etiam mattis, ante quis semper euismod, nisi enim sodales tellus, non euismod dui justo nec felis. In hac habitasse platea dictumst. Nullam ut nisi sit amet sem feugiat aliquam mollis vel ligula. 
            </p>
            <p className={styles.text}>
             Nam eget lectus in velit facilisis gravida. Sed sapien velit, ultrices ac porttitor non, faucibus eget arcu. Integer a viverra odio, at pretium nulla. In placerat erat libero, id aliquet lorem suscipit volutpat. Vivamus lectus orci, vehicula tempus lobortis id, iaculis eu lorem. Curabitur vestibulum auctor turpis ut finibus.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}><span className={styles.dotBlue}></span>50+ Projects Completed</div>
              <div className={styles.stat}><span className={styles.dotPurple}></span>15 Countries Served</div>
              <div className={styles.stat}><span className={styles.dotGreen}></span>98% Client Satisfaction</div>
            </div>
            <a href="#contact" className={styles.button}>Work With Us</a>
          </div>

          <div className={`${styles.imageContainer} fade-in delay-1`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Our team"
                className={styles.image}
              />
              <div className={styles.missionCard}>
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  To empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audience.
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