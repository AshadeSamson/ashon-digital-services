"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaCommentDots, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import styles from './contact.module.css';
import Link from 'next/link';
import { toast } from 'react-toastify';

type FormData = {
  name?: string;
  email?: string;
  service?: string;
  mobile?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    mobile: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const endpoint = "/api/contact"

    try {
      setIsSubmitting(true);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'We are sorry, we couldn\'t send your message. Please try again');
        setIsSubmitting(false);
      }

      const data = await res.json();
      toast.success('Your message has been sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', service: '', mobile: '', message: '' });
      setIsSubmitting(false);
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        setIsSubmitting(false);
      } else {
        toast.error('We are sorry, we couldn\'t send your message. Please try again');
        setIsSubmitting(false);
      } 
    }
    console.log('Form submitted:', formData);
  }

  return (
    <section id="contact" className={styles.signup}>
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className={styles.content}>
            <h3 className={styles.title}>Launch Offer: Get a Website That Means Business At a Friendly Price</h3>
            <p className={styles.description}>
              We’re celebrating our launch by offering limited-time discounts on all web design and development packages. Whether it’s an ecommerce site, portfolio, or full-scale business website, now’s the perfect time to go live.
            </p>
            <div className={styles.buttonContainer}>
              <Link href="https://wa.link/1uww5s" 
                    className={styles.contactbutton}
                    target="_blank"
                    rel="noopener noreferrer">
                      Start Your Project Now
                      <FaArrowRight className="ml-2" /></Link>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Book Free Consultation</h3>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`${styles.formInput} !pl-10`}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`${styles.formInput} !pl-10`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="mobile" className={styles.formLabel}>Whatsapp Number</label>
                  <div className="relative">
                    <FaWhatsapp className="absolute top-3 left-3 text-gray-500" />
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className={`${styles.formInput} !pl-10`}
                      placeholder="+1 234 567 8900"
                      min={10}
                      maxLength={20}
                      pattern="[\+0-9\-\(\)\s]{10,20}" 
                      value={formData.mobile}
                      onChange={handleChange}
                      required
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
                    <option>Custom Web Development</option>
                    <option>E-Commerce Solutions</option>
                    <option>Responsive Web Design</option>
                    <option>SEO Optimization</option>
                    <option>Web Maintenance & Support</option>
                    <option>Web Consultation</option>
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
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  Message Us &nbsp; <FaCommentDots className="inline mr-2" />
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
