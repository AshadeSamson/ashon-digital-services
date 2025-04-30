import React from 'react'
import Hero from './_components/_sections/(landingPage)/hero/hero'
import About from './_components/_sections/(landingPage)/about/about'
import Services from './_components/_sections/(landingPage)/services/services'
import Portfolio from './_components/_sections/(landingPage)/portfolio/portfolio'

function Home() {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
  )
}

export default Home