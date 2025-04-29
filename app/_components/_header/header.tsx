"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { ThemeToggle } from "../_themeToggle/themeToggle"
import { useDarkMode } from "@/app/_context/themeContext";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
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
    <header className={`${styles.header} ${isScrolled ? 'bg-background' : 'bg-transparent'}`}>
      <div className="container">
      <div className={`${styles.headerContainer} }`}>
        <Link href="#" >
          <div className="">
              {isMounted ? (
                <Image
                  src={isDarkMode ? logo2 : logo}
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
          <Link href="#" className={styles.navLinks}>
            Our Services
          </Link>
          <Link href="#" className={styles.navLinks}>
            FAQs
          </Link>
          <Link href="#" className={styles.navLinks}>
            Talk to Us
          </Link>
          <Link href="#">
            <ThemeToggle />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          <IconContext.Provider value={{ className: "text-foreground text-3xl" }}>
          {mobileMenu ? <LuListX /> : <LuAlignJustify />}
          </IconContext.Provider>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenu ? styles.mobileMenuOpen : ''}`}>
        <div className="container py-4 flex flex-col space-y-4">
          <Link href="#" className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            Our Services
          </Link>
          <Link href="#" className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            FAQs
          </Link>
          <Link href="#" className={styles.mobileNavLink} onClick={() => setMobileMenu(false)}>
            Talk to Us
          </Link>
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;