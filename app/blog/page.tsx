import React from 'react';
import styles from './blog.module.css';


export const metadata = {
  title: 'Blog | Web Design, Development & Digital Growth Insights – Ashon Digital Services',
  description: 'Discover expert tips, tutorials, and case studies on web design, development, and digital strategy. Stay informed with the latest insights from Ashon Digital Services.',
};


const Blog = () => {


  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.textSplit}>
            <h1 className={styles.headline}>
              <span className={styles.gradientText}>Our Blog</span><br /> is Coming Soon
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.subtext}>
              We’re working behind the scenes to launch a resourceful blog packed with insights on web development, design trends, and business growth. Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
