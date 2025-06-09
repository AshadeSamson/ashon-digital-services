'use client';

import React from 'react';
import styles from './whatsappBtn.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WhatsAppButton: React.FC = () => {

  return (
    <Link
      href="https://wa.link/1uww5s"
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </Link>
  );
};

export default WhatsAppButton;
