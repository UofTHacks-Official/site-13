"use client";

import styles from "./LandingPage.module.css";

const TitleSection = () => {
  return (
    <div className={styles.titleSection}>
      {/* Event details above title */}
      <p className={styles.eventDetails}>January, 2025 | In-person event</p>
      
      {/* Main title */}
      <h1 className={styles.h1}>UOFTHACKS 13</h1>
      
      {/* Call-to-action pill below title */}
      <div className={styles.ctaPill}>
        <div className={styles.ctaPillInner}>
          <span className={styles.ctaText}>Be the first to find out about our hackathon</span>
          <button className={styles.ctaButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
