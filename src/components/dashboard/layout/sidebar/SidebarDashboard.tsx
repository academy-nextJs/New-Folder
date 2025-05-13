"use client";

import {
  Heart,
  Home,
  LogOut,
  Text,
  User,
  MoreHorizontal,
  X,
  LogIn,
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

const routes = [
  { label: "داشبورد", href: "/dashboard", icon: Home },
  { label: "اطلاعات کاربری", href: "/dashboard/profile", icon: User },
  { label: "ذخیره‌ها", href: "/dashboard/favorites", icon: Heart },
  { label: "پرداخت های من", href: "/dashboard/my-payments", icon: Heart },
  { label: "دیدگاه‌های من", href: "/dashboard/my-comments", icon: Text },
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
        <div className="flex flex-col gap-2">
          {routes.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap flex gap-3 items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "dark:bg-accent bg-subBg2 dark:text-accent-foreground"
                    : "hover:bg-subBg2"
                }`}
              >
                <Icon className="min-w-5 min-h-5 h-5 w-5" />
                <span>{label}</span>
              </Link>
            );
          })}
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
        <div className="flex flex-col gap-2">
          {routes.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`whitespace-nowrap flex gap-3 items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "dark:bg-accent bg-subBg2 dark:text-accent-foreground"
                    : "hover:bg-subBg2"
                }`}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon className="w-5 h-5 min-w-5 min-h-5" />
                    </TooltipTrigger>
                    <TooltipContent className="dark:bg-accent bg-subBg2 dark:accent-foreground text-foreground">
                      <p> {label} </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`w-dvw fixed bottom-0 right-0 z-50 justify-around items-center bg-subBg border-t py-3 md:hidden flex`}
      >
        {mainRoutes.map(({ href, icon: Icon, label }) => {
          const isActive = pathname.startsWith(href);
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
                {extraRoutes.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname.startsWith(href);

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
