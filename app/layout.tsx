import type { Metadata } from "next";
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
  title: "Ashon Digital Services",
  description: "Web Development Services Provider",
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css, wordpress, typescript',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`relative ${openSans.className}  antialiased`}>
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
