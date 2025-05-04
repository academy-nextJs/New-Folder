"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import villaIcon from "../../../assets/images/categories/house.png";
import villaIcon2 from "../../../assets/images/categories/cottage.png";
import villaIcon3 from "../../../assets/images/categories/wooden-house.png";
import villaIcon4 from "../../../assets/images/categories/apartment.png";
import star from "@/assets/Star 7.png";
import Bstar from "@/assets/Star 5.png";
import { MoveLeftIcon } from "lucide-react";
import { fetchApi } from "@/core/interceptore/fetchApi";
import { Loader } from "@/components/common/Loader";
import arrow from "@/assets/arrow.svg";
import { useTheme } from "@/utils/service/TanstakProvider";

type Category = {
  id: string;
  name: string;
};

const CardSvgBackground = ({ isHovered }: { isHovered: boolean }) => (
  <svg className="w-full" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M103.688 23.5C108.543 23.5 113.052 20.9839 115.602 16.8515L121.898 6.6485C124.448 2.51609 128.956 0 133.812 0H199C206.732 0 213 6.26801 213 14V75C213 82.732 206.732 89 199 89H14C6.26802 89 0 82.732 0 75V37.5C0 29.768 6.26801 23.5 14 23.5H103.688Z"
      fill={isHovered ? "#8CFF45" : "#2E2E2E"}
      className="transition-all duration-300"
    />
  </svg>
);
const categoryIcons = [villaIcon4, villaIcon2, villaIcon, villaIcon3];

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Data = await fetchApi.get<Category[]>("/categories");
        setCategoryData(Data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;

      setIsSmallScreen(width <= 448);

      if (width >= 1346) setCardsToShow(6);
      else if (width >= 1024) setCardsToShow(4);
      else if (width >= 640) setCardsToShow(3);
      else if (width >= 450) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      categoryData.length === 0 ? 0 : (prev + 1) % categoryData.length
    );
  };

  const visibleCards = Array.from({
    length: Math.min(cardsToShow, categoryData.length),
  }).map((_, idx) => (currentSlide + idx) % categoryData.length);

  const getCategoryIcon = (index: number) => {
    return categoryIcons[index % categoryIcons.length];
  };

  const { theme } = useTheme();

  return (
    <div className="mb-32 text-foreground p-2 sm:p-4">
      <div className="flex justify-center items-center gap-2 py-2 sm:py-4 mb-2 sm:mb-4 text-primary">
        <Image
          src={arrow}
          alt="arrow"
          className="w-8 h-8 sm:w-12 sm:h-12 rotate-180  brightness-0 dark:brightness-100 transition-all duration-300"
        />
        <span className="text-sm sm:text-base md:text-lg">
          دسته بندی املاک دلتا
        </span>
        <Image
          src={arrow}
          alt="arrow"
          className="w-8 h-8 sm:w-12 sm:h-12  brightness-0 dark:brightness-100 transition-all duration-300"
        />
      </div>

      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
        هر ملکی بخوای اینجا پیدا میشه !
      </h1>

      <p className="text-center sm:text-sm mb-8 sm:mb-12 mx-auto max-w-full font-sans break-words">
        با کلیک به روی هر دسته بندی می‌توانید تمام آگهی مربوط به آن را مشاهده
        کنید و به ملک مورد علاقه خود برسید
      </p>

      <div className="relative w-full flex items-center justify-center">
        {categoryData.length === 0 ? (
          <div className="w-full flex justify-center items-center h-[120px]">
            <Loader />
          </div>
        ) : (
          <div className="flex justify-center items-center w-full">
            <div className="flex gap-4 sm:gap-8 overflow-x-auto px-2 sm:px-6 mx-auto">
              {visibleCards.map((cardIndex) => {
                const category = categoryData[cardIndex];
                const icon = getCategoryIcon(cardIndex);
                return (
                  <div
                    key={cardIndex}
                    className="w-[210px] h-[100px] relative flex items-center justify-center cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setHoveredIndex(cardIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <CardSvgBackground
                        isHovered={hoveredIndex === cardIndex}
                      />
                    </div>

                    <div
                      className="absolute left-6 bottom-20"
                      onClick={handleNextSlide}
                    >
                      <MoveLeftIcon className="w-8 h-6 text-foreground" />
                    </div>

                    <div
                      className={`
    absolute bottom-14 
    ${isSmallScreen ? "right-4" : "right-2"}
    w-12 h-12 flex items-center justify-center rounded-md
    ${
      theme === "light"
        ? "bg-[#393939]"
        : hoveredIndex === cardIndex
        ? "bg-secondary-light"
        : "bg-secondary"
    }
    backdrop-blur-md transition-all duration-300
  `}
                    >
                      <Image alt="villa" src={icon} className="w-6 h-6" />
                    </div>

                    <div
                      className={`absolute bottom-4 flex items-center gap-1 group font-bold text-center`}
                      style={{
                        bottom: "20px",
                        right: isSmallScreen ? "60px" : "55px",
                      }}
                    >
                      <Image
                        alt="star"
                        src={hoveredIndex === cardIndex ? Bstar : star}
                        className="w-4 h-4 transition-all duration-300"
                      />

                      <span
                        className={`
    transition-all duration-300
    ${hoveredIndex === cardIndex ? "text-black" : "text-white"} 
  `}
                      >
                        {category?.name || "بدون عنوان"}
                      </span>

                      <Image
                        alt="star"
                        src={hoveredIndex === cardIndex ? Bstar : star}
                        className="w-4 h-4 transition-all duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
