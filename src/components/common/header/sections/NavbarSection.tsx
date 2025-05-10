"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const NavbarSection = () => {
  const {t} = useTranslation("header")
  return (
    <nav className="flex items-center justify-center lg:gap-6 md:gap-3 text-[14px] lg:text-[16px] md:text-[12px] h-full relative">
      {/* رزرو سریع */}
      <div className="group flex items-center h-full relative">
        <Link
          href="/reserve/reserve-house"
          className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
        >
          {t("navbarSection.quickReservation")}
        </Link>
        <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
      </div>
      {/* رهن و اجاره */}
      <div className="relative group flex items-center h-full">
        <Link
          href="/rent"
          className="text-subText transition-colors flex items-center lg:gap-1 pb-1 h-full group-hover:text-primary"
        >
          {t("navbarSection.rent")}
          {/* بردر پایین */}
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
        </Link>
      </div>

      {/* درباره ما */}
      <div className="group flex items-center h-full relative">
        <Link
          href="/about"
          className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
        >
          {t("navbarSection.about")}
          {/* بردر پایین */}
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
        </Link>
      </div>
      {/* مقالات ما */}
      <div className="group flex items-center h-full relative">
        <Link
          href="/articles"
          className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
        >
          {t("navbarSection.articles")}
          {/* بردر پایین */}
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
        </Link>
      </div>
      {/* تماس با ما */}
      <div className="group flex items-center h-full relative">
        <Link
          href="/contact"
          className="flex items-center h-full text-subText transition-colors pb-1 group-hover:text-primary"
        >
          {t("navbarSection.contact")}
          {/* بردر پایین */}
          <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom group-hover:origin-bottom z-20"></span>
        </Link>
      </div>
      <Link
        href="/become-seller"
        className="bg-accent hidden text-[#f2f2f2] lg:w-[138px] h-[80%] px-4 py-1.5 rounded-[10px] hover:opacity-90 transition-opacity lg:flex items-center justify-center lg:text-[14px] md:text-[12px] md:px-3 md:py-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5 ml-1"
        >
          <path d="M2 10V7a2 2 0 012-2h2.382a2 2 0 001.447-.618l2.382-2.618A1 1 0 0112 3v14a1 1 0 01-1.789.707l-2.382-2.618A2 2 0 016.382 15H4a2 2 0 01-2-2v-3z" />
          <path d="M15 8v4" strokeLinecap="round" />
          <path d="M17 9v2" strokeLinecap="round" />
        </svg>
        {t("navbarSection.seller")}
      </Link>
    </nav>
  );
};

export default NavbarSection;
