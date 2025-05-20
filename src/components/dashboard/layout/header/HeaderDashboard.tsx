'use client'
import { useTheme } from "@/utils/service/TanstakProvider";
import { Bell, ChevronDown, ChevronUp, LogOut, Moon, PlusCircle, Sun } from "lucide-react";
import React, { Fragment, useEffect, useRef } from "react";
import CommonModal from "../../modal/CommonModal";
import { signOut, useSession } from 'next-auth/react'
import { handleLogout } from "@/core/logOut";
import NotifModal from "../../modal/NotifModal";
import { redirect } from "next/navigation";

const HeaderDashboard: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [modalView, setModalView] = React.useState(false);
    const moreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
                setModalView(false);
            }
        }
        if (modalView) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalView])

    const {data: session} = useSession();

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
                    <Bell onClick={() => redirect("/dashboard/notifications")} className="cursor-pointer" />
                    <div className="relative">
                        <div onClick={() => {
                            if(modalView){
                                setModalView(false)
                            }
                            else{
                                setModalView(true)
                            }
                        }} className="flex relative gap-4 items-center cursor-pointer">
                            <img src={session?.user?.image || " "} alt="" className="size-[40px] border-0 outline-none bg-secondary-light rounded-[8px]" />
                            <div className="flex max-md:hidden flex-col justify-between">
                                <h2> امیر محمد ملایی </h2>
                                <span className="text-muted-foreground text-sm"> خریدار </span>
                            </div>
                            {!modalView && <ChevronDown className="cursor-pointer" size={12} />}
                            {modalView && <ChevronUp className="cursor-pointer" size={12} />}
                        </div>
                        {modalView && <div ref={moreRef} className="absolute text-sm p-2 top-full rounded-2xl left-0 bg-subBg shadow-2xl z-50 flex flex-col gap-2 w-max min-w-[160px]">
                            <div className="flex flex-col">
                                <div className="flex border-b gap-2 items-center cursor-pointer hover:bg-subBg2 px-2 py-4"> <PlusCircle size={16} /> شارژ کردن کیف پول </div>
                                <NotifModal />
                                <CommonModal handleClick="خروج" buttonTitle={"   خروج از حساب  "} buttonIcon={<LogOut size={16} />} onClick={handleLogout(signOut, '/login')} title={"  آیا از خروج خود مطمعن هستید?  "} />
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderDashboard;
