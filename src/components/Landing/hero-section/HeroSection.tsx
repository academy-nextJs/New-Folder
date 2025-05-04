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
    <div className="relative w-full h-[500px] sm:h-[565px] md:h-[775px] lg:h-[901px] xl:h-[901px] 2xl:h-[901px] ">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSection}
          alt="hero-section"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* تصویر ساختمان */}
      <motion.div
        initial={{ right: 1000 }}
        whileInView={{ right: 0 }}
        className="absolute bottom-0 left-1/2 lg:left-3/8 md:left-1/2 sm:left-3/8 transform -translate-x-1/4 md: z-40"
      >
        <Image src={building} alt="building" className="object-contain" />
      </motion.div>

      {/* محتوای اصلی */}
      <div className="relative -top-10 z-20 h-full w-full px-8 py-6 gap-8 flex flex-col justify-center">
        {/* بخش میانی */}
        <div className="flex flex-col items-start  mx-auto">
          {/* لوگو */}
          <HeroLogo />
        </div>
        <div className="flex  w-full  justify-between items-center z-30">
          <div className=" flex flex-col justify-center items-end border-red-500 w-[25%] ">
            <InfoIndicator />
          </div>

          <div className=" gap-10 w-[40%] ">
            {/* متن و دکمه‌ها */}
            <HeroContent />

            {/* آمار */}
            <StatisticSection />
          </div>
        </div>
      </div>
      {/* نوار جستجو پایین */}
      <SearchBar />
    </div>
  );
};

export default HeroSection;
