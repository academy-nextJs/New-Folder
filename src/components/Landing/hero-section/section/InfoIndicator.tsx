import React from "react";
import Image from "next/image";
import Frame from "@/assets/images/heroSection/Frame.svg";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const InfoIndicator = () => {

  return (
    <div className=" text-right flex items-center  ">
      <div className="mb-4 text-white">
        <TypingAnimation className="text-base max-md:text-sm max-sm:text-xs mb-1">  بیش از 7000+  </TypingAnimation>
        <TypingAnimation delay={1500} className="text-sm sm:text-xs"> رضایت مشتریانی که به دلتا اعتماد کرده اند </TypingAnimation>
      </div>
      <Image src={Frame} className="relative top-8" alt="Frame" width={45} height={46} />
    </div>
  );
};

export default InfoIndicator;
