"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfileCompletion = ({ percentage }: { percentage: number }) => {
  return (
    <div
      className="w-full md:w-[40%] h-52 bg-background rounded-xl p-4 flex items-center gap-4 shadow-md border"
      dir="ltr"
    >
      <div className="w-24 h-24">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "22px",
            pathColor: "#72ff72",
            textColor: "#000",
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <div className="flex flex-col justify-center text-right w-full mb-8">
        <div className="flex flex-row justify-between gap-16">
          <div className="flex gap-1 rotate-180 justify-end items-center dark:hidden">
            <h2 className=" rotate-180">ویرایش</h2>
            <svg
              width="48"
              height="17"
              viewBox="0 0 48 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </div>

          <h2 className="text-lg font-bold">وضعیت پروفایل شما</h2>
        </div>

        <p className="text-2xl font-extrabold mt-1">{percentage}%</p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
          برای اینکه بازدید خوبی داشته باشید، پروفایل شما باید حداقل ۷۰٪ تکمیل
          شده باشد.
        </p>
        <span className="text-xs text-gray-500 mt-auto">
          آخرین تغییرات در ۳ دقیقه پیش
        </span>
      </div>
    </div>
  );
};

export default ProfileCompletion;
