"use client";

import Image from "next/image";

import StarryBackground from "@/app/components/ui/StarryBackground/StarryBackground";
import Navbar from "@/app/components/layout/Navbar/Navbar";

import TitleSection from "./TitleSection";
import { StyledTitleSection, StyledLowerHeroSection } from "./Hero.styles";

const Hero = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* not using styled components here because of hydration issue  */}
      <StarryBackground />
      <Navbar />
      {/* title section */}
      <StyledTitleSection>
        <TitleSection />
      </StyledTitleSection>
      {/* lower hero section */}
      <StyledLowerHeroSection>
        <Image
          src="landing-page/hero_section_lower.svg"
          alt="lower hero section"
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
            transform: "translateY(45%)",
          }}
        />
      </StyledLowerHeroSection>
    </div>
  );
};

export default Hero;
