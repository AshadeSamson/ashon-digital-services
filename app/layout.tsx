import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "./context/themeContext";
import { ThemeToggle } from "./components/themeToggle/themeToggle";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Ashon Digital Services",
  description: "Web & Software Development Services Provider",
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
      <body className={`${poppins.className}  antialiased`}>
        <ThemeProvider>
          <header>
            <ThemeToggle />
          </header>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
