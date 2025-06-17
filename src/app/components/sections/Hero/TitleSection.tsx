"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import axios, { AxiosError } from "axios";
import { config } from "@/utils/config";

const TitleSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "already-subscribed"
  >("idle");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const fontConfigs = [
    { family: "var(--font-onset)", size: "clamp(3rem, 8vw, 6rem)" },
    { family: "var(--font-orbitron)", size: "clamp(2.6rem, 6.5vw, 5.2rem)" },
    { family: "var(--font-oooh-baby)", size: "clamp(2.9rem, 7.25vw, 5.8rem)" },
    { family: "var(--font-sixtyfour)", size: "clamp(2rem, 5vw, 4rem)" },
    {
      family: "var(--font-pixelify-sans)",
      size: "clamp(3.4rem, 8.5vw, 6.8rem)",
    },
  ];
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const getPlaceholderText = () => {
    if (status === "success" || status === "already-subscribed") {
      return "Submitted!";
    }
    if (status === "error") {
      return "Something went wrong :(";
    }
    return isMobile
      ? "Join our mailing list!"
      : "Sign up with your email for the latest updates!";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await axios.post(
        `${config.baseUrl}/api/${config.apiVersion}/mailing-list`,
        {
          email: email,
        }
      );

      setStatus("success");
    } catch (error) {
      if ((error as AxiosError).response?.status === 400) {
        setStatus("already-subscribed");
      } else {
        setStatus("error");
        console.error("Error: ", error);
      }
    } finally {
      setIsSubmitting(false);
      setEmail("");
    }
  };

  const handleTitleClick = () => {
    if (isScrolling) return;
    
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    
    setIsScrolling(true);
    
    setTimeout(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fontConfigs.length);
    }, 200);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 400);
  };

  return (
    <div className={styles.titleSection}>
      {/* Event details above title */}
      <p className={styles.eventDetails}>January, 2025 | In-person event</p>

      {/* Fixed height wrapper for title */}
      <div className={styles.titleWrapper}>
        <h1
          className={`${styles.h1} ${isScrolling ? styles.scrolling : ''} ${hasInteracted ? styles.interacted : ''}`}
          onClick={handleTitleClick}
          style={{
            fontFamily: fontConfigs[currentFontIndex].family,
            fontSize: fontConfigs[currentFontIndex].size,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          UOFTHACKS 13
        </h1>
      </div>

      {/* Call-to-action pill below title */}
      <form onSubmit={handleSubmit} className={styles.ctaForm}>
        <div className={styles.ctaPill}>
          <div className={styles.ctaPillInner}>
            <input
              type="email"
              placeholder={getPlaceholderText()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.ctaInput}
              required
            />
            <button
              type="submit"
              className={styles.ctaButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TitleSection;
