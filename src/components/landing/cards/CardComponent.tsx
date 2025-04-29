import { ICard } from '@/types/card-type/card-types'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { Bath, Bed, Car, MapPin, Trees } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

const CardComponent: FC<ICard> = ({ view, image, rate, title, address, rooms, parking, bathrooms, transaction_type, price, id, discountedPrice, categories }) => {
    const discount_percentage = discountedPrice ? Math.ceil(((Number(price) - discountedPrice) / Number(price)) * 100) : 0

    return (
        <motion.div className='flex flex-col gap-4 text-white group w-fit h-full my-10 mx-auto'>
            <div className='relative '>
                <div className="bg-secondary-light2 w-full p-4 group-hover:bg-primary relative h-[190] rounded-[24px] flex justify-center items-center after:content-['']
                        after:w-[90px] after:h-[50px] after:group-hover:bg-primary after:absolute after:top-[-34] after:rounded-tr-2xl after:rounded-tl-[40px] after:right-0 after:bg-secondary-light2">
                    <div className='px-2 py-1 bg-white text-sm z-[100] absolute top-[-20px] right-[10] text-black font-bold flex flex-row-reverse justify-center items-center gap-1 rounded-[10px]'>
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#363636" />
                        </svg>
                        {rate}
                    </div>
                    <div className='bg-secondary-light2 cursor-pointer text-white px-2 text-sm rounded-[10px] absolute top-[-30] left-0'>
                        <Link href={`/houses/${id}`}> <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="45" height="22" rx="8" fill="#393939" />
                            <path d="M11.4697 10.4697C11.1768 10.7626 11.1768 11.2374 11.4697 11.5303L16.2426 16.3033C16.5355 16.5962 17.0104 16.5962 17.3033 16.3033C17.5962 16.0104 17.5962 15.5355 17.3033 15.2426L13.0607 11L17.3033 6.75736C17.5962 6.46447 17.5962 5.98959 17.3033 5.6967C17.0104 5.40381 16.5355 5.40381 16.2426 5.6967L11.4697 10.4697ZM33 10.25L12 10.25L12 11.75L33 11.75L33 10.25Z" fill="white" />
                        </svg> </Link>
                    </div>
                    <div className='relative w-full h-full flex justify-center'>
                        <img alt={``} src={`${image}` || ''} className='bg-[#444444] w-full h-[full] rounded-[20px]' width={234} height={154} />
                        {!image && <svg className='absolute bottom-5' width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.73205 3C8.96225 1.66667 7.03775 1.66667 6.26795 3L2.80385 9C2.03405 10.3333 2.9963 12 4.5359 12L11.4641 12C13.0037 12 13.966 10.3333 13.1962 9L9.73205 3Z" fill="white" />
                            <circle cx="28" cy="8" r="4" fill="#D9D9D9" />
                            <circle cx="44" cy="8" r="4" fill="#D9D9D9" />
                            <circle cx="60" cy="8" r="4" fill="#D9D9D9" />
                            <circle cx="76" cy="8" r="4" fill="#D9D9D9" />
                        </svg>
                        }
                    </div>
                </div>
            </div>
            <h2 className='text-[16px] flex justify-between'> <span className='flex gap-2 flex-wrap whitespace-nowrap'> {title} <p className='text-subText'> ( {categories.name} ) </p> </span> {discountedPrice && <div className='bg-danger rounded-[12px] px-4 text-sm py-1 w-fit'> %{discount_percentage} </div>} </h2>
            {view === '2' && <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 text-[#AAAAAA] h-[40px] text-sm items-center'>
                        <MapPin size={20} />
                        {address}
                    </div>
                    <div className="flex flex-row flex-wrap items-center text-sm text-[#AAAAAA] gap-1">
                        <span className='flex gap-1'> <Bed size={20} /> <p> {rooms} </p> <p> خوابه </p> </span> |
                        <span className='flex gap-1'> <Car size={20} /> <p> {parking} </p> <p> پارکینگ </p> </span> |
                        <span className='flex gap-1'> <Bath size={20} /> <p> {bathrooms} </p> <p> حمام </p> </span> |
                        <span className='flex gap-1'> <Trees size={20} /> <p> حیاط </p> </span>
                    </div>
                </div>
                <div className='bg-[#444444] group-hover:bg-primary group-hover:text-black text-[#AAAAAA] mt-2 flex flex-wrap justify-between rounded-[12px] w-full px-4 py-2 text-sm'>
                    <span className={` ${discountedPrice && 'text-[#AAAAAA] line-through'} whitespace-nowrap `}> {discountedPrice ? SplitNumber(Number(price)) + ' ت' : (transaction_type === 'rental' && "  اجاره ماهیانه : ") || (transaction_type === "direct_purchase" && " قیمت خرید : ") || (transaction_type === "mortgage" && " قیمت رهن : ")} </span>
                    <span className='flex whitespace-nowrap'> <p className={`text-white group-hover:text-[#444444]`}> {discountedPrice ? SplitNumber(discountedPrice) : SplitNumber(price || '')} ت </p>{transaction_type === 'rental' && " /هر ماه  "} </span>
                </div>
            </div>}
        </motion.div>
    )
}

export default CardComponent
