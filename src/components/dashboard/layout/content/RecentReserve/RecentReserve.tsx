/* eslint-disable */

"use client";
import { useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import RecentReserveClient from "../RecentReserve/RecentReserveClient";
import { useTranslations } from "next-intl";

function getReservations() {
  return [
    {
      id: 1,
      hotelName: "هتل سراوان زائین رشت",
      date: "۱۲ مرداد - ۱۴:۰۱ / ۱۴۰۲/۱۲/۲۳",
      price: "۱,۸۰۰,۰۰۰ تومان",
      status: "تایید شده",
    },
    {
      id: 2,
      hotelName: "هتل سراوان زائین رشت",
      date: "۱۲ مرداد - ۱۴:۰۱ / ۱۴۰۲/۱۲/۲۳",
      price: "۱,۸۰۰,۰۰۰ تومان",
      status: "تایید شده",
    },
    {
      id: 3,
      hotelName: "هتل سراوان زائین رشت",
      date: "۱۲ مرداد - ۱۴:۰۱ / ۱۴۰۲/۱۲/۲۳",
      price: "۱,۸۰۰,۰۰۰ تومان",
      status: "تایید شده",
    },
    {
      id: 4,
      hotelName: "هتل سراوان زائین رشت",
      date: "۱۲ مرداد - ۱۴:۰۱ / ۱۴۰۲/۱۲/۲۳",
      price: "۱,۸۰۰,۰۰۰ تومان",
      status: "تایید شده",
    },
    {
      id: 5,
      hotelName: "هتل سراوان زائین رشت",
      date: "۱۲ مرداد - ۱۴:۰۱ / ۱۴۰۲/۱۲/۲۳",
      price: "۱,۸۰۰,۰۰۰ تومان",
      status: "تایید شده",
    },
  ];
}

export default function RecentReserve() {
  const t = useTranslations("dashboardBuyer");
  const [reservations, setReservations] = useState<Array<any>>([]);

  useEffect(() => {
    // Simulate async fetch
    setReservations(getReservations());
  }, []);

  return (
    <BlurFade className="w-full flex flex-col justify-center gap-4 px-2 md:px-4 bg-background dark:bg-secondary-light2 rounded-xl">
      <div className="w-full flex flex-row justify-between px-2 md:px-4 pt-4">
        <h2 className="items-center flex gap-2 md:gap-4 text-sm md:text-base lg:text-lg">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          {t("recentReserves")}
        </h2>
        <div className="flex gap-1 rotate-180 items-center justify-between">
          <svg
            width="42"
            height="15"
            viewBox="0 0 48 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:block"
          >
            <path
              className="fill-primary"
              d="M45 10.1598C46.3333 9.38998 46.3333 7.46548 45 6.69568L39 3.23158C37.6667 2.46178 36 3.42403 36 4.96363L36 11.8918C36 13.4314 37.6667 14.3937 39 13.6239L45 10.1598Z"
            />
            <path
              d="M23.75 9.72677C24.75 9.14942 24.75 7.70605 23.75 7.1287L19.25 4.53062C18.25 3.95327 17 4.67496 17 5.82966L17 11.0258C17 12.1805 18.25 12.9022 19.25 12.3248L23.75 9.72677Z"
              className="fill-primary"
              fillOpacity="0.5"
            />
            <path
              d="M6.5 9.29376C7.16667 8.90886 7.16667 7.94661 6.5 7.56171L3.5 5.82966C2.83333 5.44476 2 5.92588 2 6.69568L2 10.1598C2 10.9296 2.83333 11.4107 3.5 11.0258L6.5 9.29376Z"
              className="fill-primary"
              fillOpacity="0.25"
            />
          </svg>
          <h2 className="rotate-180 text-xs md:text-sm lg:text-base text-primary font-medium cursor-pointer hover:underline">
            {t("seeAll")}
          </h2>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-4 text-center border bg-border rounded-lg p-4 mb-2 font-medium text-xs md:text-sm lg:text-base">
        <div className="text-center mr-16">{t("hotelName")}</div>
        <div className="text-center mr-12">{t("reserveDate")}</div>
        <div>{t("price")}</div>
        <div className="text-center">{t("status")}</div>
      </div>

      <RecentReserveClient reservations={reservations} />
    </BlurFade>
  );
}