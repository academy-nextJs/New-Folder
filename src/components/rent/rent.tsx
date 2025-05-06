"use client";
import {
  ArrowLeftCircle,
  Calendar,
  ChevronLeft,
  HeartIcon,
  HomeIcon,
  LocationEdit,
  ShareIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import vilaLafor from "@/assets/images/vilaLafor.png";
import Image from "next/image";
import PropertyTabs from "./Tab";
import SliderComponent from "../Landing/sliders/SliderComponent";

const Rent = () => {
  const images = [
    { src: vilaLafor, alt: "کلبه چوبی تصویر 1" },
    { src: vilaLafor, alt: "کلبه چوبی تصویر 2" },
    { src: vilaLafor, alt: "کلبه چوبی تصویر 3" },
    { src: vilaLafor, alt: "کلبه چوبی تصویر 4" },
    { src: vilaLafor, alt: "کلبه چوبی تصویر 5" },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <div className=" " dir="ltr">
      {/* Breadcrumb Navigation */}
      <div className="flex gap-6 flex-col mr-20" dir="rtl">
        <div className="flex gap-6 flex-col mr-0" dir="rtl">
          <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center w-fit lg:text-[13px] md:text-[13px] sm:text-[10px] text-[9px]">
            <Link href={`/`}> خانه </Link>
            <ChevronLeft className="text-ring" size={20} />
            <Link href={`/rent`} className="text-secondary-static">
              رهن و اجاره
            </Link>
            <ChevronLeft className="text-ring" size={20} />
            <Link href={`/`}> رهن و اجاره شیرگاه</Link>
            <ChevronLeft className="text-ring" size={20} />
            <Link href={`/rent`} className="text-secondary-static">
              رهن و اجاره آپارتمان
            </Link>
            <ChevronLeft className="text-ring" size={20} />
            <Link href={`/rent`} className="text-primary">
              کلبه بومگردی ساعتی تمام وقت
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mx-4 mt-4 gap-4 flex-col md:flex-row">
        <div className="relative w-full md:w-64 flex-shrink-0 mb-16 order-3 md:order-1">
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 217 372"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="215"
              height="370"
              rx="25"
              fill="#393939"
              stroke="#565656"
              strokeWidth="2"
            />
          </svg>

          <div className="relative z-10 rounded-[25px] overflow-hidden p-4">
            <div className="relative flex justify-center items-center gap-2 mb-6 w-36 h-16 m-auto bottom-7">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 197 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_5677)">
                  <path
                    d="M16 8H181V12C181 29.6731 166.673 44 149 44H48C30.3269 44 16 29.6731 16 12V8Z"
                    fill="#565656"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_5677"
                    x="0"
                    y="0"
                    width="197"
                    height="68"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_5677"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_5677"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="z-10 flex items-center gap-2 pb-2">
                <span className="text-white text-xs ">اطلاعات تماس</span>
                <div className="p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:max-w-sm w-full px-4 mx-auto">
              <div className="flex justify-center items-center m-auto flex-col gap-3">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mb-2"></div>

                <div className="text-white text-sm font-medium mb-1">
                  محمد رضا ساداتی
                </div>
                <div className="flex gap-1 items-center text-gray-400 text-xs mb-4">
                  12 مرداد - 1401 / 12:33
                  <Calendar className="w-3 h-3" />
                </div>
              </div>

              {/* قیمت‌ها */}
              <div className="lg:w-full  sm:w-fit w-fit  flex flex-col gap-2 mb-1">
                <div className="flex flex-row-reverse justify-between items-center text-xs text-gray-400 gap-8">
                  <span>قیمت رهن از:</span>
                  <div className="flex items-center text-primary">
                    <span className="text-sm">۴۰,۰۰۰,۰۰۰</span>
                    <span className="text-xs mr-1">تومان</span>
                  </div>
                </div>

                <div className="flex flex-row-reverse justify-between items-center text-xs text-gray-400">
                  <span>قیمت اجاره از:</span>
                  <div className="flex items-center text-primary">
                    <span className="text-sm">۳,۵۰۰,۰۰۰</span>
                    <span className="text-xs mr-1">تومان</span>
                  </div>
                </div>
              </div>

              <button className="lg:w-full  sm:w-56 w-56 bg-primary text-secondary rounded-full py-2 text-sm flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                تماس با ۱۲۳۴۵*****۹
              </button>

              <button className="lg:w-full  sm:w-56 w-56 border border-gray-700 text-white rounded-full py-2 text-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                گفتگو با فروشنده
              </button>
            </div>
          </div>
        </div>

        <div className="flex-grow order-1 md:order-2">
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <div className="flex flex-col gap-2 w-full md:w-[400px] order-2 md:order-1">
              <div className="w-full h-[208px] overflow-hidden rounded-lg">
                <Image
                  src={vilaLafor}
                  alt="کلبه چوبی"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[204px] overflow-hidden rounded-lg relative">
                <Image
                  src={vilaLafor}
                  alt="کلبه چوبی"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white">
                  <span className="text-lg font-bold">+۱۰ عکس دیگر</span>
                </div>
              </div>
            </div>

            {/* اسلایدر تصویر اصلی */}
            <div className="h-[410px] overflow-hidden rounded-lg relative flex-grow order-1 md:order-2">
              {/* تصاویر اسلایدر */}
              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlideIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* نشانگرهای اسلاید */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={nextSlide}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === currentSlideIndex
                          ? "bg-primary"
                          : "bg-white opacity-70"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-around flex-col  w-full gap-4 ">
        <div className="w-full flex justify-end lg:flex-row sm:flex-row flex-wrap gap-4">
          <button
            className="flex justify-center gap-1 items-center w-[100px] h-[36px] rounded-xl bg-[#7569FF]"
            dir="rtl"
          >
            <StarIcon className="w-4 h-4" />5 ستاره
          </button>
          <div className="h-8 w-px bg-gray-300"></div>
          <button className="w-[120px] h-[36px] rounded-xl bg-secondary-light2">
            <p className="text-ring"> خونه ویلایی#</p>
          </button>
          <button className="w-[120px] h-[36px] rounded-xl bg-secondary-light2">
            <p className="text-ring"> خونه اپارتمانی#</p>
          </button>
          <button className="w-[120px] h-[36px] rounded-xl bg-secondary-light2">
            <p className="text-ring"> رهن اجاره#</p>
          </button>
        </div>

        <div
          className="mt-6 w-full flex flex-col sm:flex-row justify-between items-start gap-4"
          dir="rtl"
        >
          <div className="flex flex-col w-full gap-4" dir="rtl">
            <div className="flex flex-row sm:flex-row sm:items-center justify-between w-full gap-2">
              <span className="lg:text-xl text-md sm:text-xl md:text-xl">
                فروش آپارتمان 262 متر در شهرک غرب
              </span>

              <div className="flex flex-row items-center gap-2 self-start sm:self-auto">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-light2">
                  <HeartIcon className="w-5 h-5 text-gray-500" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-light2 ">
                  <ShareIcon className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <span className="flex items-center gap-2 text-xs sm:text-base md:text-base lg:text-base text-foreground ">
              <LocationEdit />
              آدرس : مازندران ٬ ساری ٬ جاده دریا ٬ نبش دنیای آرزو ٬ ساختمان سپهر
            </span>
          </div>
        </div>
        <div dir="rtl">
          <PropertyTabs />
          <div className="w-full flex flex-row justify-between h-12 rounded-lg  bg-secondary-light2 items-center">
            <p className="flex gap-3 pr-4 text-ring">
              <HomeIcon />
              اگهی های مشابه
            </p>
            <button className="flex gap-4 text-primary pl-4">
              مشاهده همه
              <ArrowLeftCircle />
            </button>
          </div>

          <SliderComponent items={[]} view="2" loading />
        </div>
      </div>
    </div>
  );
};

export default Rent;
