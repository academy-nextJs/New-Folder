"use client";
import { useState } from "react";

import {
  Ruler,
  Building2,
  Layers3,
  LayoutGrid,
  Utensils,
  Toilet,
  Footprints,
  MoveRight,
  Phone,
  FileText,
  BedDouble,
  Warehouse,
  Fan,
  Car,
  Flame,
  Thermometer,
  Bath,
  PanelTop,
  MoveVertical,
  Waves,
} from "lucide-react";
import SingleReserveForm from "../common/CommentForm";
import RentComment from "./RentComment";
import RentMap from "./RentMap";

const features = [
  { label: "متراژ ملک", value: "170متر", icon: <Ruler size={24} /> },
  { label: "ساخت ملک", value: "سال 1400", icon: <Building2 size={24} /> },
  { label: "تعداد طبقات", value: "10 طبقه", icon: <Layers3 size={24} /> },
  { label: "تعداد واحد", value: "2 واحد", icon: <LayoutGrid size={24} /> },
  { label: "زیر بنا", value: "70متر", icon: <Ruler size={24} /> },
  { label: "آشپزخانه", value: "چوبی", icon: <Utensils size={24} /> },
  { label: "نوع سرویس", value: "فرنگی - ایرانی", icon: <Toilet size={24} /> },
  { label: "کف پوش", value: "سنگ", icon: <Footprints size={24} /> },
  { label: "طرف بنا", value: "شمالی", icon: <MoveRight size={24} /> },
  { label: "خط تلفن", value: "دارد", icon: <Phone size={24} /> },
  { label: "استخر", value: "دارد", icon: <Waves size={24} /> },
  { label: "بالکن", value: "دارد", icon: <PanelTop size={24} /> },
  { label: "وضعیت سند", value: "در دست اقدام", icon: <FileText size={24} /> },
  { label: "حمام", value: "۲ حمام", icon: <Bath size={24} /> },
  { label: "خواب", value: "4 خوابه", icon: <BedDouble size={24} /> },
  { label: "انباری", value: "دارد", icon: <Warehouse size={24} /> },
  { label: "کولر", value: "دارد", icon: <Fan size={24} /> },
  { label: "پارکینگ", value: "دارد", icon: <Car size={24} /> },
  { label: "گاز", value: "دارد", icon: <Flame size={24} /> },
  { label: "شوفاژ", value: "دارد", icon: <Thermometer size={24} /> },
  { label: "آسانسور", value: "دارد", icon: <MoveVertical size={24} /> },
];

const tabs = [
  { id: "description", label: "توضیحات ملک" },
  { id: "features", label: "امکانات ملک" },
  { id: "location", label: "موقعیت ملک" },
  { id: "reviews", label: "نظرات کاربران" },
];

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full">
      {/* نوار تب‌ها */}
      <div className="flex flex-wrap gap-1 mb-2 mt-2 border-b bg-secondary-light2 items-center pb-2 rounded-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 py-2 rounded-full text-[12px] sm:text-sm md:text-sm lg:text-sm  font-medium transition-all duration-200 mt-2 ${
              activeTab === tab.id
                ? "bg-primary text-secondary"
                : " text-ring hover:bg-blur-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* محتوای تب‌ها */}
      <div className="text-sm text-foreground leading-relaxed  p-4 rounded-lg">
        {activeTab === "description" && (
          <p className="lg:text-base md:text-base sm:text-sm text-xs">
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
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-[200px] h-24 bg-secondary-light2 flex flex-col gap-1 items-center justify-center p-3 rounded-xl text-[14px]"
              >
                <div className="text-accent">{item.icon}</div>
                <p>{item.label}</p>
                <p className="w-28 h-9 bg-accent flex justify-center items-center rounded-xl text-white">
                  {item.value}
                </p>
              </div>
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
