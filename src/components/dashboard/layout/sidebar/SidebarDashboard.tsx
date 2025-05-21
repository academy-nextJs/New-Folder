"use client";

import {
  LogOut,
  LogIn,
  ChevronDown,
  PlusCircle,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PaymentsModal from "../../modal/PaymentsModal";
import { footerSidebarSelect, routeSelect } from "../routeSelect";
import MobileSidebar from "./MobileSidebar";
import TabletSidebar from "./TabletSidebar";

const SidebarDashboard = ({
  view,
  setView,
}: {
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const pathname = usePathname();
  const moreRef = useRef<HTMLDivElement | null>(null);
  const Icon = footerSidebarSelect.icon;
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 1200) {
        setView(2);
      }
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [setView]);

  return (
    <>
      <div
        className={`bg-subBg md:flex hidden transition-all duration-300 ease-in-out px-4 border py-8 gap-8 rounded-xl w-fit flex-col shadow-md ${view === 1
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none absolute"
          }`}
      >
        <div className="flex justify-between items-center mb-6 min-w-[200px]">
          <Link href={"/"} className="text-2xl font-bold">
            دلتا
          </Link>
          <LogOut
            onClick={() => setView(2)}
            className="cursor-pointer hover:text-accent transition-colors"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            {routeSelect.map(({ label, href, icon: Icon, children }) => {
              const isActive = pathname === href;
              const isDropdownOpen = openDropdown === href;

              const handleClick = (e: React.MouseEvent) => {
                if (children) {
                  e.preventDefault();
                  setOpenDropdown((prev) => (prev === href ? null : href));
                }
              };

              return (
                <div key={href} className="flex flex-col">
                  <Link
                    href={href}
                    onClick={handleClick}
                    className={`whitespace-nowrap flex justify-between items-center px-3 py-2 rounded-lg font-medium transition-colors ${isActive
                        ? "dark:bg-accent dark:text-accent-foreground bg-subBg2"
                        : "hover:bg-subBg2 bg-none"
                      }`}
                  >
                    <div className="flex gap-2">
                      <Icon className="min-w-5 min-h-5 h-5 w-5" />
                      <span>{label}</span>
                    </div>
                    {children && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </Link>

                  {isDropdownOpen && children && (
                    <div className="pr-2 flex flex-col gap-2 mt-1">
                      {children?.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={href}
                            href={href}
                            className={`whitespace-nowrap flex justify-between items-center px-3 py-2 rounded-lg font-medium transition-colors ${isActive
                                ? "dark:bg-accent dark:text-accent-foreground bg-subBg2"
                                : "hover:bg-subBg2 bg-none"
                              }`}
                          >
                            <div className="flex gap-2">
                              <Icon className="min-w-5 min-h-5 h-5 w-5" />
                              <span>{label}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="relative">
            <div
              onClick={() => setShow(true)}
              className="relative cursor-pointer flex items-center w-full"
            >
              <svg
                width="232"
                className="absolute w-full"
                height="80"
                viewBox="0 0 232 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="231"
                  height="79"
                  rx="17.5"
                  stroke="#888888"
                  strokeOpacity="0.5"
                  strokeDasharray="6 6"
                />
              </svg>
              <Icon className="mx-4" />
              <div className="flex flex-col h-full justify-between">
                <h2 className="text-lg font-bold"> {footerSidebarSelect.title} </h2>
                <span className="text-sm text-subText"> {footerSidebarSelect.description} </span>
              </div>
            </div>
            {show && (
              <div
                ref={moreRef}
                className="absolute right-full bottom-full bg-subBg p-4 rounded-[12px] flex flex-col gap-2"
              >
                <div className="flex gap-2 cursor-pointer">
                  {" "}
                  <PlusCircle size={20} /> شارژ کردن کیف پول{" "}
                </div>
                <svg
                  width="160"
                  height="1"
                  viewBox="0 0 160 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.75"
                    x2="160"
                    y2="0.75"
                    stroke="#888888"
                    strokeOpacity="0.25"
                    strokeWidth="0.5"
                  />
                </svg>
                <PaymentsModal />
                <svg
                  width="160"
                  height="1"
                  viewBox="0 0 160 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.75"
                    x2="160"
                    y2="0.75"
                    stroke="#888888"
                    strokeOpacity="0.25"
                    strokeWidth="0.5"
                  />
                </svg>
                <div className="flex gap-2 cursor-pointer">
                  {" "}
                  <LogIn size={20} /> برداشت وجه{" "}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <TabletSidebar setView={setView} view={view} />

      <MobileSidebar />
    </>
  );
};

export default SidebarDashboard;
