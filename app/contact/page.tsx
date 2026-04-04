import React from 'react';
import ContactPageContent from './_components/contactPageContent';

export async function generateMetadata() {
  return {
    title: 'Contact Us | Get in Touch – Ashon Digital Services',
    description:
      'Have a project in mind? Contact Ashon Digital Services today. We offer free consultations and are ready to help you build a website that grows your business.',
    keywords:
      'contact Ashon Digital Services, web design Nigeria contact, website quote Nigeria, free web consultation, hire web developer Nigeria',
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
