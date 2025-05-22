"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';
import styles from './contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <section id="contact" className={styles.signup}>
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8">
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to Start Your Journey?</h2>
            <p className={styles.description}>
              Take the first step toward better mental health today. Our team is here to support you every step of the way.
            </p>
            <div className={styles.buttonContainer}>
              <a className={styles.contactbutton}>Sign Up Now</a>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Book Free Consultation</h3>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`${styles.formInput} pl-10`}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`${styles.formInput} pl-10`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.formLabel}>I'm interested in</label>
                  <select
                    id="service"
                    name="service"
                    className={styles.formInput}
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Choose a service</option>
                    <option>Cognitive Behavioral Therapy</option>
                    <option>Mindfulness-Based Therapy</option>
                    <option>Career & Life Coaching</option>
                    <option>Not sure - I'd like guidance</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={styles.formInput}
                    placeholder="Tell us more about your needs..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  <FaCommentDots className="inline mr-2" /> Message Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
