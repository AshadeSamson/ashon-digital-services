import React from 'react'
import Hero from './_components/_sections/(landingPage)/hero/hero'
import About from './_components/_sections/(landingPage)/about/about'
import Services from './_components/_sections/(landingPage)/services/services'
import Portfolio from './_components/_sections/(landingPage)/portfolio/portfolio'
import Testimonials from './_components/_sections/(landingPage)/testimonials/testimonials'
import Contact from './_components/_sections/(landingPage)/contact/contact'
import Faqs from './_components/_sections/(landingPage)/FAQs/faqs'
import Process from './_components/_sections/(landingPage)/process/process'

function Home() {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Faqs />
    </>
  )
}

export default Home