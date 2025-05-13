import { Sparkle } from "lucide-react";
import React from "react";
import LinkButtons from "@/components/common/buttons/common/LinkButtons";

const HeroContent = () => {

  return (
    <div className="text-foreground">
      <div className="mb-4 md:mb-8 text-center md:text-right">
        <p className="text-sm sm:text-xs md:text-sm mb-1 flex items-center justify-center  gap-2">
          <Sparkle className="w-5 h-5" />
           رزرو، رهن، اجاره و حتی خرید و فروش ملک مورد 
          <br className="md:hidden lg:block" />
           نظرتون مثل آب خوردن فقط در دلتا___________ 
        </p>
      </div>

      <div className="flex  justify-center align-center  gap-2 sm:gap-4 md:gap-8 text-center  md:text-right">
        <LinkButtons variant="scale" classname="bg-primary-foreground text-secondary-static text-xs md:text-sm lg:text-base w-fit" link="/reserve/reserve-house" title="آسون رزرو کن" />
        <LinkButtons variant="scale" classname="bg-secondary-static text-primary-foreground text-xs md:text-sm lg:text-base w-fit" link="/rent" title="رهن و اجاره ملک" />
      </div>
    </div>
  );
};

export default HeroContent;
