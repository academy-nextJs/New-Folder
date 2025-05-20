"use client";

import {
  Heart,
  Home,
  LogOut,
  User,
  MoreHorizontal,
  X,
  LogIn,
  CreditCard,
  Coins,
  ChevronDown,
  Hotel,
  HousePlus,
  Settings,
  PlusCircle,
  BellDot,
  Plus,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DeltaIcon from "@/app/icon.png";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PaymentsModal from "../../modal/PaymentsModal";

const routes = [
  { label: "داشبورد", href: "/dashboard", icon: Home },
  { label: "اطلاعات کاربری", href: "/dashboard/profile", icon: User },
  { label: "مدیریت رزرو ها", href: "/dashboard/manage-reserves", icon: Plus },
  { label: "علاقه مندی ها", href: "/dashboard/favorites", icon: Heart },
  { label: "پرداخت ها", href: "/dashboard/payments", icon: Coins },
  { label: "اعلان ها", href: "/dashboard/notifications", icon: BellDot },
  {
    label: "مدیریت املاک",
    href: "/dashboard/manage-houses",
    icon: Settings,
    children: [
      {
        label: " املاک من ",
        href: "/dashboard/manage-houses/my-houses",
        icon: Hotel,
      },
      {
        label: " ساخت آگهی ",
        href: "/dashboard/manage-houses/add-houses",
        icon: HousePlus,
      },
    ],
  },
];

const SidebarDashboard = ({
  view,
  setView,
}: {
  view: number;
  setView: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const mainRoutes = routes.slice(0, 4);
  const extraRoutes = routes.slice(4);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    };
    if (showMore) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMore]);

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

  return (
    <>
      <div
        className={`bg-subBg md:flex hidden transition-all duration-300 ease-in-out px-4 border py-8 gap-8 rounded-xl w-fit flex-col shadow-md ${
          view === 1
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
            {routes.map(({ label, href, icon: Icon, children }) => {
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
                    className={`whitespace-nowrap flex justify-between items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                      isActive
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
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {isDropdownOpen && children && (
                    <div className="pr-2 flex flex-col gap-2 mt-1">
                      {children.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={href}
                            href={href}
                            className={`whitespace-nowrap flex justify-between items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                              isActive
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
              <CreditCard className="mx-4" />
              <div className="flex flex-col h-full justify-between">
                <h2 className="text-lg font-bold"> کیف پول </h2>
                <span className="text-sm text-subText"> عدم موجودی </span>
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

      <div
        className={`bg-subBg md:flex hidden transition-all duration-300 ease-in-out px-4 border py-8 gap-8 rounded-xl w-fit flex-col shadow-md ${
          view === 2
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none absolute"
        }`}
      >
        <div className="flex justify-center items-center mb-6">
          <LogIn
            onClick={() => setView(1)}
            className="cursor-pointer rotate-180 hover:text-accent transition-colors"
          />
        </div>
        <div className="flex flex-col justify-between h-full items-center">
          <div className="flex flex-col gap-2">
            {routes.map(({ label, href, icon: Icon, children }) => {
              const isActive = pathname === href;
              const isDropdownOpen = openDropdown === href;

              const handleClick = (e: React.MouseEvent) => {
                if (children) {
                  e.preventDefault();
                  setOpenDropdown((prev) => (prev === href ? null : href));
                }
              };

              return (
                <div className="flex flex-col" key={href}>
                  <Link
                    key={href}
                    href={href}
                    onClick={handleClick}
                    className={`whitespace-nowrap flex gap-3 items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "dark:bg-accent dark:text-accent-foreground bg-subBg2"
                        : "hover:bg-subBg2 bg-none"
                    }`}
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex flex-col items-center">
                          <Icon className="w-5 h-5 min-w-5 min-h-5" />
                          {children && (
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                isDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </TooltipTrigger>
                        <TooltipContent className="dark:bg-accent bg-subBg2 dark:accent-foreground absolute right-6 whitespace-nowrap text-foreground">
                          <p> {label} </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {isDropdownOpen && children && (
                    <div className=" flex flex-col gap-2 mt-1">
                      {children.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href;

                        return (
                          <Link
                            key={href}
                            href={href}
                            className={`whitespace-nowrap flex justify-between items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                              isActive
                                ? "dark:bg-accent dark:text-accent-foreground bg-subBg2"
                                : "hover:bg-subBg2 bg-none"
                            }`}
                          >
                            <div className="flex gap-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger className="flex flex-col items-center">
                                    <Icon className="w-5 h-5 min-w-5 min-h-5" />
                                  </TooltipTrigger>
                                  <TooltipContent className="dark:bg-accent bg-subBg2 dark:accent-foreground absolute right-6 whitespace-nowrap text-foreground">
                                    <p> {label} </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
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
          <Link
            className="hover:bg-subBg2 px-3 py-2 flex justify-center items-center rounded-lg"
            href={""}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CreditCard />
                </TooltipTrigger>
                <TooltipContent className="dark:bg-accent bg-subBg2 dark:accent-foreground absolute right-6 whitespace-nowrap text-foreground">
                  <p> کیف پول </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>
      </div>

      <div
        className={`w-dvw fixed bottom-0 right-0 z-50 justify-around items-center bg-subBg border-t py-3 md:hidden flex`}
      >
        {mainRoutes.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} className="flex flex-col items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Icon
                      className={`w-6 h-6 ${isActive ? "text-primary" : ""}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="dark:bg-accent bg-subBg2 dark:accent-foreground text-foreground">
                    <p> {label} </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          );
        })}

        {extraRoutes.length > 0 && (
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="flex flex-col items-center"
            >
              <MoreHorizontal className="w-6 h-6" />
            </button>
            {showMore && (
              <div className="absolute px-2 py-2 bottom-12 left-0 bg-subBg shadow-xl rounded-lg z-50 flex flex-col gap-2 w-max min-w-[160px]">
                <button
                  onClick={() => setShowMore(false)}
                  className="self-end mb-2"
                >
                  <X className="w-4 h-4" />
                </button>
                {extraRoutes.map(({ href, label, icon: Icon, children }) => {
                  const isActive = pathname === href;

                  return children ? (
                    children.map(({ href, label, icon: Icon }) => {
                      const isActive = pathname === href;

                      return (
                        <Link
                          key={href}
                          href={href}
                          className={`flex items-center gap-2 px-2 py-1 flex-nowrap whitespace-nowrap rounded-md text-sm ${
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-subBg2"
                          }`}
                          onClick={() => setShowMore(false)}
                        >
                          <Icon className="min-w-4 min-h-4 h-4 w-4" />
                          <span>{label}</span>
                        </Link>
                      );
                    })
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 px-2 py-1 flex-nowrap whitespace-nowrap rounded-md text-sm ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-subBg2"
                      }`}
                      onClick={() => setShowMore(false)}
                    >
                      <Icon className="min-w-4 min-h-4 h-4 w-4" />
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <Link href="/" className="p-1 rounded-full shadow-md">
          <Image src={DeltaIcon} alt="Delta" width={32} height={32} />
        </Link>
      </div>
    </>
  );
};

export default SidebarDashboard;
