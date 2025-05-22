import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "./_context/themeContext";
import Header from "./_components/_header/header";
import "./globals.css";

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
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
        <ThemeProvider>
          <Header />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
