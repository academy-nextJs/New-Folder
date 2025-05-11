/* eslint-disable */

"use client";
import {
  ChevronLeft,
  Copy,
  HeartIcon,
  HomeIcon,
  LocationEdit,
  ShareIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PropertyTabs from "./Tab";
import { useParams } from "next/navigation";
import { IHouse } from "@/types/houses-type/house-type";
import { getHouseById } from "@/utils/service/api/houses-api";
import CallSlider from "./CallSlider";
import { showToast } from "@/core/toast/toast";
import SellerDetail from "./SellerDetail";
import Photo from "./Photo";
import { Loader } from "../common/Loader";
import { fetchApi } from "@/core/interceptore/fetchApi";


const Rent = () => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const [house, setHouse] = React.useState<IHouse>()
  const params = useParams()
  const id = params?.id as string

  const fetchFavoriteStatus = async () => {
    try {
      const res = await fetchApi.get(`/favorites/${id}`) as any
      setIsFavorite(res?.is_favorite || false);
    } catch {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    fetchHouse();
    fetchFavoriteStatus();
  }, []);


  const fetchHouse = async () => {
    const houseData = await getHouseById(id) as IHouse
    setHouse(houseData)
  }

  useEffect(() => {
    fetchHouse()
  }, [])

  const nextSlide = () => {
    if (house) { setCurrentSlideIndex((prev) => (prev === house?.photos.length - 1 ? 0 : prev + 1)); }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      showToast('success', ' کپی شد ', ' بستن ')
    } catch {
      showToast('error', ' کپی نشد ', ' بستن ')
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'یه رزرو عالی ببین!',
          url: window.location.href,
        })
        showToast('success', ' اشتراک گذاری با موفقیت انجام شد ', ' بستن ')
      } catch {
        showToast('success', ' خطا در اشتراک گذاری ', ' بستن ')
      }
    } else {
      console.log('مرورگر شما از اشتراک‌گذاری پشتیبانی نمی‌کند')
    }
  }

  const handleFavorite = async () => {
    try {
      if (!isFavorite) {
        await fetchApi.post("/favorites", { house_id: id });
        setIsFavorite(true);
        showToast("success", "به علاقه‌مندی‌ها اضافه شد", "بستن");
      } else {
        await fetchApi.delete(`/favorites/${id}`);
        setIsFavorite(false);
        showToast("success", "از علاقه‌مندی‌ها حذف شد", "بستن");
      }
    } catch {
      showToast("error", "خطا در علاقه‌مندی‌ها", "بستن");
    }
  };


  return house ? <div className="mx-8" dir="ltr">
    <div className="flex gap-6 flex-col" dir="rtl">
      <div className="flex gap-6 flex-col mr-0" dir="rtl">
        <div className='flex gap-2 rtl text-sm items-center'>
          <Link href={'/'}> خانه </Link>
          <ChevronLeft size={16} />
          <Link href={'/rent'}> رهن و اجاره </Link>
          <ChevronLeft size={16} />
          <div className='text-primary'> {house?.title} </div>
        </div>
      </div>
    </div>
    <div className="flex mt-4 gap-4 flex-col 2xl:flex-row">

      {house && <SellerDetail house={house} />}

      {house && <Photo images={house?.photos} nextSlide={nextSlide} currentSlideIndex={currentSlideIndex} />}
    </div>
    <div className=" flex justify-around flex-col my-[20px] w-full gap-4 ">
      <div className="w-full flex justify-end my-[15px] lg:flex-row sm:flex-row flex-wrap gap-4">
        <button
          className="flex flex-row-reverse justify-center gap-2 text-sm  whitespace-nowrap items-center w-[100px] h-[36px] rounded-xl bg-[#7569FF]"
          dir="rtl"
        >
          <StarIcon size={16} />{house.rate} ستاره
        </button>
        <div className="h-8 w-px bg-subText"></div>
        {house.tags.map((item, idx) => (
          <button key={idx} className="w-[120px] h-[36px] rounded-xl bg-secondary-light2">
            <p className="text-ring"> {item}# </p>
          </button>
        ))}
      </div>

      <div
        className="mt-6 w-full flex flex-col sm:flex-row justify-between items-start gap-4"
        dir="rtl"
      >
        <div className="flex flex-col w-full gap-4" dir="rtl">
          <div className="flex flex-row max-md:flex-wrap sm:flex-row sm:items-center justify-between w-full gap-2">
            <span className="lg:text-xl text-md sm:text-xl md:text-xl">
              {house.title}
            </span>

            <div className="flex flex-row items-center gap-2 self-start sm:self-auto">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-light2">
                <HeartIcon
                  onClick={handleFavorite}
                  className={`w-5 h-5 cursor-pointer ${isFavorite ? 'text-red-500 fill-red-500' : 'text-subText'}`}
                />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-light2">
                <Copy onClick={handleCopy} className="w-5 h-5 text-subText" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary-light2 ">
                <ShareIcon onClick={handleShare} className="w-5 h-5 text-subText" />
              </button>
            </div>
          </div>

          <span className="flex items-center gap-2 text-xs sm:text-base md:text-base lg:text-base text-foreground ">
            <LocationEdit />
            {house.address}
          </span>
        </div>
      </div>
      <div dir="rtl">
        <PropertyTabs house={house} />
        <div className="w-full flex flex-row justify-between h-12 rounded-lg  bg-secondary-light2 items-center">
          <p className="flex gap-2 pr-4 text-ring">
            <HomeIcon />
            اگهی های مشابه
          </p>
          <button className="flex gap-1 text-primary pl-4">
            مشاهده همه
            <ChevronLeft />
          </button>
        </div>

        <div className="mt-[40px]"> <CallSlider type={house.transaction_type} /> </div>
      </div>
    </div>
  </div> : <Loader />
};

export default Rent;
