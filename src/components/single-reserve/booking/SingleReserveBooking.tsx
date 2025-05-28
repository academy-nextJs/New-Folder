'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import DatePickerInput from '@/components/common/inputs/datePicker/DatePickerInput'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { ChevronLeft, Coins, House, Minus, Plus } from 'lucide-react'
import React, { FC, useState } from 'react'
import jalaali from 'jalaali-js'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface IProps {
    discountedPrice?: number;
    price: string;
}

const SingleReserveBooking: FC<IProps> = ({ discountedPrice, price }) => {
    const t = useTranslations('singleReserve.booking');
    const [count, setCount] = useState(0)
    const [startDate, setStartDate] = useState<string>('')
    const [endDate, setEndDate] = useState<string>('')

    const discount_percentage = discountedPrice ? Math.ceil(((Number(price) - discountedPrice) / Number(price)) * 100) : 0

    const convertToGregorian = (year: number, month: number, day: number): string => {
        const { gy, gm, gd } = jalaali.toGregorian(year, month, day)
        return `${gy}-${gm.toString().padStart(2, '0')}-${gd.toString().padStart(2, '0')}`
    }

    const handleSubmit = () => {
        const reservedDates = [startDate, endDate]
        console.log(reservedDates)
    }

    return (
        <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='bg-secondary-light2 px-6 gap-4 rounded-[32px] pb-[20px] flex flex-col items-center justify-center h-fit xl:w-3/12 w-full'>
            <div className='rounded-b-[32px] bg-subBg2 h-[49] mb-[20px] w-2/3 flex gap-2 justify-center items-center text-base max-xl:text-sm flex-row-reverse'>
                {t('reserveFor')} <House size={20} />
            </div>

            <DatePickerInput
                label={t('startDate')}
                className='w-[100%] text-sm'
                placeholder={t('startDatePlaceholder')}
                onChange={(e) => {
                    if (e) {
                        const gDate = convertToGregorian(e.year, e.month.number, e.day)
                        setStartDate(gDate)
                    }
                }}
            />

            <DatePickerInput
                label={t('endDate')}
                placeholder={t('endDatePlaceholder')}
                className='text-sm w-[100%]'
                onChange={(e) => {
                    if (e) {
                        const gDate = convertToGregorian(e.year, e.month.number, e.day)
                        setEndDate(gDate)
                    }
                }}
            />

            <div className='w-full relative'>
                <CommonInput
                    value={count}
                    onchange={(e) => setCount(e.target.valueAsNumber)}
                    type='number'
                    label={t('passengerCount')}
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
                <div className='rounded-b-[32px] bg-subBg2 h-[49] w-2/3 flex gap-2 justify-center items-center text-base max-xl:text-sm flex-row-reverse'>
                    {t('reservePrices')} <Coins size={20} />
                </div>
            </div>

            <div className='flex flex-col gap-4 items-end w-full'>
                <div className='flex gap-4'>
                    {discountedPrice && <div className='text-subText line-through'> {SplitNumber(price)} </div>}
                    {discountedPrice && <div className='bg-danger text-accent-foreground rounded-[12px] px-4 text-sm py-1 w-fit'> %{discount_percentage} </div>}
                </div>
                <div className='text-primary text-[24px]'>
                    {discountedPrice ? SplitNumber(discountedPrice) : SplitNumber(price)} {t('currency')}
                </div>
            </div>

            <CommonButton
                icon={<ChevronLeft size={16} />}
                title={t('reserveNow')}
                classname='w-full text-primary-foreground'
                onclick={handleSubmit}
            />
        </motion.div>
    )
}

export default SingleReserveBooking