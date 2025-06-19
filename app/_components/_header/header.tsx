"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { useDarkMode } from "@/app/_context/themeContext";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/images/logo_2.png";
import { LuAlignJustify, LuListX } from "react-icons/lu";
import { IconContext } from "react-icons"

const Header = () => {

    const { isDarkMode } = useDarkMode();
    const [isScrolled, setIsScrolled] = useState<Boolean | Number>(false);
    const [mobileMenu, setMobileMenu] = useState<Boolean>(false);
    const [isMounted, setIsMounted] = useState<Boolean>(false);



    // Wait for mount to avoid hydration mismatch
    useEffect(() => {
      setIsMounted(true);
    }, []);


    // listen to scroll behaviour and handle header background
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // check device width and handle mobile menu
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setMobileMenu(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
      <div className={`${styles.headerContainer} }`}>
        <Link href="/" scroll={true}>
          <div className="">
              {isMounted ? (
                <Image
                  src={logo2}
                  alt="Logo"
                  className={styles.logo}
                  priority
                />
              ) : (
                <div className={styles.logoPlaceholder}></div>
              )}
          </div>
        </Link>

        <nav className={`${styles.nav}`}>
          <Link href="/#services" scroll={true} className={styles.navLinks}>
            Our Services
          </Link>
          <Link href="/#about" scroll={true} className={styles.navLinks}>
            About Us
          </Link>
          <Link href="/#faqs" scroll={true} className={styles.navLinks}>
            FAQs
          </Link>
          <Link href="/blog" scroll={true} className={styles.navLinks}>
            Blog
          </Link>
          <Link href="/#contact" scroll={true} className={styles.navLinks}>
            Talk to Us
          </Link>
          {/* <Link href="#">
            <ThemeToggle />
          </Link> */}
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          <IconContext.Provider value={{ className: "text-white text-3xl" }}>
          {mobileMenu ? <LuListX /> : <LuAlignJustify />}
          </IconContext.Provider>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenu ? styles.mobileMenuOpen : ''}`}>
        <div className="container py-4 flex flex-col space-y-4">
          <Link href="/#services" scroll={true} className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            Our Services
          </Link>
          <Link href="/#about"  scroll={true} className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            About Us
          </Link>
          <Link href="/#faqs"  scroll={true} className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            FAQs
          </Link>
          <Link href="/blog"  scroll={true} className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            Blog
          </Link>
          <Link href="/#contact"  scroll={true} className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            Talk to Us
          </Link>
          {/* <div className="pt-4">
            <ThemeToggle />
          </div> */}
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;