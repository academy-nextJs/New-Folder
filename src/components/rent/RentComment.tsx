import { ArrowLeftCircle, Calendar, MessageSquare, Star } from "lucide-react";
import Image from "next/image";
import border from "@/assets/Line 521(1).png";
import { useState, useEffect, useRef } from "react";

interface Comment {
  id: number;
  rating: string;
  text: string;
  author: string;
  date: string;
  time: string;
}

const RentComment = () => {
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
      rating: "۴.۷",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "مریم حسینی",
      date: "۱۸ مهر - ۱۴۰۱",
      time: "۰۹:۱۵",
    },
    {
      id: 4,
      rating: "۴.۰",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "رضا محمدی",
      date: "۲۲ آبان - ۱۴۰۱",
      time: "۱۸:۴۰",
    },
    {
      id: 5,
      rating: "۴.۹",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "زهرا رضایی",
      date: "۳ آذر - ۱۴۰۱",
      time: "۱۴:۲۵",
    },
    {
      id: 6,
      rating: "۴.۹",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...",
      author: "زهرا رضایی",
      date: "۳ آذر - ۱۴۰۱",
      time: "۱۴:۲۵",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2);
  const totalSlides = Math.ceil(comments.length / visibleItems);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else {
        setVisibleItems(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const displayedComments = comments.slice(
    currentSlide * visibleItems,
    (currentSlide + 1) * visibleItems
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8" dir="rtl">
      <div
        ref={sliderRef}
        className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center  w-full transition-all duration-500 ease-in-out"
      >
        {displayedComments.map((comment) => (
          <div
            key={comment.id}
            className="relative w-full max-w-[488px] aspect-[488/466] mb-8 md:mb-0"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 488 466"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M369.488 40.198C379.705 40.198 388.801 33.7297 392.157 24.0792L394.924 16.1188C398.279 6.46836 407.376 0 417.593 0L463.5 0C476.755 0 487.5 10.7452 487.5 24V442C487.5 455.255 476.755 466 463.5 466H24C10.7452 466 0 455.255 0 442V64.198C0 50.9432 10.7452 40.198 24 40.198H369.488Z"
                fill="#393939"
              />
            </svg>

            <div className="absolute top-0 right-0 w-full h-full p-4 sm:p-5 md:p-6 flex flex-col ">
              <div className="w-16 h-8 flex items-center justify-center rounded-md mt-2 bg-white shadow-md px-2">
                <span className="text-black text-xs sm:text-sm">
                  {comment.rating}
                </span>
                <Star className="text-black ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              <p className=" sm:mt-8  h-28 mt-2 md:mt-1 text-xs sm:text-base md:text-[12px] line-clamp-3 lg:text-base lg:mt-8 text-white">
                {comment.text}
              </p>
              <div className="flex w-full h-12 md:h-0 lg:h-0 sm:h-0"></div>

              <div className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-3 sm:mt-8 lg:mt-6 md:mt-1 text-md">
                <span className="flex h-6 whitespace-nowrap items-center gap-4 px-2 py-4 sm:px-4 sm:py-2 md:w-48 w-36 md:h-8 sm:w-36  lg:h-8 bg-accent text-[10px] sm:text-sm md:text-xs lg:text-lg rounded-xl">
                  <MessageSquare size={20} />
                  پاسخ کاربران
                </span>

                <div className=" sm:block">
                  <Image
                    className="h-1 w-full max-w-[240px] object-contain flex-shrink-0"
                    alt="img"
                    src={border}
                  />
                </div>
              </div>

              <div className="w-full h-12  flex items-center justify-start gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5  overflow-hidden lg:text-base lg:mt-12 ">
                <p className=" text-xs sm:text-base md:text-sm whitespace-nowrap  text-white">
                  {comment.author}
                </p>

                <div className="h-4 sm:h-5 md:h-6 w-2 bg-gray-300"></div>

                <p className="text-[10px] w-full sm:text-base md:text-sm lg:text-base text-white">
                  {comment.date} / {comment.time}
                </p>
              </div>

              <p className="mt-4  h-28 sm:mt-10 md:mt-6 text-xs sm:text-base md:text-sm line-clamp-3 lg:text-base text-white">
                {comment.text}
              </p>

              <div className="w-full h-[45px] sm:h-[45px] md:h-[50px] lg:h-[60px] relative  sm:mt-6  mt-4 ">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 850 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <rect width="850" height="90" rx="24" fill="#444444" />
                </svg>
                <div className="w-full  relative px-3 sm:px-4 md:px-5 lg:px-6 flex items-center justify-around sm:justify-around lg:justify-between md:justify-between ">
                  {/* سمت راست */}
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-md bg-foreground flex items-center justify-center text-primary-foreground text-[10px] sm:text-xs md:text-sm lg:text-base">
                      {comment.author.charAt(0)}
                    </div>

                    <div className="text-right mr-2 sm:mr-3 md:mr-4">
                      <p className="font-semibold text-[8px] text-white sm:text-[10px] md:text-xs lg:text-sm">
                        {comment.author}
                      </p>

                      <div className="flex items-center text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-ring mt-0.5">
                        <Calendar className="mx-1 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                        <span>{comment.date}</span>
                        <span className="mx-1">/</span>
                        <span>{comment.time}</span>
                      </div>
                    </div>
                  </div>

                  <button className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-primary text-[8px] sm:text-[10px] md:text-xs lg:text-sm items-center">
                    ثبت پاسخ
                    <ArrowLeftCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-primary w-4 h-4" : "bg-gray-300"
            }`}
            aria-label={`رفتن به اسلاید ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RentComment;
