"use client";
import { useState } from "react";

import {
  Car,
  Bath,
  Bed,
} from "lucide-react";
import SingleReserveForm from "../common/CommentForm";
import RentComment from "./RentComment";
import RentMap from "./RentMap";
import FacilityCard from "../single-reserve/facilitis/FacilityCard";
import { TFacilities } from "@/types/facilites-type";
import { IHouse } from "@/types/houses-type/house-type";

const tabs = [
  { id: "description", label: "توضیحات ملک" },
  { id: "features", label: "امکانات ملک" },
  { id: "location", label: "موقعیت ملک" },
  { id: "reviews", label: "نظرات کاربران" },
];

export default function PropertyTabs({ house }: { house: IHouse }) {
  const [activeTab, setActiveTab] = useState("description");

  const facilities: TFacilities = []
    if (house?.parking && house?.parking > 0) { facilities.push({ title: <Car size={24} />, content: ' پارکینگ ' }) }
    if (house?.rooms && house?.rooms > 0) { facilities.push({ title: <Bed size={24} />, content: ` ${house?.rooms} خوابه ` }) }
    if (house?.bathrooms && house?.bathrooms > 0) { facilities.push({ title: <Bath size={24} />, content: ` سرویس بهداشتی ` }) }
    if (house?.yard_type) { facilities.push({ title: ' حیاط ', content: ` ${house?.yard_type} ` }) }
    if (house?.capacity) { facilities.push({ title: ' ظرفیت ', content: ` ${house?.capacity > 0 ? house?.capacity + " نفر " : ' ندارد '} ` }) }


  return (
    <div className="w-full">
      {/* نوار تب‌ها */}
      <div className="flex overflow-y-hidden custom-scrollbar max-md:overflow-x-scroll whitespace-nowrap gap-4 mb-2 mt-2 pb-2 border-b bg-secondary-light2 items-center rounded-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-4 py-1 text-[12px] sm:text-sm md:text-sm lg:text-sm  font-medium transition-all duration-200 mt-2 ${activeTab === tab.id
                ? "bg-primary text-secondary"
                : " text-ring hover:bg-blur-primary"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-sm text-foreground leading-relaxed py-6 rounded-lg">
        {activeTab === "description" && (
          <p className="lg:text-base md:text-base sm:text-sm text-xs text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربر....
          </p>
        )}
        {activeTab === "features" && (
          <div className='grid grid-rows-2 md:flex flex-wrap gap-4 w-full h-fit'>
            {facilities.map((facility, idx) => (
              <FacilityCard key={idx} content={facility.content} title={facility.title} />
            ))}
          </div>
        )}
        {activeTab === "location" && <RentMap />}
        {activeTab === "reviews" && (
          <div>
            <SingleReserveForm />
            <RentComment />
          </div>
        )}
      </div>
    </div>
  );
}
