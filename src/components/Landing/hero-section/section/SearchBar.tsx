"use client";
import React from "react";
import DatePickerInput from "@/components/common/inputs/datePicker/DatePickerInput";
import CommonSelect from "@/components/common/inputs/common/CommonSelect";
import CommonButton from "@/components/common/buttons/common/CommonButton";

const SearchBar = () => {
  return (
    <div className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-5xl z-50">
      <div className="flex justify-between items-center w-full bg-subBg2 backdrop-blur-sm rounded-xl  p-4">
        <div className="flex-1 flex justify-around">
          <CommonSelect
            label="مقصد نهایی"
            placeholder="انتخاب مقصد"
            selectItems={[
              { value: "kish", label: "کیش" },
              { value: "mashhad", label: "مشهد" },
            ]}
            background="bg-subBg2"
            color="text-foreground"
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
          />

          <div className="flex items-center justify-center">
            <CommonButton
              title="جستجو کن"
              classname="px-8 py-3 text-sm font-bold h-14"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
