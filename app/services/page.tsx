import React from 'react';
import ServicesPageContent from './_components/servicesPageContent';

export async function generateMetadata() {
  return {
    title: 'Our Services | Web Design & Development – Ashon Digital Services',
    description:
      'Explore the full range of web services we offer, from custom web development and e-commerce solutions to SEO optimization and ongoing maintenance. Serving businesses across Nigeria and beyond.',
    keywords:
      'web development services, web design Nigeria, e-commerce website, SEO optimization, responsive web design, web maintenance, website consultation, Ashon Digital Services',
  };
}

export default function ServicesPage() {
  return <ServicesPageContent />;
}
