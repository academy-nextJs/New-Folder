"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/utils/service/TanstakProvider";
import { Moon, Sun } from "lucide-react";

const MobileNavbarSection = () => {
  const { theme, toggleTheme } = useTheme();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    quickReserve: false,
    rent: false,
  });

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <nav className="flex flex-col w-full space-y-6">
      {/* رزرو سریع */}
      <div className="relative">
        <div
          className="flex items-center justify-between w-full mb-2 cursor-pointer"
          onClick={() => toggleMenu("quickReserve")}
        >
          <span className="text-subText hover:text-primary transition-colors flex items-center gap-1">
            رزرو سریع
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-subText transition-transform duration-300 ${
              openMenus.quickReserve ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`pr-4 flex flex-col space-y-2 mt-2 border-r border-border overflow-hidden transition-all duration-300 ${
            openMenus.quickReserve
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="/quick-reserve/daily"
            className="block text-subText hover:text-primary transition-colors"
          >
            رزرو روزانه
          </Link>
          <Link
            href="/quick-reserve/monthly"
            className="block text-subText hover:text-primary transition-colors"
          >
            رزرو ماهانه
          </Link>
          <Link
            href="/quick-reserve/yearly"
            className="block text-subText hover:text-primary transition-colors"
          >
            رزرو سالانه
          </Link>
        </div>
      </div>

      {/* رهن و اجاره */}
      <div className="relative">
        <div
          className="flex items-center justify-between w-full mb-2 cursor-pointer"
          onClick={() => toggleMenu("rent")}
        >
          <span className="text-subText hover:text-primary transition-colors flex items-center gap-1">
            رهن و اجاره
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 text-subText transition-transform duration-300 ${
              openMenus.rent ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <div
          className={`pr-4 flex flex-col space-y-2 mt-2 border-r border-border overflow-hidden transition-all duration-300 ${
            openMenus.rent ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="/rent/apartment"
            className="block text-subText hover:text-primary transition-colors"
          >
            آپارتمان
          </Link>
          <Link
            href="/rent/villa"
            className="block text-subText hover:text-primary transition-colors"
          >
            ویلا
          </Link>
          <Link
            href="/rent/office"
            className="block text-subText hover:text-primary transition-colors"
          >
            دفتر کار
          </Link>
          <Link
            href="/rent/store"
            className="block text-subText hover:text-primary transition-colors"
          >
            مغازه
          </Link>
        </div>
      </div>

      {/* درباره ما */}
      <div>
        <Link
          href="/about"
          className="text-subText transition-colors hover:text-primary block"
        >
          درباره ما
        </Link>
      </div>

      {/* مقالات ما */}
      <div>
        <Link
          href="/articles"
          className="text-subText transition-colors hover:text-primary block"
        >
          مقالات ما
        </Link>
      </div>

      {/* تماس با ما */}
      <div>
        <Link
          href="/contact"
          className="text-subText transition-colors hover:text-primary block"
        >
          تماس با ما
        </Link>
      </div>

      <div className="flex items-center pt-2">
        <span className="text-foreground ml-3">تغییر تم:</span>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-subBg2 transition-colors"
          aria-label={
            theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
          }
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="pt-4 mt-2 border-t border-border">
        <Link
          href="/become-seller"
          className="bg-accent text-white px-4 py-2 rounded-[10px] hover:opacity-90 transition-opacity flex items-center justify-center"
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
          !فروشنده شو
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbarSection;
