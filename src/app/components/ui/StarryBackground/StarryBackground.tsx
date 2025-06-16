"use client";

import { useEffect, useState } from "react";
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

  return (
    <div className={styles.starryBackground}>
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
  );
};

export default StarryBackground;
