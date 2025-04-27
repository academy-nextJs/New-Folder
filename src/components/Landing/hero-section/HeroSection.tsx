import Image from "next/image";
import React from "react";
import heroSection from "@/assets/images/heroSection/landingHerosection.png";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center w-full h-[901px] ">
      <Image src={heroSection} alt="hero-section" width={1376} height={901} />
    </div>
  );
};

export default HeroSection;
