/* eslint-disable */

import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import DatePickerInput from '@/components/common/inputs/datePicker/DatePickerInput'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Book, Calendar, ChevronLeft, Clock, Hotel, Map, Star, UserPlus, Users } from 'lucide-react'
import React from 'react'

const FirstStep = ({ handleCurrentStepIncrease }: { handleCurrentStepIncrease: () => void }) => {
    return (
        <div className='w-full flex flex-col gap-8'>


            <div className='w-full bg-secondary-light2 px-4 py-4 max-xl:flex-col rounded-2xl flex gap-16 justify-between'>
                <div className='flex gap-4 max-xl:flex-col'>
                    <img className='w-[156] h-[110] rounded-[20px] max-xl:w-full max-xl:h-[200px] bg-subBg2' src={"  "} alt='' />
                    <div className='flex flex-col gap-4'>
                        <div className='bg-accent w-fit text-accent-foreground px-4 py-1 flex gap-2 rounded-xl items-center text-sm'>
                            <Star size={16} />
                            5 ستاره
                        </div>
                        <h2 className='font-bold text-xl'> هتل سراوان رانین شهر </h2>
                        <div className='flex gap-2'>
                            <Map size={16} className='text-subText' />
                            <span className='text-sm'> <span className='text-subText'> آدرس: </span> گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ.... </span>
                        </div>
                    </div>
                </div>
                <svg className='max-xl:hidden' width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="107.911" x2="1" y2="0.0888671" stroke="#565656" strokeWidth="2" />
                </svg>
                <div className='flex flex-col justify-center max-xl:items-start items-center gap-4'>
                    <div className='text-subText flex gap-2 text-sm items-center'>
                        <Calendar size={16} />
                        <span className='text-primary'> <span className='text-subText'> تاریخ ورود </span> 12 / 05 / 1403 - ساعت 15:30 ب.ظ </span>
                    </div>
                    <div className='text-subText flex gap-2 text-sm items-center'>
                        <Calendar size={16} />
                        <span className='text-primary'> <span className='text-subText'> تاریخ خروج </span> 12 / 05 / 1403 - ساعت 15:30 ب.ظ </span>
                    </div>
                </div>
                <svg className='max-xl:hidden' width="2" height="108" viewBox="0 0 2 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1" y1="107.911" x2="1" y2="0.0888671" stroke="#565656" strokeWidth="2" />
                </svg>
                <div className='ltr flex flex-col gap-4 justify-center'>
                    <div className='flex gap-2 items-center'>
                        <span className='text-primary flex flex-row text-2xl font-bold'> <span> ت </span> {SplitNumber(15000000)} </span>
                        <div className='bg-danger text-accent-foreground px-2 py-1 rounded-full text-sm'> %22 </div>
                        <span className='text-subText flex flex-row text-sm font-bold'> <span> ت </span> {SplitNumber(15000000)} </span>
                    </div>
                    <CommonButton title={"تغییر هتل"} icon={<Hotel size={16} />} classname='bg-transparent border-primary border w-fit text-primary' />
                </div>
            </div>


            <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
                <div className='w-full bg-subBg2 rounded-2xl flex-wrap gap-4 px-4 py-2 flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Users size={20} />
                        <span> مشخصات مسافران </span>
                    </div>
                    <div className='flex text-primary gap-3 items-center'>
                        <Clock size={20} />
                        <span> انتخاب مسافران سابق </span>
                    </div>
                </div>
                <div className='w-full gap-4 max-lg:flex-col flex justify-around px-4'>
                    <div className='w-1/5 max-lg:w-full'>
                        <CommonInput placeholder=' محمد رضا ساداتی ' label='نام شما' classname='text-subText w-full placeholder:text-subText border-subText' color='text-subText' />
                    </div>
                    <div className='w-1/5 max-lg:w-full'>
                        <CommonInput placeholder=' ' label='نام خانوادگی' classname='text-subText w-full placeholder:text-subText border-subText' color='text-subText' />

                    </div>
                    <div className='w-1/5 max-lg:w-full'>
                        <CommonSelect selectItems={[
                            { label: "مرد", value: "man" },
                            { label: "زن", value: "woman" },
                        ]} placeholder='جنیست را انتخاب کنید' label='جنسیت شما' classname='text-subText w-full py-6 placeholder:text-subText border-subText' color='text-subText' />

                    </div>
                    <div className='w-1/5 max-lg:w-full'>
                        <CommonInput placeholder=' ' label='کد ملی' classname='text-subText w-full placeholder:text-subText border-subText' color='text-subText' />

                    </div>
                    <div className='w-1/5 max-lg:w-full'>
                        <DatePickerInput label='تاریخ تولد' className=' w-full' />

                    </div>
                </div>
                <svg width="" height="5" className='mx-4' viewBox="0 0 1330 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1329 1L1.00004 1" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeDasharray="7 7" />
                </svg>
                <div className='w-full justify-end flex px-4 pb-2'>
                    <CommonButton title={" افزودن مسافر "} icon={<UserPlus size={16} />} classname='bg-transparent flex-row-reverse border-primary border w-fit text-primary' />
                </div>
            </div>


            <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
                <div className='w-full bg-subBg2 rounded-2xl px-4 py-2 flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <Users size={20} />
                        <span>ارسال بلیط به دیگری <span className='text-primary'> ( ارسال بلیط به ایمیل و شماره همراه دیگر ) </span></span>
                    </div>
                </div>
                <div className='w-full justify-between items-end flex-wrap gap-8 flex px-4 pb-2'>
                    <div className='flex gap-4 max-md:flex-col'>
                        <CommonInput placeholder=' 09367677627 ' label="شماره تلفن" classname='text-subText w-full rounded-full placeholder:text-subText border-subText' color='text-subText' />
                        <CommonInput label="ایمیل" classname='text-subText w-full rounded-full placeholder:text-subText border-subText' color='text-subText' />
                    </div>
                    <CommonButton title={" افزودن مسافر "} icon={<UserPlus size={16} />} classname='bg-transparent cl flex-row-reverse border-primary border w-fit text-primary' />
                </div>
            </div>


            <div className='relative w-full max-lg:mt-[30px] flex justify-center items-center'>
                <svg className='max-lg:hidden' width="100%" height="84" viewBox="0 0 1376 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="100%" height="82" rx="31" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeDasharray="16 16" />
                </svg>
                <div className='w-full flex absolute justify-between flex-wrap gap-4 max-w-[1300px] px-4 py-2 text-lg md:text-2xl'>
                    <div className='flex gap-3 items-center'>
                        <Book size={20} />
                        <span> قیمت بلیط <span className='text-primary'> {SplitNumber(1500000)} <span> ت </span> </span></span>
                    </div>
                    <CommonButton onclick={handleCurrentStepIncrease} title={" تایید و ادامه فرایند "} icon={<ChevronLeft size={16} />} classname='bg-transparent flex border-primary border w-fit text-primary' />
                </div>
            </div>

        </div>
    )
}

export default FirstStep
