import React from "react";
import Image from "next/image";
import Frame from "@/assets/images/heroSection/Frame.svg";

const InfoIndicator = () => {
  return (
    <div className="absolute top-2/4 right-12 text-right flex items-center gap-4">
      <div className="mb-4 text-foreground">
        <p className="text-xl mb-1">بیش از ۷۰۰۰+</p>
        <p className="text-sm">رضایت مشتریانی که به دلتا اعتماد کرده اند</p>
      </div>
      <Image src={Frame} className="relative top-8" alt="Frame" width={45} height={46} />
    </div>
  );
};

export default InfoIndicator;
