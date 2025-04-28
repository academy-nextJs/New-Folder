import Image from "next/image";
import React from "react";
import arrow from "../../../assets/arrow.svg";
import villaIcon from "../../../assets/villa.png";

interface Category {
  id: number;
  title: string;
  icon: any;
  isActive?: boolean;
}

const categories: Category[] = [
  { id: 1, title: "آپارتمان", icon: villaIcon },
  { id: 2, title: "ملک ساحلی", icon: villaIcon, isActive: true },
  { id: 3, title: "استخر دار", icon: villaIcon },
  { id: 4, title: "بومگردی", icon: villaIcon },
  { id: 5, title: "ملک کلبه", icon: villaIcon },
  { id: 6, title: "ملک ویلایی", icon: villaIcon },
];

const CardBackgroundSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 213 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M103.688 23.5C108.543 23.5 113.052 20.9839 115.602 16.8515L121.898 6.6485C124.448 2.51609 128.956 0 133.812 0H199C206.732 0 213 6.26801 213 14V75C213 82.732 206.732 89 199 89H14C6.26802 89 0 82.732 0 75V37.5C0 29.768 6.26801 23.5 14 23.5H103.688Z"
      fill="#2E2E2E"
    />
  </svg>
);

const Categories = () => {
  return (
    <div className="min-h-screen text-foreground p-2 sm:p-4">
      {/* عنوان بخش */}
      <div className="flex justify-center items-center gap-2 py-2 sm:py-4 mb-2 sm:mb-4 text-primary">
        <Image
          src={arrow}
          className="w-8 h-8 sm:w-12 sm:h-12 rotate-180"
          alt="arrow"
          width={48}
          height={48}
        />
        <span className="text-sm sm:text-base md:text-lg">
          دسته بندی املاک دلتا
        </span>
        <Image
          src={arrow}
          className="w-8 h-8 sm:w-12 sm:h-12"
          alt="arrow"
          width={48}
          height={48}
        />
      </div>
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        هر ملکی بخوای اینجا پیدا میشه !
      </h1>
      <p className="text-center text-xs sm:text-sm mb-8 sm:mb-12 mx-auto max-w-xl font-sans break-words leading-relaxed">
        با کلیک به روی هر دسته بندی می‌توانید تمام آگهی مربوط به آن را مشاهده
        کنید و به ملک مورد علاقه خود برسید
      </p>
      <div className="flex items-center justify-center gap-4 overflow-x-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative w-40 sm:w-48 h-24 sm:h-28 flex flex-col items-center justify-end rounded-xl shadow-md p-2 cursor-pointer transition-all duration-300 ${
              category.isActive
                ? "bg-[#7FFF00] text-black"
                : "bg-[#2E2E2E] text-white"
            }`}
          >
            <div className="absolute -top-5 w-24 h-14 sm:w-32 sm:h-16">
              <div className="relative w-full h-full">
                <CardBackgroundSVG />
                <div className="absolute inset-0 flex items-center justify-center pt-2">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={28}
                    height={28}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2 text-sm">
              <span>+</span>
              <span>{category.title}</span>
              <span>+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
