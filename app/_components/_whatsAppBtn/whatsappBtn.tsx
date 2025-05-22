'use client';

import React from 'react';
import styles from './whatsappBtn.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '2349012345678'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  );
};

export default WhatsAppButton;
