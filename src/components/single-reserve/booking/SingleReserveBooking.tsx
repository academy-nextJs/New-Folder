'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import DatePickerInput from '@/components/common/inputs/datePicker/DatePickerInput'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { ChevronLeft, Coins, House, Minus, Plus } from 'lucide-react'
import React, { FC, useState } from 'react'

interface IProps {
    discountedPrice?: number;
    price: string;
}

const SingleReserveBooking: FC<IProps> = ({ discountedPrice, price }) => {
    const [count, setCount] = useState(0)
    const discount_percentage = discountedPrice ? Math.ceil(((Number(price) - discountedPrice) / Number(price)) * 100) : 0

    return (
        <div className='bg-secondary-light2 px-6 gap-4 rounded-[32px] pb-[20px] flex flex-col items-center justify-center h-fit w-3/12'>
            <div className='rounded-b-[32px] bg-subBg2 h-[49] mb-[20px] w-2/3 flex gap-2 justify-center items-center text-base flex-row-reverse'> رزرو خونه برای : <House size={20} /> </div>
            <DatePickerInput
                label='تاریخ رفت '
                className='w-[100%] text-sm'
                placeholder='تاریخ رفت را انتخاب کنید'
            />
            <DatePickerInput
                label='تاریخ برگشت'
                placeholder='تاریخ برگشت را انتخاب کنید'
                className='text-sm w-[100%]'
            />
            <div className='w-full relative'>
                <CommonInput
                    value={count}
                    type='number'
                    label='تعداد مسافران'
                    classname='w-full border-subText'
                    color='text-subText'
                />
                <div className='flex w-fit gap-4 justify-between absolute left-4 top-9'>
                    <CommonButton onclick={() => setCount(count + 1)} icon={<Plus />} classname='size-[24px] rounded-[4px] text-primary-foreground' />
                    <span className='text-lg'> {count} </span>
                    <CommonButton onclick={() => setCount(count - 1)} icon={<Minus />} classname='size-[24px] rounded-[4px] text-primary-foreground' />
                </div>
            </div>
            <div className='w-full flex items-center flex-col'>
                <div className='border border-[#646464] w-full mt-[20px]'></div>
                <div className='rounded-b-[32px] bg-subBg2 h-[49] w-2/3 flex gap-2 justify-center items-center text-base flex-row-reverse'> قیمت های رزرو <Coins size={20} /> </div>
            </div>
            <div className='flex flex-col gap-4 items-end w-full'>
                <div className='flex gap-4'>
                    {discountedPrice && <div className='text-subText line-through'> {SplitNumber(price)} </div>}
                    {discountedPrice && <div className='bg-danger rounded-[12px] px-4 text-sm py-1 w-fit'> %{discount_percentage} </div>}
                </div>
                <div className='text-primary text-[24px]'> {discountedPrice ? SplitNumber(discountedPrice) : SplitNumber(price)} ت </div>
            </div>
            <CommonButton icon={<ChevronLeft size={16} />} title='همین الان رزرو کن' classname='w-full text-primary-foreground' />

        </div >
    )
}

export default SingleReserveBooking
