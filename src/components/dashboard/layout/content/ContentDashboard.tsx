import { PinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import img from "@/assets/Rectangle 6486.png";
import ProfileCompletion from "./ProfileCompletion";

const cardData = [
  { id: 1, title: "5", subtitle: "کل رزرو‌ها" },
  { id: 2, title: "12", subtitle: "کل پرداخت‌ها" },
  { id: 3, title: "7", subtitle: "در انتظار تایید" },
  { id: 4, title: "3", subtitle: "لغو شده" },
  { id: 5, title: "20", subtitle: "کل کاربران" },
];

const ContentDashboard = () => {
  return (
    <div className="flex justify-center flex-col w-full gap-2">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="relative bg-bacgkroundW rounded-xl px-4 pt-4 flex flex-col items-center justify-between
              w-full sm:w-[47%] md:w-[30%] lg:w-[22%] xl:w-[18%]"
          >
            <div className="absolute top-0 right-6 w-10 h-12 rounded-b-2xl bg-ring flex justify-center items-center">
              <PinIcon size={20} />
            </div>

            <div className="text-start w-full mr-28">
              <span className="text-xl font-bold block">{item.title}</span>
              <span className="text-sm text-muted-foreground block">
                {item.subtitle}
              </span>
            </div>

            <Image
              alt="dashboard-img"
              src={img}
              className="w-full rounded-b-xl object-cover"
            />
            <div className="flex flex-row justify-between w-full items-center mt-2">
              <span className="text-textComment">جزئیات</span>

              <div className="flex gap-1 rotate-180 justify-center items-center dark:hidden">
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
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-center gap-8 w-full ">
          <div className="w-[60%] h-52 bg-background rounded-xl"></div>
          <ProfileCompletion percentage={40} />
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
