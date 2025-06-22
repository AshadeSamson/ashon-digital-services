"use client";

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './faqs.module.css';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Every project is different, but most websites take 2 to 4 weeks depending on features and complexity. Ecommerce websites or custom web applications may take a bit longer. We’ll always agree on a clear timeline during the planning phase.",
  },
  {
    question: "Can you design mobile-friendly websites?",
    answer:
      "Absolutely! We specialize in responsive web design, meaning your website will look and work great on all devices; phones, tablets, and desktops.",
  },
  {
    question: "Can I update my website after it’s launched?",
    answer:
      "Yes, you can! We use intuitive platforms that make updates easy. Plus, we offer web maintenance & support plans in case you’d rather let us handle it.",
  },
    {
    question: "How much does a website cost?",
    answer:
      "Our web design packages start at ₦180,000 for a basic, mobile-friendly business website. Prices vary depending on the type and complexity of the site. Starter ecommerce websites typically start at ₦250,000, while custom web applications prices vary depending on requested features. We provide a tailored quote after a free consultation, with no hidden fees or surprises.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Definitely. We love helping small businesses, startups, and solo entrepreneurs bring their ideas to life. Whether you need a portfolio, an ecommerce store, or a full web application, we’ve got you covered.",
  },
  {
    question: "What if I don’t know exactly what I need?",
    answer:
      "No problem! That’s what our web design consultation is for. We’ll guide you step by step and recommend the best solution based on your goals and budget.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <section className={styles.faqContainer} id="faqs">
      <div className={styles.header}>
        <motion.h2 initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.title}>Frequently Asked Questions</motion.h2>
        <motion.p initial={{translateY:200, opacity:0}} whileInView={{translateY:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.description}>Clear answers to help you feel confident about your next website.</motion.p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              <span className={styles.icon}>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {activeIndex === index && <div className={styles.answer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
