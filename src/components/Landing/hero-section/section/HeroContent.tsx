'use client'
import { Sparkle } from "lucide-react";
import React from "react";
import LinkButtons from "@/components/common/buttons/common/LinkButtons";
import { useTranslation } from "react-i18next";

const HeroContent = () => {
  const {t} = useTranslation("landing")

  return (
    <div className="text-white">
      {/* متن زیر لوگو */}
      <div className="mb-4 md:mb-8 text-center md:text-right">
        <p className="text-sm sm:text-xs md:text-sm mb-1 flex items-center justify-center  gap-2">
          <Sparkle className="w-5 h-5" />
          {t("heroSection.slogan")}
          <br className="md:hidden lg:block" />
          {t("heroSection.slogan2")}
        </p>
      </div>

      {/* دکمه‌های عمل */}
      <div className="flex  justify-center align-center  gap-2 sm:gap-4 md:gap-8 text-center  md:text-right">
        <LinkButtons variant="scale" classname="bg-primary-foreground text-secondary-static text-xs md:text-sm lg:text-base w-fit" link="/" title={t("heroSection.reserveButton")} />
        <LinkButtons variant="scale" classname="bg-secondary-static text-primary-foreground text-xs md:text-sm lg:text-base w-fit" link="/" title={t("heroSection.rentButton")} />
      </div>
    </div>
  );
};

export default HeroContent;
