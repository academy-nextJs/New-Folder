'use client'
import React from "react";
import Image from "next/image";
import Frame from "@/assets/images/heroSection/Frame.svg";
import { useTranslation } from "react-i18next";

const InfoIndicator = () => {
  const {t} = useTranslation("landing");

  return (
    <div className=" text-right flex items-center  ">
      <div className="mb-4 text-white">
        <p className="md:text-xl sm:text-xs mb-1"> {t("heroSection.moreCount")} </p>
        <p className="text-sm sm:text-xs"> {t("heroSection.informationText")} </p>
      </div>
      <Image src={Frame} className="relative top-8" alt="Frame" width={45} height={46} />
    </div>
  );
};

export default InfoIndicator;
