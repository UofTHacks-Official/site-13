import StarryBackground from "@/app/components/ui/StarryBackground/StarryBackground";
import Navbar from "@/app/components/Navbar/Navbar";
import TitleSection from "./TitleSection";
import Image from "next/image";

const Hero = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <Navbar />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <TitleSection />
      </div>

      {/* Toronto skyline in bottom left corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          width: "auto",
          height: "300px", // Adjust this to control the size
          pointerEvents: "none", // Allows clicks to pass through
        }}
      >
        <Image
          src="landing-page/toronto_skyline.svg"
          alt="Toronto skyline"
          width={1000}
          height={1000}
          style={{
            width: "auto",
            height: "100%",
            opacity: 0.8, // Slight transparency so it doesn't overpower the content
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 2,
          width: "auto",
          height: "150px", // Adjust this to control the size
          pointerEvents: "none", // Allows clicks to pass through
        }}
      >
        <Image
          src="landing-page/background_mountain.svg"
          alt="background mountain"
          width={1000}
          height={1000}
          style={{
            width: "auto",
            height: "100%",
            opacity: 1.0, // Slight transparency so it doesn't overpower the content
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
