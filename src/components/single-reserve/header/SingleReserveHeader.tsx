/* eslint-disable @next/next/no-img-element */

'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { IHouse } from '@/types/houses-type/house-type'
import { ChevronLeft, Copy, MapPin, Share, Star } from 'lucide-react'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { showToast } from '@/core/toast/toast'

interface IProps {
    house: IHouse
}

const SingleReserveHeader: FC<IProps> = ({ house }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index)
    }

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

    return (
        <div className='flex gap-4 flex-col text-foreground'>
            <div className='flex gap-2 rtl text-sm items-center'>
                <Link href={'/'}> خانه </Link>
                <ChevronLeft size={16} />
                <Link href={'/reserve/reserve-house'}> رزرو </Link>
                <ChevronLeft size={16} />
                <div className='text-primary'> {house.title} </div>
            </div>
            <h2 className='text-[28px]'> {house.title} </h2>
            <div className='flex max-md:flex-wrap justify-between gap-4'>
                <p className="flex text-subText items-center gap-2 whitespace-nowrap overflow-hidden w-full text-ellipsis">
                    <span className="flex gap-2 items-center">
                        <MapPin size={16} />
                        <span>آدرس:</span>
                    </span>
                    <span className="text-foreground text-ellipsis overflow-hidden whitespace-nowrap w-[598]">
                        {house.address}
                    </span>
                </p>
                <div className='flex gap-5 items-center'>
                    <div className="bg-accent items-center text-white text-sm flex gap-2 px-4 py-1 flex-row-reverse rounded-[8px]">
                        <span className='whitespace-nowrap'>{house.rate} ستاره</span>
                        <Star size={16} />
                    </div>
                    |
                    <div className='flex gap-4'>
                        <CommonButton onclick={handleCopy} classname='bg-secondary-light2 text-secondary-foreground' icon={<Copy />} />
                        <CommonButton onclick={handleShare} classname='text-primary-foreground' icon={<Share />} />
                    </div>
                </div>
            </div>
            <div className='flex max-2xl:flex-col gap-6 mt-2'>
                <div className='2xl:w-11/12 w-full'>
                    <div className='w-full h-[444px] bg-secondary-light2 rounded-[40px] overflow-hidden flex items-center justify-center'>
                        <img
                            src={house.photos[currentIndex]}
                            alt={`house-photo-${currentIndex}`}
                            className='w-full h-full object-cover rounded-[40px]'
                        />
                    </div>
                </div>

                <div className='2xl:w-2/12 w-full flex flex-wrap gap-4 2xl:justify-between items-center'>
                    {[...Array(8)].map((_, index) => {
                        const photo = house.photos[index]

                        if (photo) {
                            return (
                                <motion.button
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                                    key={index}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={`rounded-[32px] h-[96px] w-[96px] overflow-hidden ${currentIndex === index ? 'ring-2 ring-primary' : ''
                                        }`}
                                >
                                    <img
                                        src={photo}
                                        alt={`thumb-${index}`}
                                        className='w-full h-full object-cover rounded-[32px]'
                                    />
                                </motion.button>
                            )
                        } else {
                            return (
                                <div
                                    key={index}
                                    className='rounded-[32px] 2xl:block hidden bg-secondary-light2 h-[96px] w-[96px] pointer-events-none'
                                />
                            )
                        }
                    })}
                </div>

            </div>
        </div>
    )
}

export default SingleReserveHeader
