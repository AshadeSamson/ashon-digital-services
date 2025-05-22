"use client";

import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCode } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridBox}>
          <div>
            <div className={styles.branding}>
              <FaCode className={styles.codeIcon} />
              <span className={styles.logoText}>Ashon Digital Services</span>
            </div>
            <p className={styles.tagline}>We craft digital experiences that drive business growth and engage your audience.</p>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <ul className={styles.contactList}>
              <li><FaMapMarkerAlt className={styles.icon} /><span>123 Web Dev Street, Digital City, 10001</span></li>
              <li><FaPhoneAlt className={styles.icon} /><span>(123) 456-7890</span></li>
              <li><FaEnvelope className={styles.icon} /><span>contact@ashondigitals.site</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; 2025 Ashon Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

