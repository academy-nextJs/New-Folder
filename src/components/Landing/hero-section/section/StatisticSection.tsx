'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const StatisticSection = () => {
  const {t} = useTranslation("landing")

  return (
    <div className="hidden sm:flex justify-evenly gap-8  mb-8 mt-6 text-white">
      <div className="text-center">
        <p className="text-xl sm:text-md font-bold">{t("heroSection.moreCount2")}</p>
        <p className="text-xs"> {t("heroSection.informationText2")} </p>
      </div>
      <div className="text-center">
        <p className="text-xl sm:text-md font-bold"> {t("heroSection.moreCount3")} </p>
        <p className="text-xs"> {t("heroSection.informationText3")} </p>
      </div>
    </div>
  );
};

export default StatisticSection;
