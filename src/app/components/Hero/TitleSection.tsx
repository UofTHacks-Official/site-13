"use client";

import { useState } from "react";
import styles from "./LandingPage.module.css";
import axios, { AxiosError } from "axios";
import { config } from "@/utils/config";

const TitleSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "already-subscribed"
  >("idle");

  const fontConfigs = [
    { family: "var(--font-onset)", size: "6rem" },
    { family: "var(--font-orbitron)", size: "5.2rem" },
    { family: "var(--font-oooh-baby)", size: "5.8rem" },
    { family: "var(--font-sixtyfour)", size: "4rem" },
    { family: "var(--font-pixelify-sans)", size: "6.8rem" },
  ];
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

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
    setCurrentFontIndex((prev) => (prev + 1) % fontConfigs.length);
  };

  return (
    <div className={styles.titleSection}>
      {/* Event details above title */}
      <p className={styles.eventDetails}>January, 2025 | In-person event</p>

      {/* Fixed height wrapper for title */}
      <div className={styles.titleWrapper}>
        <h1
          className={styles.h1}
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
      <form onSubmit={handleSubmit} style={{ width: "60%" }}>
        <div className={styles.ctaPill}>
          <div className={styles.ctaPillInner}>
            <input
              type="email"
              placeholder={
                status === "success" || status === "already-subscribed"
                  ? "Submitted!"
                  : status === "error" 
                  ? "Something went wrong :(" 
                  : "Sign up with your email for the latest updates!"
              }
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
