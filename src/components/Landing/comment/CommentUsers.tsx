"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import arrow from "@/assets/arrow.svg";
import { Star, Calendar } from "lucide-react";
import plygen from "@/assets/Polygon 1.png";

interface Comment {
  id: number;
  rating: string;
  text: string;
  author: string;
  date: string;
  time: string;
}

interface CommentCardProps {
  comment: Comment;
  isSmallScreen: boolean;
}

const CommentUsers = () => {
  const [activeSlideGroup, setActiveSlideGroup] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const comments: Comment[] = [
    {
      id: 1,
      rating: "۴.۵",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "محمد رضا ساداتی",
      date: "۱۲ مرداد - ۱۴۰۱",
      time: "۱۲:۳۳",
    },
    {
      id: 2,
      rating: "۴.۳",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "علی احمدی",
      date: "۵ شهریور - ۱۴۰۱",
      time: "۱۵:۲۰",
    },
    {
      id: 3,
      rating: "۴.۵",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "محمد رضا ساداتی",
      date: "۱۲ مرداد - ۱۴۰۱",
      time: "۱۲:۳۳",
    },
    {
      id: 4,
      rating: "۴.۳",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "علی احمدی",
      date: "۵ شهریور - ۱۴۰۱",
      time: "۱۵:۲۰",
    },
    {
      id: 5,
      rating: "۴.۷",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "مریم رضایی",
      date: "۱۴ آذر - ۱۴۰۱",
      time: "۱۱:۲۵",
    },
    {
      id: 6,
      rating: "۴.۹",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "امیر کاظمی",
      date: "۲۹ دی - ۱۴۰۱",
      time: "۱۸:۰۵",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const commentsPerSlide = isSmallScreen ? 1 : 2;
  const slideGroupsCount = Math.ceil(comments.length / commentsPerSlide);

  const goToNextSlide = () => {
    if (activeSlideGroup < slideGroupsCount - 1) {
      setActiveSlideGroup(activeSlideGroup + 1);
    } else {
      setActiveSlideGroup(0);
    }
  };

  const goToPrevSlide = () => {
    if (activeSlideGroup > 0) {
      setActiveSlideGroup(activeSlideGroup - 1);
    } else {
      setActiveSlideGroup(slideGroupsCount - 1);
    }
  };

  const goToSlideGroup = (groupIndex: number) => {
    setActiveSlideGroup(groupIndex);
  };

  const commentPairs = [];
  for (let i = 0; i < comments.length; i += commentsPerSlide) {
    commentPairs.push(comments.slice(i, i + commentsPerSlide));
  }

  const sliderPosition = 100 * activeSlideGroup;
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideGroup((prev) =>
        prev < slideGroupsCount - 1 ? prev + 1 : 0
      );
    }, 9000);

    return () => clearInterval(interval);
  }, [slideGroupsCount]);
  return (
    <div className=" text-foreground px-8">
      <div className="flex justify-center items-center gap-2 py-2 sm:py-4 mb-2 sm:mb-4 text-primary">
        <Image
          src={arrow}
          className="w-8 h-8 sm:w-12 sm:h-12 rotate-180 cursor-pointer dark:inline hidden"
          alt="arrow"
          onClick={goToPrevSlide}
        />
        <div className="flex dark:hidden gap-1 rotate-180 justify-center items-center">
          <svg
            width="48"
            height="17"
            viewBox="0 0 48 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 10.1598C46.3333 9.38998 46.3333 7.46548 45 6.69568L39 3.23158C37.6667 2.46178 36 3.42403 36 4.96363L36 11.8918C36 13.4314 37.6667 14.3937 39 13.6239L45 10.1598Z"
              className="fill-primary"
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
        <span className="text-sm sm:text-base md:text-lg">نظرات کاربران</span>
        <div className="flex gap-1 justify-center items-center dark:hidden">
          <svg
            width="48"
            height="17"
            viewBox="0 0 48 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45 10.1598C46.3333 9.38998 46.3333 7.46548 45 6.69568L39 3.23158C37.6667 2.46178 36 3.42403 36 4.96363L36 11.8918C36 13.4314 37.6667 14.3937 39 13.6239L45 10.1598Z"
              className="fill-primary"
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
        <Image
          src={arrow}
          className="w-8 h-8 sm:w-12 sm:h-12 cursor-pointer dark:inline hidden"
          alt="arrow"
          onClick={goToNextSlide}
        />
      </div>

      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        رضایت شما اعتبار و ارزش دلتا را می‌سازد!
      </h1>

      <p className="text-center text-xs sm:text-sm md:text-base mb-4 sm:mb-5 mx-auto max-w-2xl font-sans break-words leading-5 sm:leading-6 md:leading-7">
        تیم دلتا با ارائه بهترین نیروهای خدماتی و سرویس‌های املاکی سعی دارد تا
        در تمام لحظات کنار شما باشد.
      </p>

      <div className="flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{ transform: `translateX(${sliderPosition}%)` }}
            dir="rtl"
          >
            {commentPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="flex-shrink-0 w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-8"
              >
                {pair.map((comment) => (
                  <CommentCard
                    key={comment.id}
                    comment={comment}
                    isSmallScreen={isSmallScreen}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 sm:mt-6">
          {Array.from({ length: slideGroupsCount }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlideGroup(index)}
              className="cursor-pointer"
            >
              {activeSlideGroup === index ? (
                <div>
                  <Image
                    src={plygen}
                    className="dark:inline hidden w-3 h-3 sm:w-4 sm:h-4"
                    alt="Active"
                  />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary dark:hidden" />
                </div>
              ) : (
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-ring" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommentCard = ({ comment, isSmallScreen }: CommentCardProps) => {
  const trimmedText = isSmallScreen
    ? comment.text.slice(0, 78) + (comment.text.length > 50 ? "..." : "")
    : comment.text;

  return (
    <div className="relative w-[65vw] sm:w-[70vw] md:w-[40vw] lg:w-[40vw] h-full">
      {" "}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 678 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          className="fill-cardComment"
          d="M554.978 27.4183C562.544 27.4183 569.668 23.8499 574.199 17.7897L580.301 9.62861C584.832 3.56845 591.956 0 599.522 0L654 0C667.255 0 678 10.7452 678 24V285C678 298.255 667.255 309 654 309H24C10.7452 309 0 298.255 0 285L0 51.4183C0 38.1635 10.7452 27.4183 24 27.4183L554.978 27.4183Z"
        />
      </svg>
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-10 justify-between text-primary-foreground overflow-hidden">
        <div className="flex items-center justify-start w-full" dir="rtl">
          <div className="w-10 h-6 sm:w-12 sm:h-7 gap-1 md:w-14 md:h-8 lg:w-16 lg:h-10 flex items-center bg-bacgkroundW justify-center rounded-md ">
            <span className="text-textComment text-xs sm:text-sm md:text-base">
              {comment.rating}
            </span>
            <Star className=" fill-textComment ml-1 w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>

        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-text-about my-2 sm:my-3 md:my-4">
          {trimmedText}
        </p>

        <div className="w-full h-[40px] sm:h-[45px] md:h-[50px] lg:h-[60px] relative mt-auto">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 646 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            preserveAspectRatio="none"
          >
            <rect width="646" height="81" rx="24" className="fill-card-light" />
          </svg>

          <div className="relative z-10 flex items-center h-full px-2 sm:px-3 md:px-4 lg:px-5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-md bg-ring flex items-center justify-center text-primary-foreground text-[10px] sm:text-xs md:text-sm lg:text-base">
              {comment.author.charAt(0)}
            </div>

            <div className="text-right mr-2 sm:mr-3 md:mr-4">
              <p className="font-semibold text-[8px] text-text-about sm:text-[10px] md:text-xs lg:text-sm">
                {comment.author}
              </p>

              <div className="flex items-center text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-ring mt-0.5">
                <Calendar className="mx-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />

                <span>{comment.date}</span>

                <span>{comment.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentUsers;
