import Image from "next/image";
import React from "react";
import heroSection from "@/assets/images/heroSection/landingHerosection.png";
import building from "@/assets/images/heroSection/building.png";
import HeroLogo from "./section/HeroLogo";
import HeroContent from "./section/HeroContent";
import StatisticSection from "./section/StatisticSection";
import SearchBar from "./section/SearchBar";
import InfoIndicator from "./section/InfoIndicator";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[901px] ">
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
      <div className="absolute bottom-0 left-3/8 transform -translate-x-1/4 z-40">
        <Image src={building} alt="building" className="object-contain" />
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-20 h-full w-full px-8 py-6 flex flex-col">
        {/* بخش میانی */}
        <div className="flex flex-col items-start h-full max-w-5xl mx-auto">
          {/* لوگو */}
          <HeroLogo />
        </div>
        <div className="matnOAmar absolute left-0 top-1/2 transform -translate-y-2/2 translate-x-1/4 z-30">
          {/* متن و دکمه‌ها */}
          <HeroContent />

          {/* آمار */}
          <StatisticSection />
        </div>

        {/* متن و نماد سمت راست */}
        <InfoIndicator />
      </div>
      {/* نوار جستجو پایین */}
      <SearchBar />
    </div>
  );
};

export default HeroSection;
