"use client";
import React, { useState, useRef, useEffect } from "react";
import CommonSelect from "@/components/common/inputs/common/CommonSelect";
import CommonButton from "@/components/common/buttons/common/CommonButton";
import { Coins, MapPin, X } from "lucide-react";
import CommonInput from "@/components/common/inputs/common/CommonInput";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [transactionType, setTransactionType] = useState('')
  const [minArea, setMinArea] = useState('')
  const [maxArea, setMaxArea] = useState('')
  const [location, setLocation] = useState('')
  const router = useRouter();

  const { t, i18n } = useTranslation('landing')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleClick = () => {
    const params = new URLSearchParams();

    if (location) params.set("location", location);
    if (transactionType) params.set("transactionType", transactionType);
    if (minArea) params.set("minArea", minArea);
    if (maxArea) params.set("maxArea", maxArea);

    router.push(`/rent?${params.toString()}`);
  };


  return (
    <div dir={i18n.dir()} className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-5xl z-50 px-4">
      <div
        ref={searchRef}
        className={`flex justify-between items-center w-full bg-subBg backdrop-blur-sm rounded-[32px] p-4 transition-all duration-300 ${isOpen ? "h-auto opacity-100" : "h-0 overflow-visible md:h-auto"
          } ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className={`md:hidden absolute top-2 left-2 text-gray-500 ${isOpen ? "block" : "hidden"
            }`}
        >
          <X size={20} />
        </button>

        <div
          className={`flex-1 flex flex-col md:flex-row items-center justify-around gap-4 ${isOpen ? "block" : "hidden md:flex"
            }`}
        >
          <CommonSelect
            placeholder={t("heroSection.locationPlaceholder")}
            icon={<MapPin size={16} className="text-subText" />}
            onValueChange={(value) => {
              setLocation(value === "all" ? "" : value);
            }}
            selectItems={[
              { label: t("heroSection.allLabel"), value: "all" },
              { label: t("cities.abadan"), value: "abadan" },
              { label: t("cities.arak"), value: "arak" },
              { label: t("cities.urmia"), value: "urmia" },
              { label: t("cities.ardabil"), value: "ardabil" },
              { label: t("cities.isfahan"), value: "isfahan" },
              { label: t("cities.ahvaz"), value: "ahvaz" },
              { label: t("cities.ilam"), value: "ilam" },
              { label: t("cities.bojnord"), value: "bojnord" },
              { label: t("cities.bandarabbas"), value: "bandarabbas" },
              { label: t("cities.bushehr"), value: "bushehr" },
              { label: t("cities.birjand"), value: "birjand" },
              { label: t("cities.tabriz"), value: "tabriz" },
              { label: t("cities.tehran"), value: "tehran" },
              { label: t("cities.khorramabad"), value: "khorramabad" },
              { label: t("cities.rasht"), value: "rasht" },
              { label: t("cities.zahedan"), value: "zahedan" },
              { label: t("cities.zanjan"), value: "zanjan" },
              { label: t("cities.sari"), value: "sari" },
              { label: t("cities.semnan"), value: "semnan" },
              { label: t("cities.sanandaj"), value: "sanandaj" },
              { label: t("cities.shahrekord"), value: "shahrekord" },
              { label: t("cities.shiraz"), value: "shiraz" },
              { label: t("cities.qazvin"), value: "qazvin" },
              { label: t("cities.qom"), value: "qom" },
              { label: t("cities.karaj"), value: "karaj" },
              { label: t("cities.kerman"), value: "kerman" },
              { label: t("cities.kermanshah"), value: "kermanshah" },
              { label: t("cities.gorgan"), value: "gorgan" },
              { label: t("cities.mashhad"), value: "mashhad" },
              { label: t("cities.hamedan"), value: "hamedan" },
              { label: t("cities.yasuj"), value: "yasuj" },
              { label: t("cities.yazd"), value: "yazd" },
            ]}
            color="text-subText dark:group-hover:text-white"
            label={t("heroSection.location")}
            classname="px-4 py-5 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none"
          />

          <CommonSelect
            onValueChange={(value => {
              setTransactionType(value === "all" ? "" : value)
            })}
            placeholder={t("heroSection.transactionTypePlaceholder")}
            icon={<Coins size={16} className='text-subText' />}
            selectItems={[
              { label: t("heroSection.mortgageLabel"), value: 'mortgage' },
              { label: t("heroSection.rentalLabel"), value: 'rental' },
              { label: t("heroSection.direct_purchaseLabel"), value: 'direct_purchase' },
              { label: t("heroSection.allLabel"), value: "all" },
            ]}
            color='text-subText dark:group-hover:text-white'
            label={t("heroSection.transactionType")}
            classname='px-4 py-5 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
          />

          <CommonInput
            onchange={(e) => setMinArea(e.target.value)}
            label={t("heroSection.minArea")}
            classname="px-4 py-2 border-subText w-full outline-none"
            color="text-subText placeholder:text-subText"
            placeholder={t("heroSection.minAreaPlaceholder")}
            type="number"
          />

          <CommonInput
            onchange={(e) => setMaxArea(e.target.value)}
            label={t("heroSection.maxArea")}
            classname="px-4 py-2 border-subText w-full outline-none"
            color="text-subText placeholder:text-subText"
            placeholder={t("heroSection.maxAreaPlaceholder")}
            type="number"
          />

          <CommonButton
            onclick={handleClick}
            title={t("heroSection.search")}
            classname="px-8 py-7 text-sm font-bold text-primary-foreground"
            type="button"
          />

        </div>
      </div>
    </div>
  );
};

export default SearchBar;
