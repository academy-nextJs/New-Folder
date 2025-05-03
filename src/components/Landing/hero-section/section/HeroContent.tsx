import { Sparkle } from "lucide-react";
import React from "react";
import LinkButtons from "@/components/common/buttons/common/LinkButtons";

const HeroContent = () => {
  return (
    <>
      {/* متن زیر لوگو */}
      <div className="text-foreground mb-4 md:mb-8 text-center md:text-right">
        <p className="text-sm sm:text-xs md:text-sm mb-1 flex items-center justify-center  gap-2">
          <Sparkle className="w-5 h-5" />
          رزرو، رهن، اجاره و حتی خرید و فروش ملک مورد{" "}
          <br className="md:hidden lg:block" />
          نظرتون مثل آب خوردن فقط در دلتا___________
        </p>
      </div>

      {/* دکمه‌های عمل */}
      <div className="flex  justify-center align-center  gap-2 sm:gap-4 md:gap-8 text-center  md:text-right">
        <LinkButtons variant="default" classname="text-xs md:text-sm lg:text-base w-[80px] md:w-[120px] lg:w-[150px]" link="/" title="آسون رزرو کن" />
        <LinkButtons variant="secondary" classname="text-xs md:text-sm lg:text-base w-[90px] md:w-[130px] lg:w-[160px]" link="/" title="رهن و اجاره ملک" />
      </div>
    </>
  );
};

export default HeroContent;
