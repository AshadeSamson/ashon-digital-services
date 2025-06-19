import React from 'react';
import styles from './blog.module.css';
import Link from 'next/link';
import Image from 'next/image';


export const metadata = {
  title: 'Our Blog | Coming Soon',
  description: 'Explore helpful articles, tutorials, and insights on web development and digital growth. Our blog is coming soon!',
};


const Blog = () => {


  return (
    <>
      <section className={styles.main}>
        <div className={styles.mainContent}>
          <div className={`${styles.floating} ${styles.iconContainer}`}>
            <Image src="/images/favicon.png" alt="Blog Icon" width={45} height={45} />
          </div>

          <h1 className={styles.headline}>
            <span className={styles.gradientText}>Our Blog</span><br /> is Coming Soon
          </h1>

          <p className={styles.subtext}>
            We’re working behind the scenes to launch a resourceful blog packed with insights on web development, design trends, and business growth. Stay tuned!
          </p>

          <div className={styles.buttonGroup}>
            <Link href="https://wa.link/y6dil4" target="_blank" rel="noopener noreferrer">
              <button className={styles.contactButton}>Contact Us</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
