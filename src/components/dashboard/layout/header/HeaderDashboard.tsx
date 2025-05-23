'use client'
import { useTheme } from "@/utils/service/TanstakProvider";
import { Bell, ChevronDown, ChevronUp, LogOut, Moon, PlusCircle, Sun } from "lucide-react";
import React, { Fragment, useEffect, useRef } from "react";
import CommonModal from "../../modal/CommonModal";
import { signOut, useSession } from 'next-auth/react'
import { handleLogout } from "@/core/logOut";
import NotifModal from "../../modal/NotifModal";
import { redirect, usePathname } from "next/navigation";
import { routeSelect } from "../routeSelect";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const HeaderDashboard: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [modalView, setModalView] = React.useState(false);
    const moreRef = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();

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

    const { data: session } = useSession();


    return (
        <Fragment>
            <div className='bg-subBg w-full rounded-[12px] px-8 py-3 flex items-center justify-between'>
                {routeSelect.map(({ label, href }) => {
                    return pathname === href && (
                        <TypingAnimation key={label} className='font-extrabold text-xl'>
                            {label}
                        </TypingAnimation>
                    )
                }
                )}
                <div></div>
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
                            if (modalView) {
                                setModalView(false)
                            }
                            else {
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
                        {modalView && <div
                            ref={moreRef}
                            className="absolute top-full left-0 z-50 min-w-[180px] w-max rounded-xl backdrop-blur-md shadow-xl border border-border text-sm p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-1"
                        >
                            <div className="flex flex-col divide-y divide-border">
                                <div className="flex items-center gap-2 px-3 py-2 hover:bg-muted rounded-md cursor-pointer transition-colors">
                                    <PlusCircle size={16} className="text-primary" />
                                    <span className="text-sm">شارژ کردن کیف پول</span>
                                </div>

                                <NotifModal />
                                
                                <CommonModal
                                    handleClick="خروج"
                                    buttonTitle="خروج از حساب"
                                    buttonIcon={<LogOut size={16} className="text-destructive" />}
                                    onClick={handleLogout(signOut, "/login")}
                                    title="آیا از خروج خود مطمئن هستید؟"
                                />
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderDashboard;
