"use client";
import { useState } from "react";

import {
  Car,
  Bath,
  Bed,
} from "lucide-react";
import SingleReserveForm from "../common/CommentForm";
import RentMap from "./RentMap";
import FacilityCard from "../single-reserve/facilitis/FacilityCard";
import { TFacilities } from "@/types/facilites-type";
import { IHouse } from "@/types/houses-type/house-type";
import SingleReserveComments from "../single-reserve/comments/SingleReserveComments";
import { motion } from 'framer-motion'

const tabs = [
  { id: "description", label: "توضیحات ملک" },
  { id: "features", label: "امکانات ملک" },
  { id: "location", label: "موقعیت ملک" },
  { id: "reviews", label: "نظرات کاربران" },
];

export default function PropertyTabs({ house }: { house: IHouse }) {
  const [activeTab, setActiveTab] = useState("description");
  const [viewReply, setViewReply] = useState<boolean>(false)
  const [parent_comment, setParent_comment] = useState<string>('')
  const [parent_comment_id, setParent_comment_id] = useState<string | null>(null)

  const facilities: TFacilities = []
  if (house?.parking && house?.parking > 0) { facilities.push({ title: <Car size={24} />, content: ' پارکینگ ' }) }
  if (house?.rooms && house?.rooms > 0) { facilities.push({ title: <Bed size={24} />, content: ` ${house?.rooms} خوابه ` }) }
  if (house?.bathrooms && house?.bathrooms > 0) { facilities.push({ title: <Bath size={24} />, content: ` سرویس بهداشتی ` }) }
  if (house?.yard_type) { facilities.push({ title: ' حیاط ', content: ` ${house?.yard_type} ` }) }
  if (house?.capacity) { facilities.push({ title: ' ظرفیت ', content: ` ${house?.capacity > 0 ? house?.capacity + " نفر " : ' ندارد '} ` }) }


  return (
    <div className="w-full">
      <div className="flex px-4 overflow-y-hidden custom-scrollbar max-md:overflow-x-scroll whitespace-nowrap gap-4 mb-2 mt-2 pb-2 border-b bg-secondary-light2 items-center rounded-md">
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

      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }} className="text-sm text-foreground leading-relaxed py-6 rounded-lg">
        {activeTab === "description" && (
          <p className="lg:text-base md:text-base sm:text-sm text-xs text-justify">
            {house.caption || 'هیج اطلاعاتی موجود نیست'}
          </p>
        )}
        {activeTab === "features" && (
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} className='grid grid-rows-2 md:flex flex-wrap gap-4 w-full h-fit'>
            {facilities.map((facility, idx) => (
              <FacilityCard key={idx} content={facility.content} title={facility.title} />
            ))}
          </motion.div>
        )}
        {activeTab === "location" && <RentMap location={house.location} caption={house.caption || 'هیج اطلاعاتی موجود نیست'} />}
        {activeTab === "reviews" && (
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}>
            <SingleReserveForm parent_comment={parent_comment} parent_comment_id={parent_comment_id} viewReply={viewReply} />
            <div className="my-[100px]">
              <SingleReserveComments setParent_comment={setParent_comment} setParent_comment_id={setParent_comment_id} setViewReply={setViewReply} />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
