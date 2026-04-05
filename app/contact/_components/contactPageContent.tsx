"use client";

import React, { useState } from 'react';
import styles from '../contact.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import {
  FaUser,
  FaEnvelope,
  FaWhatsapp,
  FaCommentDots,
  FaArrowRight,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

type FormData = {
  name?: string;
  email?: string;
  service?: string;
  mobile?: string;
  message?: string;
};

const ContactPageContent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    mobile: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const endpoint = '/api/contact';
    setIsSubmitting(true);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.message || "We are sorry, we couldn't send your message. Please try again"
        );
      }

      await res.json();
      toast.success('Your message has been sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', service: '', mobile: '', message: '' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("We are sorry, we couldn't send your message. Please try again");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.main}>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.heroEyebrow}
            >
              Let's Talk
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={styles.heroHeading}
            >
              Start a Conversation About{' '}
              <span className={styles.highlight}>Your Website</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.heroSubheading}
            >
              Whether you need a brand-new site, an upgrade, or just some guidance — we're
              here to help you make the right decision for your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ───────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            {/* Left: contact info cards */}
            <motion.div
              initial={{ translateY: 60, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={styles.infoColumn}
            >
              <h2 className={styles.infoTitle}>Contact Information</h2>
              <p className={styles.infoSubtext}>
                Reach us through any of the channels below, or fill in the form and we'll
                respond within 24 hours.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Phone</p>
                    <p className={styles.infoValue}>(+234) 913-376-5081</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>WhatsApp</p>
                    <p className={styles.infoValue}>(+234) 912-851-1154</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <p className={styles.infoValue}>contact@ashondigitals.com</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Location</p>
                    <p className={styles.infoValue}>Lagos, Nigeria</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <FaClock />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Working Hours</p>
                    <p className={styles.infoValue}>Mon – Sat, 9am – 6pm WAT</p>
                  </div>
                </div>
              </div>

              <Link
                href="https://wa.link/1uww5s"
                className={styles.whatsappButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>

            {/* Right: contact form */}
            <motion.div
              initial={{ translateY: 60, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.formColumn}
            >
              <div className={styles.formWrapper}>
                <h3 className={styles.formTitle}>Book a Free Consultation</h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      Full Name
                    </label>
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
                    <label htmlFor="email" className={styles.formLabel}>
                      Email
                    </label>
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
                    <label htmlFor="mobile" className={styles.formLabel}>
                      WhatsApp Number
                    </label>
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
                    <label htmlFor="service" className={styles.formLabel}>
                      I'm interested in
                    </label>
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
                      <option>Web Maintenance &amp; Support</option>
                      <option>Web Consultation</option>
                      <option>Not sure - I'd like guidance</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={styles.formInput}
                      placeholder="Tell us more about your needs..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Message Us <FaCommentDots className="inline ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.ctaBannerInner}
          >
            <h2 className={styles.ctaBannerTitle}>Not sure where to start?</h2>
            <p className={styles.ctaBannerDesc}>
              Explore our services or check out our portfolio to see what we've built for
              clients across Nigeria and beyond.
            </p>
            <div className={styles.ctaBannerActions}>
              <Link href="/services" className={styles.ctaBannerBtnPrimary}>
                View Our Services <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/#portfolio" scroll={true} className={styles.ctaBannerBtnOutline}>
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPageContent;
