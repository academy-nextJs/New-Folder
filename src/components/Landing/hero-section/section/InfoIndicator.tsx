import React from "react";
import Image from "next/image";
import Frame from "@/assets/images/heroSection/Frame.svg";
import {useTranslations} from 'next-intl';

const InfoIndicator = () => {

  const t = useTranslations('landing.heroSection');

  return (
    <div dir={} className=" text-right flex items-center  ">
      <div className="mb-4 text-white flex flex-col">
        <span className="text-base max-md:text-sm max-sm:text-xs mb-1">  {t("infoNumb")} </span>
        <span className="text-sm sm:text-xs min-w-[100px]"> {t("info")}  </span>
      </div>
      <Image src={Frame} className="relative top-8" alt="Frame" width={45} height={46} />
    </div>
  );
};

export default InfoIndicator;
