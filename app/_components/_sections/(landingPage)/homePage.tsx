import React from 'react'
import Hero from './hero/hero'
import About from './about/about'
import Services from './services/services'
import Portfolio from './portfolio/portfolio'
import Testimonials from './testimonials/testimonials'
import Contact from './contact/contact'
import Faqs from './FAQs/faqs'
import Process from './process/process'



function HomePage() {
  
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
    </>
  )
}

export default HomePage