import React from "react";

const HeroContent = () => {
  return (
    <>
      {/* متن زیر لوگو */}
      <div className="text-foreground mb-8 text-right">
        <p className="text-lg mb-1">خرید، رهن، اجاره و فروش ملک خود</p>
        <p className="text-sm text-muted">
          بهترین آپارتمان و خانه را با ما پیدا کنید
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
