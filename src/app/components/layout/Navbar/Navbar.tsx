"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hiddenAtScrollY, setHiddenAtScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && isVisible) {
        setIsVisible(false);
        setHiddenAtScrollY(currentScrollY);
      } else if (
        currentScrollY < lastScrollY &&
        !isVisible &&
        hiddenAtScrollY - currentScrollY > 30
      ) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible, hiddenAtScrollY]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {/* Hover area - only active when navbar is hidden */}
      <div
        className={`${styles.hoverArea} ${
          isVisible ? styles.hoverAreaHidden : ""
        }`}
        onMouseEnter={handleMouseEnter}
      />

      <nav
        className={`${styles.navbar} ${
          isVisible ? styles.visible : styles.hidden
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo on the left */}
        <div className={styles.logoContainer}>
          <Image
            src="/shared/uofthacks_logo.svg"
            alt="UofTHacks Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>

        {/* Social media icons on the right */}
        <div className={styles.socialContainer}>
          {/* LinkedIn */}
          <a
            href="https://ca.linkedin.com/company/uoftorontohacks"
            className={styles.socialLink}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                fill="currentColor"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/uofthacks/?hl=en"
            className={styles.socialLink}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/uofthacks?lang=en"
            className={styles.socialLink}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
