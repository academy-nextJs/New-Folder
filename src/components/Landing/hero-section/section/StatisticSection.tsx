import { NumberTicker } from "@/components/magicui/number-ticker";
import React from "react";

const StatisticSection = () => {

  return (
    <div className="hidden sm:flex justify-evenly gap-8  mb-8 mt-6 text-foreground">
      <div className="text-center">
        <span className="text-xl sm:text-md font-bold"> + </span>
        <NumberTicker value={8500} className="text-xl sm:text-md font-bold" /> 
        <p className="text-xs"> ملک برای رزرو و رهن و اجاره  </p>
      </div>
      <div className="text-center">
        <span className="text-xl sm:text-md font-bold"> + </span>
        <NumberTicker value={5000} className="text-xl sm:text-md font-bold" /> 
        <p className="text-xs">  منطقه برای رزرو، ویلا و کلبه ها  </p>
      </div>
    </div>
  );
};

export default StatisticSection;
