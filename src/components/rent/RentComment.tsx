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
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const displayedComments = comments.slice(
    currentSlide * visibleItems,
    (currentSlide + 1) * visibleItems
  );

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 sm:py-8"
      dir="rtl"
    >
      <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 z-10 px-1">
        <button
          onClick={goToPrevSlide}
          className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1 sm:p-2 transition-all"
          aria-label="اسلاید قبلی"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-6 sm:h-6 rotate-180"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1 sm:p-2 transition-all"
          aria-label="اسلاید بعدی"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-6 sm:h-6"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div
        ref={sliderRef}
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 items-center w-full transition-all duration-500 ease-in-out"
      >
        {displayedComments.map((comment) => (
          <div
            key={comment.id}
            className="relative w-full sm:max-w-[488px] aspect-auto sm:aspect-[488/466] mb-4 sm:mb-6"
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

            <div className="absolute top-0 right-0 w-full h-full p-3 sm:p-4 md:p-6 flex flex-col">
              <div className="w-12 sm:w-16 h-6 sm:h-8 flex items-center justify-center rounded-md bg-white shadow-md px-2">
                <span className="text-black text-xs sm:text-sm">
                  {comment.rating}
                </span>
                <Star className="text-black ml-1 w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              <p className="mt-2 sm:mt-4 md:mt-6 lg:mt-8 text-xs sm:text-sm md:text-base line-clamp-3 text-white">
                {comment.text}
              </p>

              <div className="w-full flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-6">
                <span className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap w-auto bg-accent text-[10px] sm:text-xs md:text-sm rounded-xl">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  پاسخ کاربران
                </span>

                <div className="hidden sm:block flex-grow">
                  <Image
                    className="h-1 w-full object-contain flex-shrink-0"
                    alt="separator"
                    src={border}
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-start gap-1 sm:gap-2 mt-3 sm:mt-4 overflow-hidden">
                <p className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap text-white">
                  {comment.author}
                </p>

                <div className="h-3 sm:h-4 md:h-5 w-px bg-gray-300"></div>

                <p className="text-[10px] sm:text-xs md:text-sm text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {comment.date} / {comment.time}
                </p>
              </div>

              <p className="mt-3 sm:mt-4 md:mt-6 text-[10px] sm:text-xs md:text-sm line-clamp-3 text-white flex-grow">
                {comment.text}
              </p>

              <div className="w-full h-auto aspect-[8.5/1] relative mt-2 sm:mt-4">
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
                <div className="w-full h-full relative px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-md bg-foreground flex items-center justify-center text-primary-foreground text-[8px] sm:text-xs md:text-sm">
                      {comment.author.charAt(0)}
                    </div>

                    <div className="text-right mr-1 sm:mr-2 md:mr-3">
                      <p className="font-semibold text-[8px] sm:text-xs md:text-sm text-white">
                        {comment.author}
                      </p>

                      <div className="flex items-center text-[6px] sm:text-[8px] md:text-xs text-ring mt-0.5">
                        <Calendar className="mr-0.5 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                        <span>{comment.date}</span>
                        <span className="mx-0.5 sm:mx-1">/</span>
                        <span>{comment.time}</span>
                      </div>
                    </div>
                  </div>

                  <button className="flex gap-1 sm:gap-2 text-primary text-[8px] sm:text-xs md:text-sm items-center">
                    ثبت پاسخ
                    <ArrowLeftCircle className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-1 sm:gap-2 mt-2 sm:mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-primary w-3 h-3 sm:w-4 sm:h-4"
                : "bg-gray-300"
            }`}
            aria-label={`رفتن به اسلاید ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RentComment;
