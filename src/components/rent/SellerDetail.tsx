import { IHouse } from '@/types/houses-type/house-type'
import { convertToJalaliString } from '@/utils/helper/shamsiDate/ShamsDate'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Calendar, Phone, MessageCircle } from 'lucide-react'
import React, { FC } from 'react'

const SellerDetail: FC<{ house: IHouse }> = ({ house }) => {
    const jalaliDate = convertToJalaliString(house.last_updated)
    const rentPrice = SplitNumber(house.price)
    const mortgagePrice = SplitNumber(house.price)
    //   const maskedPhone = house.phone.replace(/^(\d{2})(\d{4})(\d{3})$/, '$1****$3')

    return (
        <div className="bg-secondary-light2 border-border border rounded-2xl p-4 shadow-md flex flex-col justify-between max-2xl:w-full w-2/12">
            <div className="text-center border-b border-subText pb-2 mb-3">
                <h2 className="text-sm font-bold flex items-center flex-row-reverse justify-center gap-2">
                    <Phone size={16} /> اطلاعات تماس
                </h2>
            </div>

            <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-full bg-subText mb-2" />

                <p className="font-semibold text-lg">{house.sellerName}</p>
                <p className="text-sm text-subText flex items-center gap-1">
                    {jalaliDate} <Calendar size={14} />
                </p>
            </div>

            <div className="mt-4 space-y-2 text-sm">
                {house.transaction_type === 'mortgage' && <div className="flex justify-between flex-row-reverse items-center text-primary">
                    <span>قیمت رهن از </span>
                    <span>{mortgagePrice} ت</span>
                </div>}
                {house.transaction_type === 'rental' && <div className="flex justify-between items-center flex-row-reverse text-primary">
                    <span>قیمت اجاره از </span>
                    <span>{rentPrice} ت</span>
                </div>}
            </div>

            <button className="bg-primary flex-row-reverse text-primary-foreground text-sm w-full py-2 mt-4 rounded-xl flex items-center justify-center gap-2">
                <Phone size={16} /> تماس با 09362728628
            </button>

            <button className="mt-2 w-full flex-row-reverse border border-white text-sm py-2 rounded-xl flex items-center justify-center gap-2">
                <MessageCircle size={16} /> گفتگو با فروشنده
            </button>
        </div>
    )
}

export default SellerDetail
