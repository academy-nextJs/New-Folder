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
    <div className="relative w-full h-[901px] sm:h-[565px] md:h-[675px] lg:h-[640px] xl:h-[901px] ">
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
      <div className="absolute bottom-0 left-1/2 lg:left-3/8 md:left-1/2 sm:left-3/8 transform -translate-x-1/4 md: z-40">
        <Image src={building} alt="building" className="object-contain" />
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-20 h-full w-full px-8 py-6 flex flex-col justify-center">
        {/* بخش میانی */}
        <div className="flex flex-col border-2 border-red-500 items-start  mx-auto">
          {/* لوگو */}
          <HeroLogo />
        </div>
        <div className="flex  w-full border-2 border-green-500  justify-between items-center z-30">
          <div className="border-2 flex flex-col justify-center items-end border-red-500 w-[20%] ">
            <InfoIndicator />
          </div>

          <div className="border-2 border-blue-500 w-[30%] ">
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
