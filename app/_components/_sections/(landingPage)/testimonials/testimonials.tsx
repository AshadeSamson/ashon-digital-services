"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './testimonials.module.css';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Obot Essiet Jr.',
    role: 'COO, LEAD Resources Ecosystem Limited',
    quote: 'He consistently demonstrated patience, responsiveness, and promptness in addressing all our requests. His ability to understand and execute our vision as a management consulting firm resulted in a website that perfectly aligns with our brand and objectives. We highly recommend his services to anyone seeking a professional and dedicated web designer.',
    image: 'https://res.cloudinary.com/da4tsxgwd/image/upload/v1750067854/OO_xaeu6e.jpg',
    stars: 5,
  },
  {
    name: 'Oladodu Damilola',
    role: 'CEO, DDBlings Jewelry ',
    quote: 'One thing I really appreciated working with them was how quick they were to respond.',
    image: 'https://res.cloudinary.com/da4tsxgwd/image/upload/v1750067844/DDBlings_y5kvbk.png',
    stars: 5,
  },
  {
    name: 'Tolulope',
    role: 'Creative Director',
    quote: 'They are timely, communicated openly and, showed a high level of meticulousness in every detail.',
    image: 'https://res.cloudinary.com/da4tsxgwd/image/upload/v1750067851/TS_tcjd6f.jpg',
    stars: 5,
  },
  {
    name: 'Emmanuel Adeleke ',
    role: 'CEO, Dreamboat EnviroBuild',
    quote: 'Excellent service! They were professional, reliable, and delivered exactly what I needed. Highly recommended.',
    image: 'https://res.cloudinary.com/da4tsxgwd/image/upload/v1750067841/DreamBoat_w2atuv.jpg',
    stars: 4,
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={`${styles.header} fade-in`}>
        <motion.h2 initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.title}>
          Client <span className={styles.highlight}>Testimonials</span>
        </motion.h2>
        <motion.p initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.description}>
          Here's what our clients say about working with us.
        </motion.p>
      </div>

      <div className={styles.sliderWrapper}>
        <div className={styles.slideContainer}>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={
                idx === currentIndex ? `${styles.slide} ${styles.activeSlide}` : `${styles.slide} ${styles.inactiveSlide}`
              }
            >
              <div className={styles.card}>
                <div className={styles.profile}>
                  <img src={t.image} alt={t.name} className={styles.avatar} />
                  <div>
                    <h4 className={styles.name}>{t.name}</h4>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
                <p className={styles.quote}>
                  "{t.quote}"
                </p>
                <div className={styles.stars}>
                  {Array(t.stars).fill(0).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={
                idx === currentIndex
                  ? `${styles.dot} ${styles.active}`
                  : styles.dot
              }
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>

        <button onClick={prevSlide} className={styles.prevBtn}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} className={styles.nextBtn}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
