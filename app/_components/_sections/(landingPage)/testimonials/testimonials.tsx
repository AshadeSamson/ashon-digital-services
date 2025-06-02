"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './testimonials.module.css';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    quote: 'Nam eget lectus in velit facilisis gravida. Sed sapien velit, ultrices ac porttitor non, faucibus eget arcu. Integer a viverra odio, at pretium nulla. In placerat erat libero, id aliquet lorem suscipit volutpat. Vivamus lectus orci, vehicula tempus lobortis id, iaculis eu lorem. Curabitur vestibulum auctor turpis ut finibus.s!',
    image: 'https://randomuser.me/api/portraits/women/43.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Global Retail',
    quote: 'Nam eget lectus in velit facilisis gravida. Sed sapien velit, ultrices ac porttitor non, faucibus eget arcu. Integer a viverra odio, at pretium nulla. In placerat erat libero, id aliquet lorem suscipit volutpat. Vivamus lectus orci, vehicula tempus lobortis id, iaculis eu lorem. Curabitur vestibulum auctor turpis ut finibus.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Founder, Creative Agency',
    quote: 'Nam eget lectus in velit facilisis gravida. Sed sapien velit, ultrices ac porttitor non, faucibus eget arcu. Integer a viverra odio, at pretium nulla. In placerat erat libero, id aliquet lorem suscipit volutpat. Vivamus lectus orci, vehicula tempus lobortis id, iaculis eu lorem. Curabitur vestibulum auctor turpis ut finibus.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
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
        <h3 className={styles.title}>
          Client <span className={styles.highlight}>Testimonials</span>
        </h3>
        <p className={styles.description}>
          Here's what our clients say about working with us.
        </p>
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
                  {Array(5).fill(0).map((_, i) => (
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
