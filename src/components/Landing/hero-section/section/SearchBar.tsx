"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePickerInput from "@/components/common/inputs/datePicker/DatePickerInput";
import CommonSelect from "@/components/common/inputs/common/CommonSelect";
import CommonButton from "@/components/common/buttons/common/CommonButton";
import { BookIcon, X } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-5xl z-50 px-4">

      <div className="md:flex hidden gap-2 text-base text-foreground mb-2">
        <label htmlFor="i1" className="flex gap-2 items-center flex-row-reverse cursor-pointer hover:text-primary hover:underline"> رزرو ملک <BookIcon size={16} /> </label>
      </div>
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
            label="مقصد نهایی"
            placeholder="انتخاب مقصد"
            selectItems={[
              { value: "kish", label: "کیش" },
              { value: "mashhad", label: "مشهد" },
            ]}
            background="bg-subBg"
            color="text-foreground"
            classname="w-full md:w-auto px-6 py-5 border-subText"
          />

          <DatePickerInput
            label="تاریخ ورود"
            background="bg-transparent"
            color="text-foreground"
            className="px-4 py-2 border-subText"
          />

          <DatePickerInput
            label="تاریخ خروج"
            background="bg-transparent"
            color="text-foreground"
            className="placeholder:text-subText border-subText"
          />

          <CommonSelect
            label="تعداد نفرات"
            placeholder="تعداد نفرات"
            selectItems={[
              { value: "1", label: "1 نفر" },
              { value: "2", label: "2 نفر" },
              { value: "3", label: "3 نفر" },
              { value: "4", label: "4 نفر" },
            ]}
            background="bg-subBg"
            color="text-foreground"
            classname="w-full md:w-auto px-6 py-5 border-subText"
          />

          <CommonButton
            title="جستجو کن"
            classname="px-8 py-7 text-sm font-bold text-primary-foreground"
            type="button"
          />

        </div>
      </div>
    </div>
  );
};

export default SearchBar;
