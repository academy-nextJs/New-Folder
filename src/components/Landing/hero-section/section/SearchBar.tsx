"use client";
import React, { useState, useRef, useEffect } from "react";
import CommonSelect from "@/components/common/inputs/common/CommonSelect";
import CommonButton from "@/components/common/buttons/common/CommonButton";
import { Coins, Search, X } from "lucide-react";
import CommonInput from "@/components/common/inputs/common/CommonInput";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import CitySelectPopover from "@/components/common/inputs/common/CitySelectPopovar";

export const selectItems = [
  { label: "همه", value: "همه" },
  { label: "آبادان", value: "آبادان" },
  { label: "اراک", value: "اراک" },
  { label: "ارومیه", value: "ارومیه" },
  { label: "اردبیل", value: "اردبیل" },
  { label: "اصفهان", value: "اصفهان" },
  { label: "اهواز", value: "اهواز" },
  { label: "ایلام", value: "ایلام" },
  { label: "بجنورد", value: "بجنورد" },
  { label: "بندرعباس", value: "بندرعباس" },
  { label: "بوشهر", value: "بوشهر" },
  { label: "بیرجند", value: "بیرجند" },
  { label: "تبریز", value: "تبریز" },
  { label: "تهران", value: "تهران" },
  { label: "خرم‌آباد", value: "خرم‌آباد" },
  { label: "رشت", value: "رشت" },
  { label: "زاهدان", value: "زاهدان" },
  { label: "زنجان", value: "زنجان" },
  { label: "ساری", value: "ساری" },
  { label: "سمنان", value: "سمنان" },
  { label: "سنندج", value: "سنندج" },
  { label: "شهرکرد", value: "شهرکرد" },
  { label: "شیراز", value: "شیراز" },
  { label: "قزوین", value: "قزوین" },
  { label: "قم", value: "قم" },
  { label: "کرج", value: "کرج" },
  { label: "کرمان", value: "کرمان" },
  { label: "کرمانشاه", value: "کرمانشاه" },
  { label: "گرگان", value: "گرگان" },
  { label: "مشهد", value: "مشهد" },
  { label: "همدان", value: "همدان" },
  { label: "یاسوج", value: "یاسوج" },
  { label: "یزد", value: "یزد" },
]

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [transactionType, setTransactionType] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const [value, setValue] = React.useState("")

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
    <div className="absolute -bottom-2 lg:bottom-8 md:bottom-2 left-0 right-0 mx-auto w-full max-w-5xl z-50 px-4">
      {/* Mobile Search Button */}
      <div className="md:hidden flex justify-center mt-10 items-center gap-2 ">
        <CommonButton
          onclick={() => setIsOpen(true)}
          title="جستجوی پیشرفته"
          classname={`bg-primary text-secondary p-2 text-xs rounded-xl ${isOpen ? "hidden" : "flex"
            }`}
          type="button"
          icon={<Search size={12} />}
        />
      </div>
      <div
        ref={searchRef}
        className={`flex justify-between items-center w-full bg-subBg backdrop-blur-sm rounded-[32px] p-4 transition-all duration-300 ${isOpen ? "h-auto opacity-100" : "h-0 overflow-visible md:h-auto"
          } ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`md:hidden absolute top-2 left-2 text-subText ${isOpen ? "block" : "hidden"
            }`}
        >
          <X size={20} />
        </button>

        <div
          className={`flex-1 flex flex-col md:flex-row items-center justify-around gap-4 w-full ${isOpen ? "block" : "hidden md:flex"
            }`}
        >

          <div className="w-fill md-w-auto flex-col flex gap-1">
            <Label className={`text-[13px] flex gap-0.5 text-subText`}>
              <span> مقصد مورد نظر شما </span>
              <span> : </span>
            </Label>
            <CitySelectPopover
              value={value}
              onChange={(val) => {
                setValue(val);
                setLocation(val === "همه" ? "" : val);
              }}
              items={selectItems}
              placeholder="استان یا شهر را انتخاب کنید"
            />
          </div>


        <div className="w-full md:w-auto">
          <CommonSelect
            onValueChange={(value) => {
              setTransactionType(value === "all" ? "" : value);
            }}
            placeholder="رهن و اجاره"
            icon={<Coins size={16} className="text-subText" />}
            selectItems={[
              { label: "رهن", value: "mortgage" },
              { label: "اجاره", value: "rental" },
              { label: "خرید", value: "direct_purchase" },
              { label: "همه", value: "all" },
            ]}
            color="text-subText"
            label={"نوع ملک"}
            classname="px-4 py-5 border-subText w-full"
          />
        </div>

        <div className="w-full md:w-auto">
          <CommonInput
            onchange={(e) => setMinArea(e.target.value)}
            label="حداقل متراژ"
            classname="px-4 py-2 border-subText w-full outline-none"
            color="text-subText placeholder:text-subText"
            placeholder=" 0 متر "
            type="number"
          />
        </div>

        <div className="w-full md:w-auto">
          <CommonInput
            onchange={(e) => setMaxArea(e.target.value)}
            label="حداکثر متراژ"
            classname="px-4 py-2 border-subText w-full outline-none"
            color="text-subText placeholder:text-subText"
            placeholder=" 0 متر "
            type="number"
          />
        </div>

        <div className="w-full md:w-auto">
          <CommonButton
            onclick={handleClick}
            title="جستجو کن"
            classname="px-8 py-7 text-sm font-bold text-primary-foreground w-full"
            type="button"
          />
        </div>
      </div>
    </div>
    </div >
  );
};

export default SearchBar;
