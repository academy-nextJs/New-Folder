'use client'
import React, { FC } from "react";
import { MapPin, Star, Hotel, Bed, Car, Bath } from "lucide-react";
import CommonButton from "@/components/common/buttons/common/CommonButton";
import { IHouse } from "@/types/houses-type/house-type";
import { SplitNumber } from "@/utils/helper/spliter/SplitNumber";
import { redirect } from "next/navigation";
import { motion } from 'framer-motion'

interface IReserveContent {
    items: IHouse
}
const RentalCard : FC<IReserveContent> = ({ items }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }} className="flex flex-col md:flex-row xl:w-fit w-full overflow-hidden px-4 py-6 rounded-[16px] items-center group justify-between bg-secondary-light2">
            <div className="flex flex-col md:flex-row gap-4 md:w-4/5 w-full">
                <img
                    alt=""
                    src={items.photos[0]}
                    className="bg-secondary-light3 md:min- md:w-[228.35986328125px] w-full h-[144px] group-hover:shadow-[#8CFF451F] group-hover:shadow-2md group-hover:border group-hover:border-primary rounded-[16px]"
                />
                <div className="flex flex-col gap-4 items-start justify-between w-full">
                    <div className="bg-accent text-white text-sm flex gap-2 px-4 py-1 flex-row-reverse rounded-[8px]">
                        <span>{items.rate} ستاره</span>
                        <Star size={16} />
                    </div>
                    <h2 className="text-lg md:text-2xl"> {items.title} </h2>
                    <p className="flex text-subText gap-1 w-[295px] whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="flex gap-2 items-center">
                            <MapPin size={16} />
                            <span>آدرس:</span>
                        </span>
                        <span className="text-foreground text-ellipsis overflow-hidden whitespace-nowrap">
                            {items.address}
                        </span>
                    </p>
                    <p className="flex gap-2 text-sm items-center">
                        <span className="flex gap-2 flex-row-reverse"> {items.rooms} خوابه <Bed size={16} /> </span>
                        |
                        <span className="flex gap-2 flex-row-reverse"> {items.parking} پارکینگ <Car size={16} /> </span>
                        |
                        <span className="flex gap-2 flex-row-reverse"> {items.bathrooms} حمام <Bath size={16} /> </span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-end gap-8 h-full items-center md:w-1/5 w-full mt-4 md:mt-0">
                <span className="text-primary text-lg md:text-2xl">{SplitNumber(items.price)} ت</span>
                <CommonButton
                    onclick={() => redirect(`/rent/${items.id}`)}
                    icon={<Hotel />}
                    title="بررسی و رزرو هتل"
                    classname="flex-row-reverse py-3 md:py-5 bg-transparent group-hover:bg-primary text-primary group-hover:text-primary-foreground border border-primary w-full md:w-auto"
                />
            </div>
        </motion.div>
    );
};

export default RentalCard;
