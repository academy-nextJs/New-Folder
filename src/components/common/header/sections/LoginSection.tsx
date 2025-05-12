"use client";
import { User, LogOut, LayoutDashboard, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/utils/zustand/store";
import { useTheme } from "@/utils/service/TanstakProvider";
import { motion } from "framer-motion";
// import ChangeLanguage from "./ChangeLanguage";

const LoginSection = () => {
  const { isLoggedIn, logout, checkAuthStatus } = useUserStore();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  return (
    <div className="flex items-center justify-end gap-3 text-[10px] lg:text-[16px] md:text-[11px] ml-7">
      {/* <ChangeLanguage /> */}
      <motion.button
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        exit={{ rotate: -360, scale: 0 }}
        transition={{ duration: 0.5 }}
        onClick={toggleTheme}
        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-subBg2 transition-colors"
        aria-label={theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-subText hover:text-primary" />
        ) : (
          <Moon className="w-5 h-5 text-subText hover:text-primary" />
        )}
      </motion.button>

      {!isLoggedIn ? (
        <Link
          href="/login"
          className="text-subText hover:text-primary transition-colors flex items-center gap-1"
        >
          <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-4 lg:w-6 lg:h-6" />
          <span> ورود / ثبت نام </span>
        </Link>
      ) : (
        <div className="relative group" ref={dropdownRef}>
          <div className="flex items-center gap-2 px-3 py-2 rounded-2lg hover:bg-subBg text-foreground cursor-pointer transition-colors rounded-full">
            <User className="text-subText w-6 h-6" />
          </div>

          <div className="absolute top-full left-0 mt-1 w-36 sm:w-44 md:w-48 lg:w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <div className="bg-secondary border border-border rounded-md shadow-lg py-1 text-right">
              <Link
                href="/dashboard"
                className="block px-2 sm:px-3 md:px-4 py-2 md:py-3 text-[10px] sm:text-xs md:text-sm text-foreground hover:bg-subBg transition-colors flex items-center gap-1 sm:gap-2"
              >
                <LayoutDashboard
                  size={14}
                  className="text-primary sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
                <span> ورود به حساب کاربری </span>
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 text-[10px] sm:text-xs md:text-sm text-foreground hover:bg-subBg transition-colors flex items-center gap-1 sm:gap-2"
              >
                <LogOut
                  size={14}
                  className="text-danger sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
                <span> خروج از حساب </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSection;
