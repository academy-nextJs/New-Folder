import { Sparkle } from "lucide-react";
import React from "react";
import LinkButtons from "@/components/common/buttons/common/LinkButtons";

const HeroContent = () => {
  return (
    <>
      {/* متن زیر لوگو */}
      <div className="text-foreground mb-8 text-right">
        <p className="text-lg mb-1 flex items-center gap-2">
          {" "}
          <Sparkle />
          رزرو، رهن، اجاره و حتی خرید و فروش ملک مورد
        </p>
        <p className="text-lg text-foreground">
          نظرتون مثل آب خوردن فقط در دلتا ________________{" "}
        </p>
      </div>

      {/* دکمه‌های عمل */}
      <div className="flex gap-4 mb-12 text-right">
        <LinkButtons variant="default" link="/" title="آسون رزرو کن" />
        <LinkButtons variant="secondary" link="/" title="رهن و اجاره ملک" />
      </div>
    </>
  );
};

export default HeroContent;
