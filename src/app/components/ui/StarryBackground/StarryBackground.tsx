"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./StarryBackground.module.css";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  animationDuration: string;
  animationDelay: string;
}

const StarryBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [starsOpacity, setStarsOpacity] = useState(1);
  const [glowOpacity, setGlowOpacity] = useState(0);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 80;
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 3 + 2,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 5}s`,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const fadeStart = windowHeight * 0.3;
      const fadeEnd = windowHeight * 0.8;

      if (scrollY <= fadeStart) {
        setStarsOpacity(1);
        setGlowOpacity(0);
      } else if (scrollY >= fadeEnd) {
        setStarsOpacity(0);
        setGlowOpacity(1);
      } else {
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        setStarsOpacity(1 - fadeProgress);
        setGlowOpacity(fadeProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.starryBackground}>
      {/* Sky glow */}
      <Image
        src="/landing-page/sky_glow.svg"
        alt="sky glow"
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translateY(-30%)",
          width: "100%",
          height: "auto",
          pointerEvents: "none",
          opacity: starsOpacity,
          transition: "opacity 0.3s ease-out",
        }}
      />

      {/* FAQ Background */}
      <Image
        src="/landing-page/faq_background.svg"
        alt="FAQ background"
        width={1000}
        height={1000}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          opacity: glowOpacity,
          transition: "opacity 0.3s ease-out",
        }}
      />

      {/* Stars */}
      <div
        style={{ opacity: starsOpacity, transition: "opacity 0.3s ease-out" }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className={styles.star}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: star.animationDuration,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarryBackground;
