"use client";
import React, { useState, useRef, useEffect } from "react";
import DatePickerInput from "@/components/common/inputs/datePicker/DatePickerInput";
import CommonSelect from "@/components/common/inputs/common/CommonSelect";
import CommonButton from "@/components/common/buttons/common/CommonButton";
import { Search, X } from "lucide-react";

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
      {/* Mobile Search Button */}
      <div className="md:hidden flex justify-center mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className={`bg-primary text-secondary p-3 rounded-full ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <span className="flex items-center gap-2">
            <Search size={20} />
            <span>جستجوی پیشرفته</span>
          </span>
        </button>
      </div>

      <div
        ref={searchRef}
        className={`flex justify-between items-center w-full bg-subBg2 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 ${
          isOpen ? "h-auto opacity-100" : "h-0 overflow-hidden md:h-auto"
        } ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className={`md:hidden absolute top-2 left-2 text-gray-500 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <X size={20} />
        </button>

        <div
          className={`flex-1 flex flex-col md:flex-row justify-around gap-4 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <CommonSelect
            label="مقصد نهایی"
            placeholder="انتخاب مقصد"
            selectItems={[
              { value: "kish", label: "کیش" },
              { value: "mashhad", label: "مشهد" },
            ]}
            background="bg-subBg2"
            color="text-foreground"
            classname="w-full md:w-auto"
          />

          <DatePickerInput
            label="تاریخ ورود"
            placeholder="تاریخ ورود"
            background="bg-transparent"
            color="text-foreground"
          />

          <DatePickerInput
            label="تاریخ خروج"
            placeholder="تاریخ خروج"
            background="bg-transparent"
            color="text-foreground"
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
            background="bg-subBg2"
            color="text-foreground"
            classname="w-full md:w-auto"
          />

          <div className="flex items-center justify-center">
            <CommonButton
              title="جستجو کن"
              classname="px-8 py-3 text-sm font-bold h-14 w-full md:w-auto"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
