import React from "react";
import { MapPin, Clock, Star, Hotel } from "lucide-react";
import CommonButton from "@/components/common/buttons/common/CommonButton";

const ReserveCard = () => {
    return (
        <div className="flex flex-col md:flex-row w-full border-b-2 bg-transparent py-6 items-center group justify-between border-[#3B3B3B]">
            <div className="flex flex-col md:flex-row gap-4 md:w-4/5 w-full">
                <img
                    alt=""
                    src=" "
                    className="bg-secondary-light3 md:min- md:w-[228.35986328125px] w-full h-[144px] group-hover:shadow-[#8CFF451F] group-hover:shadow-2md group-hover:border group-hover:border-primary rounded-[16px]"
                />
                <div className="flex flex-col gap-4 items-start justify-between w-full">
                    <div className="bg-accent text-sm flex gap-2 px-4 py-1 flex-row-reverse rounded-[8px]">
                        <span>5 ستاره</span>
                        <Star size={16} />
                    </div>
                    <h2 className="text-lg md:text-2xl">هتل سراوان رانین رشت</h2>
                    <p className="flex text-subText gap-1 whitespace-nowrap overflow-hidden w-full text-ellipsis">
                        <span className="flex gap-2 items-center">
                            <MapPin size={16} />
                            <p>آدرس:</p>
                        </span>
                        <p className="text-white text-ellipsis overflow-hidden whitespace-nowrap">
                            گیلان، رشت، میدان آزادی، جنب چهار راه عظ
                        </p>
                    </p>
                    <p className="flex text-subText gap-1">
                        <span className="flex gap-2 items-center">
                            <Clock size={16} />
                            <p>مدت زمان:</p>
                        </span>
                        <p className="text-white">6 شب</p>
                    </p>
                </div>
            </div>

            <div className="flex flex-col justify-end gap-8 h-full items-center md:w-1/5 w-full mt-4 md:mt-0">
                <span className="text-primary text-lg md:text-2xl">15.000.000 ت</span>
                <CommonButton
                    icon={<Hotel />}
                    title="بررسی و رزرو هتل"
                    classname="flex-row-reverse py-3 md:py-5 bg-transparent group-hover:bg-primary text-primary group-hover:text-black border border-primary w-full md:w-auto"
                />
            </div>
        </div>
    );
};

export default ReserveCard;
