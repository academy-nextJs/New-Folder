'use client'
import { useTheme } from "@/utils/service/TanstakProvider";
import { Bell, ChevronDown, Moon, Sun } from "lucide-react";
import React, { Fragment } from "react";

const HeaderDashboard: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Fragment>
            <div className='bg-subBg w-full rounded-[12px] px-8 py-3 flex items-center justify-between'>
                <h2 className='font-extrabold text-xl'> داشبورد </h2>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-subBg2 transition-colors"
                        aria-label={theme === "dark" ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
                    >
                        {theme === "dark" ? (
                            <Sun className="w-5 h-5 text-subText hover:text-primary" />
                        ) : (
                            <Moon className="w-5 h-5 text-subText hover:text-primary" />
                        )}
                    </button>
                    <Bell className="cursor-pointer" />
                    <div className="flex gap-4 items-center cursor-pointer">
                        <img src={' '} alt="" className="size-[40px] border-0 outline-none bg-secondary-light rounded-[8px]" />
                        <div className="flex max-md:hidden flex-col justify-between">
                            <h2> امیر محمد ملایی </h2>
                            <span className="text-muted-foreground text-sm"> خریدار </span>
                        </div>
                        <ChevronDown className="max-md:hidden" size={12} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderDashboard;
