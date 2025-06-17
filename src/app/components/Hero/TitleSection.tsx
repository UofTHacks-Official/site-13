"use client";

import { useState } from "react";
import styles from "./LandingPage.module.css";
import axios, { AxiosError } from "axios";

const TitleSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "already-subscribed"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await axios.post("https://staging.uofthacks.com/api/v13/mailing-list", {
        email: email,
      });

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

  return (
    <div className={styles.titleSection}>
      {/* Event details above title */}
      <p className={styles.eventDetails}>January, 2025 | In-person event</p>

      {/* Main title */}
      <h1 className={styles.h1}>UOFTHACKS 13</h1>

      {/* Call-to-action pill below title */}
      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <div className={styles.ctaPill}>
          <div className={styles.ctaPillInner}>
            <input
              type="email"
              placeholder={
                status === "success" || status === "already-subscribed"
                  ? "Submitted!"
                  : "Enter your email"
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
      {status === "error" && (
        <p className={styles.statusError}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default TitleSection;
