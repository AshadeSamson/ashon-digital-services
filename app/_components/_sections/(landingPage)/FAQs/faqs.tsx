"use client";

import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './faqs.module.css';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is Terapeuta?",
    answer:
      "Terapeuta is a web application designed to connect clients with qualified therapists, providing professional therapy services to support mental health and wellness goals.",
  },
  {
    question: "How can I book a session?",
    answer:
      "You can book a session by creating an account, logging in, and selecting a therapist of your choice. From there, you can choose an available time slot and confirm your booking.",
  },
  {
    question: "Is the AI chatbot a replacement for therapy?",
    answer:
      "No, our AI chatbot is designed to complement your therapy, not replace it. It helps reinforce techniques between sessions, provides psychoeducation, and offers guided exercises. For clinical concerns, we always recommend working with a licensed therapist.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes, your data is securely stored using Firebase, ensuring confidentiality and compliance with data protection standards.",
  },
  {
    question: "What therapy types do you offer?",
    answer:
      "We offer a variety of therapeutic approaches including Cognitive Behavioral Therapy (CBT), Solution-focused Therapy, and Career & Life Coaching.",
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
        <motion.h2 initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.title}>Frequently Asked Questions</motion.h2>
        <motion.p initial={{y:200, opacity:0}} whileInView={{y:0, opacity:1}}  transition={{duration:0.3}} viewport={{once: true}} className={styles.description}>lorem ipsum lorem ipsum lorem ipsum lorem ipsun</motion.p>
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
