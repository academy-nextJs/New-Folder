import React from "react";
import HeroLogoImage from "@/assets/images/heroSection/Group 12.svg";

const HeroLogo = () => {
  return (
    <div className="flex md:items-baseline w-full z-19">
      <img src={HeroLogoImage.src} alt="DELTA Logo" className="w-full h-fit" />
    </div>
  );
};

export default HeroLogo;
