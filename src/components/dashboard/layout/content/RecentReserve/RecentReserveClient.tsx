"use client";

import React, { useState } from "react";

interface Reservation {
  id: number | string;
  hotelName: string;
  date: string;
  price: string;
  status: string;
}

interface Props {
  reservations: Reservation[];
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function RecentReserveClient({ reservations }: Props) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };
  return (
    <>
      {reservations.map((reservation) => (
        <div
          key={reservation.id}
          className="flex flex-col md:flex-row md:justify-between md:items-center bg-secondary-light2 dark:bg-secondary-light3 w-full rounded-xl mb-2 relative"
        >
          <div className="hidden md:flex md:flex-row md:w-full md:items-center">
            <div className="w-24 md:w-28 lg:w-36 h-14 bg-bacgkroundW rounded-xl mr-2 md:mr-4 flex-shrink-0"></div>

            <div className="grid grid-cols-4 w-full pr-4 md:pr-2 py-4">
              <div className="text-right font-medium text-xs md:text-sm lg:text-base">
                {reservation.hotelName}
              </div>
              <div className="text-center text-foreground text-xs md:text-sm lg:text-base">
                {reservation.date}
              </div>
              <div className="text-center font-medium text-xs md:text-sm lg:text-base">
                {reservation.price}
              </div>
              <div className="flex justify-center">
                <span className="bg-primary text-xs md:text-xs lg:text-sm text-center font-medium px-2 sm:px-3 py-1 rounded-full inline-flex items-center text-background">
                  <CheckIcon className="w-3 h-3 ml-1 text-background" />
                  {reservation.status}
                </span>
              </div>
            </div>

            <button className="mx-4 text-gray-500 hover:text-gray-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="5" r="1.5" fill="currentColor" />
                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                <circle cx="10" cy="15" r="1.5" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="md:hidden w-full">
            <div
              className="flex items-center p-3"
              onClick={() => toggleExpand(reservation.id.toString())}
            >
              <div className="w-20 h-12 bg-bacgkroundW rounded-lg mr-2 flex-shrink-0"></div>

              <div className="flex flex-col flex-grow mr-2">
                <div className="text-right font-medium text-sm">
                  {reservation.hotelName}
                </div>
                <div className="text-right text-gray-600 dark:text-gray-300 text-xs">
                  {reservation.date}
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="font-medium text-sm">{reservation.price}</div>
                <div className="flex justify-center">
                  <span className="bg-primary text-xs font-medium px-2 py-1 rounded-full inline-flex items-center text-background">
                    <CheckIcon className="w-3 h-3 ml-1 text-background" />
                    {reservation.status}
                  </span>
                </div>
              </div>

              <button className="ml-1 text-gray-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transform transition-transform ${
                    expandedItem === reservation.id ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {expandedItem === reservation.id && (
              <div className="px-3 pb-3 text-sm">
                <div className="flex justify-between py-1 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-gray-500">شماره رزرو:</span>
                  <span>۱۲۳۴۵۶</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">تعداد نفرات:</span>
                  <span>۲ نفر</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-500">نوع اتاق:</span>
                  <span>اتاق دو تخته</span>
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <button className="w-full mt-2 bg-primary bg-opacity-10 text-background py-2 rounded-lg text-xs font-medium">
                    مشاهده جزئیات رزرو
                  </button>
                  <button className="w-full mt-2 bg-primary bg-opacity-10 text-background py-2 rounded-lg text-xs font-medium">
                    ویرایش رزرو
                  </button>
                  <button className="w-full mt-2 bg-primary bg-opacity-10 py-2 rounded-lg text-xs font-medium text-background">
                    حذف رزرو
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
