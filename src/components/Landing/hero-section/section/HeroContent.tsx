import { Sparkle } from "lucide-react";
import React from "react";

const HeroContent = () => {
  return (
    <>
      {/* متن زیر لوگو */}
      <div className="text-foreground mb-8 text-right">
        <p className="text-lg mb-1 flex items-center gap-2">
          {" "}
          <Sparkle />
          رزرو، رهن، اجاره و حتی خرید و قروش ملک مورد
        </p>
        <p className="text-lg text-foreground">
          نظرتون مثل آب خوردن فقط در دلتا _____________{" "}
        </p>
      </div>

      {/* دکمه‌های عمل */}
      <div className="flex gap-4 mb-12 text-right">
        <button className="bg-primary text-secondary px-6 py-2 rounded-xl text-sm font-bold">
          بیشتر بدانید
        </button>
        <button className="bg-transparent border border-foreground text-foreground px-6 py-2 rounded-xl text-sm">
          استعلام قیمت
        </button>
      </div>
    </>
  );
};

export default HeroContent;
