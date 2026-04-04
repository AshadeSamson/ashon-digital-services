"use client";

import React from 'react';
import styles from '../services.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaMobileAlt,
  FaSearchDollar,
  FaShoppingCart,
  FaServer,
  FaTeamspeak,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const services = [
  {
    title: 'Custom Web Development',
    description:
      'We build custom websites and applications from the ground up — clean code, seamless functionality, and scalable designs tailored to your unique business needs.',
    icon: <FaCode />,
    color: 'primary',
    features: [
      'Bespoke design & architecture',
      'Scalable, maintainable codebase',
      'Cross-browser compatibility',
      'Performance-first approach',
    ],
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'Get a modern ecommerce website that\'s easy to manage, optimized for conversions, and built for growth. Whether you\'re launching your first product or scaling an online store, we make selling simple.',
    icon: <FaShoppingCart />,
    color: 'brown',
    features: [
      'Product catalog & inventory management',
      'Secure checkout & payment integration',
      'Mobile-optimized shopping experience',
      'Coupon & discount system',
    ],
  },
  {
    title: 'Responsive Web Design',
    description:
      'We design mobile-first, lightning-fast websites that look and feel amazing on phones, tablets, and desktops. Because great UX = more engagement.',
    icon: <FaMobileAlt />,
    color: 'purple',
    features: [
      'Mobile-first design philosophy',
      'Pixel-perfect across all screen sizes',
      'Accessible & inclusive interfaces',
      'Fast load times & optimised assets',
    ],
  },
  {
    title: 'SEO Optimization',
    description:
      'We optimize your site structure, speed, and content to help you rank higher on Google and attract organic traffic that converts.',
    icon: <FaSearchDollar />,
    color: 'green',
    features: [
      'Technical SEO audit & fixes',
      'On-page content optimization',
      'Site speed & Core Web Vitals',
      'Structured data & schema markup',
    ],
  },
  {
    title: 'Web Maintenance & Support',
    description:
      'From bug fixes to content updates and technical support, we keep your website running smoothly long after launch.',
    icon: <FaServer />,
    color: 'yellow',
    features: [
      'Regular updates & security patches',
      'Content & media updates',
      'Uptime monitoring & bug fixes',
      'Priority technical support',
    ],
  },
  {
    title: 'Web Design Consultation',
    description:
      'Not sure where to start? We\'ll walk you through the process, help you clarify your goals, and recommend the best solution for your business.',
    icon: <FaTeamspeak />,
    color: 'secondary',
    features: [
      'Free discovery session',
      'Goal & audience analysis',
      'Technology recommendation',
      'Actionable project roadmap',
    ],
  },
];

const steps = [
  {
    title: 'Discovery',
    description:
      'We kick things off with a friendly consultation to learn about your business, brand, and goals.',
  },
  {
    title: 'Planning',
    description:
      'We plan every page and interaction with clarity and purpose — wireframes, sitemap, and more.',
  },
  {
    title: 'Implementation',
    description:
      'Clean code, responsive layouts, and SEO best practices to ensure your site loads fast and works everywhere.',
  },
  {
    title: 'Launch',
    description:
      'Once tested and approved, we launch your site and provide training or ongoing support.',
  },
];

const ServicesPageContent: React.FC = () => {
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
              What We Do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className={styles.heroHeading}
            >
              Web Solutions Built to{' '}
              <span className={styles.highlight}>Grow Your Business</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.heroSubheading}
            >
              From strategy to launch, we deliver end-to-end digital services that help
              Nigerian businesses and global brands stand out and convert online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className={styles.heroCta}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Get a Free Quote <FaArrowRight className="ml-2" />
              </Link>
              <Link href="/#portfolio" scroll={true} className={styles.ctaOutline}>
                See Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ translateY: 200, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
            >
              Our <span className={styles.highlight}>Services</span>
            </motion.h2>
            <motion.p
              initial={{ translateY: 200, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={styles.sectionDescription}
            >
              Everything your business needs to build a powerful online presence — all under one roof.
            </motion.p>
          </div>

          <div className={styles.cardsGrid}>
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ translateY: 60, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className={styles.serviceCard}
              >
                <div className={`${styles.iconWrapper} ${styles[service.color]}`}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feat, fi) => (
                    <li key={fi} className={styles.featureItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <motion.h2
              initial={{ translateY: 200, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
            >
              Our <span className={styles.highlight}>Development</span> Process
            </motion.h2>
            <motion.p
              initial={{ translateY: 200, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={styles.sectionDescription}
            >
              A proven process, designed to deliver websites that are clean, effective, and
              conversion-ready.
            </motion.p>
          </div>

          <div className={styles.processGrid}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ translateY: 60, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.processCard}
              >
                <div className={styles.stepCircle}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                </div>
                <h3 className={styles.processCardTitle}>{step.title}</h3>
                <p className={styles.processCardText}>{step.description}</p>
              </motion.div>
            ))}
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
            <h2 className={styles.ctaBannerTitle}>
              Ready to build something great?
            </h2>
            <p className={styles.ctaBannerDesc}>
              Let's talk about your project. Book a free consultation and we'll help you
              find the right solution for your business.
            </p>
            <Link href="/contact" className={styles.ctaBannerBtn}>
              Start Your Project <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPageContent;
