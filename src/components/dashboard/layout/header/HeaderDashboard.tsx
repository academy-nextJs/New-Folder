"use client";
import { useTheme } from "@/utils/service/TanstakProvider";
import { Bell, ChevronDown, LogOut, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { useUserStore } from "@/utils/zustand/store";

const HeaderDashboard: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const { logout } = useUserStore();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <Fragment>
      <div className="bg-subBg w-full rounded-[12px] px-8 py-3 flex items-center justify-between">
        <h2 className="font-extrabold text-xl"> داشبورد </h2>
        <div className="flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-subBg2 transition-colors"
            aria-label={
              theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"
            }
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-subText hover:text-primary" />
            ) : (
              <Moon className="w-5 h-5 text-subText hover:text-primary" />
            )}
          </button>
          <Bell className="cursor-pointer" />
          <div className="relative group">
            <div className="flex relative gap-4 items-center cursor-pointer">
              <img
                src={" "}
                alt=""
                className="size-[40px] border-0 outline-none bg-secondary-light rounded-[8px]"
              />
              <div className="flex max-md:hidden flex-col justify-between">
                <h2> امیر محمد ملایی </h2>
                <span className="text-muted-foreground text-sm"> خریدار </span>
              </div>
              <ChevronDown className="max-md:hidden" size={12} />
            </div>
            <div className="absolute text-sm px-2 py-2 top-full opacity-0 group-hover:opacity-100 left-0 bg-subBg shadow-xl rounded-lg z-50 flex flex-col gap-2 w-max min-w-[160px]">
              <div className="flex flex-col gap-2">
                <div
                  onClick={handleLogout}
                  className="flex gap-2 text-danger items-center cursor-pointer hover:bg-subBg2 rounded-[12px] px-2 py-2"
                >
                  {" "}
                  <LogOut size={16} /> خروج از حساب{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderDashboard;
