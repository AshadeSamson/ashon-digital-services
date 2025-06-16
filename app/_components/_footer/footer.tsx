"use client";

import React, { useState } from "react";
import PrivacyPolicy from "../_modals/privacyPolicy/privacyPolicy";
import styles from "./footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp} from "react-icons/fa";
import logo from '@/public/images/favicon.png'
import Link from "next/link";

const Footer: React.FC = () => {

  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);

  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridBox}>
          <div className={`flex flex-col items-center md:items-start`}>
            <div className={`${styles.branding}`}>
              <img src={logo.src} alt="logoIcon" className={styles.codeIcon} />
              <span className={styles.logoText}>Ashon Digital Services</span>
            </div>
            <p className={`${styles.tagline} text-center md:text-left mb-4`}>We create smart, stunning websites that help your business grow online. Our focus is on clean design, modern tech, and digital experiences that convert.</p>
            <div className={styles.socialIcons}>
              <Link href="https://www.instagram.com/ashonservices"><FaInstagram className={`text-xl`}/></Link>
              <Link href="https://www.linkedin.com/company/ashonservices"><FaLinkedinIn className={`text-xl`}/></Link>
              <Link href="https://www.facebook.com/ashonservices"><FaFacebookF className={`text-xl`}/></Link>
              <Link href="https://x.com/ashonservices"><FaTwitter className={`text-xl`}/></Link>
            </div>
          </div>

          <div className={`text-center`}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#process">Our Process</Link></li>
              <li><Link href="#portfolio">Our Portfolio</Link></li>
              <li><Link href="#contact">Talk to Us</Link></li>
              <li><Link href="#privacy" id="privacy" onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</Link></li>
            </ul>
          </div>

          <div className={`flex flex-col items-center md:items-start`}>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <ul className={`${styles.contactList}`}>
              <li><FaPhoneAlt className={styles.icon} /><span>(+234) 913-376-5081</span></li>
              <li><FaWhatsapp className={styles.icon} /><span>(+234) 912-851-1154</span></li>
              <li><FaEnvelope className={styles.icon} /><span>contact@ashondigitals.site</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; 2025 Ashon Digital Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
    <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Footer;

