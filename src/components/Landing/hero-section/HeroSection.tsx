"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import darkHeroSection from "@/assets/images/heroSection/landingHerosectiondark.png";
import lightHeroSection from "@/assets/images/heroSection/landingHerosectionlight.png";
import building from "@/assets/images/heroSection/building.png";
import HeroLogo from "./section/HeroLogo";
import HeroContent from "./section/HeroContent";
import StatisticSection from "./section/StatisticSection";
import SearchBar from "./section/SearchBar";
import InfoIndicator from "./section/InfoIndicator";
import { motion } from "framer-motion";
import { useTheme } from "@/utils/service/TanstakProvider";

const HeroSection = () => {
  const { theme } = useTheme();
  const [heroSection, setHeroSection] = useState(darkHeroSection);

  useEffect(() => {
    setHeroSection(theme === "dark" ? darkHeroSection : lightHeroSection);
  }, [theme]);

  return (
    <div className="relative w-full h-[400px] sm:h-[465px] md:h-[675px] lg:h-[701px] xl:h-[751px] 2xl:h-[901px] ">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSection}
          alt="hero-section"
          fill
          priority
          className="object-cover"
        />
      </div>

      <motion.div
        initial={{ right: 1000 }}
        whileInView={{ right: 0 }}
        className="absolute bottom-0 left-1/2 lg:left-3/8 md:left-1/2 sm:left-3/8 transform translate-x-1/4 sm:-translate-x-1/4  z-40"
      >
        <Image src={building} alt="building" className="object-contain" />
      </motion.div>

      <div className="relative -top-10 z-20 h-full w-full px-8 py-2 gap-2 flex flex-col justify-center">
        <div className="flex flex-col items-start  mx-auto">
          <HeroLogo />
        </div>
        <div className="flex flex-row-reverse sm:flex-row  w-full justify-between items-center  z-30">
          <InfoIndicator />

          <div className=" flex  flex-col justify-center w-[60%] sm:w-[40%] ">
            <HeroContent />

            <StatisticSection />
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default HeroSection;
