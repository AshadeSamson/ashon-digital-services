import type { Metadata } from "next";
import Script from "next/script";
import { Open_Sans } from "next/font/google";
import Header from "./_components/_header/header";
import Footer from "./_components/_footer/footer";
import WhatsAppButton from "./_components/_whatsAppBtn/whatsappBtn";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `Top Website Designer & Developer ${new Date().getFullYear()} | Ashon Digital Services`,
  description: "Best website design and development services in Nigeria. We build stunning websites that help businesses grow online. From landing pages to full web apps, we deliver clean, modern, high-converting designs",
  keywords: [
    'web development', 'web design', 'javascript', 'react.js', 'next js', 'html', 'css', 'wordpress', 'typescript', 'digital agency', 'website design', 'website development', 'responsive design', 'e-commerce', 'SEO', 'custom websites', 'web applications', 'frontend development', 'backend development', 'full-stack development', 'ashondigitals.site'],
    openGraph: {
    title: 'Ashon Digital Services',
    description: 'Smart, stunning websites for your business growth.',
    url: 'https://ashondigitals.site',
    siteName: 'Ashon Digital Services',
    images: [
      {
        url: 'https://ashondigitals.site/public/images/logo_2.png',
        width: 913,
        height: 227,
        alt: 'Ashon Digital Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ashonservices',
    title: 'Ashon Digital Services',
    description: 'Smart, stunning websites for your business growth.',
    images: ['https://ashondigitals.site/public/images/logo_2.png'],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const trackingID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

  
  return (
    <html lang="en">
      <body className={`relative ${openSans.className}  antialiased`}>
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${trackingID}`}
            />
            <Script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${trackingID}');
                  `,
                }}
            />
          <Header />
          <main>
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </body>
    </html>
  );
}
