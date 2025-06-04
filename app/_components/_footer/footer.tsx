"use client";

import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCode } from "react-icons/fa";
import logo from '@/public/images/favicon.png'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridBox}>
          <div className={`flex flex-col items-center md:items-start`}>
            <div className={`${styles.branding}`}>
              <img src={logo.src} alt="logoIcon" className={styles.codeIcon} />
              <span className={styles.logoText}>Ashon Digital Services</span>
            </div>
            <p className={`${styles.tagline} text-center md:text-left mb-4`}>We craft digital experiences that drive business growth and engage your audience.</p>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebookF className={`text-xl`}/></a>
              <a href="#"><FaTwitter className={`text-xl`}/></a>
              <a href="#"><FaLinkedinIn className={`text-xl`}/></a>
              <a href="#"><FaInstagram className={`text-xl`}/></a>
            </div>
          </div>

          <div className={`text-center`}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={`flex flex-col items-center md:items-start`}>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <ul className={`${styles.contactList}`}>
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

