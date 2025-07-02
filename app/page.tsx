import React from 'react'
import HomePage from './_components/_sections/(landingPage)/homePage'
import ScrollToHash from './_lib/scrollToHash'
import Head from 'next/head'



function Home() {

  return (
    <>
      <Head>
        <link rel="canonical" href="https://ashondigitals.site" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ashon Digital Services",
              url: "https://ashondigitals.site",
              logo: "https://ashondigitals.site/public/images/logo.png",
              sameAs: [
                "https://instagram.com/ashonservices",
                "https://x.com/ashonservices",
                "https://linkedin.com/company/ashonservices",
              ],
            }),
          }}
        />
      </Head>
      <ScrollToHash />
      <HomePage />
    </>
  )
}

export default Home