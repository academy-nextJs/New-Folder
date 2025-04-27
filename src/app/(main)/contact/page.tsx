'use client'
import AboutBox from '@/components/contact-us/AboutBox'
import ContactForm from '@/components/contact-us/ContactForm'
import { AtSign, ChevronLeft, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {

  return (
    <div className='flex xl:flex-row flex-col gap-[100px] my-[50px] text-white'>
      <div className='flex gap-6 flex-col'>
        <div className='flex gap-3 items-center w-fit text-[13px]'>
          <Link href={`/`}> خانه </Link>
          <ChevronLeft className='text-[#AAAAAA]' size={20} />
          <Link href={`/contact-us`} className='text-primary'> ارتباط با ما </Link>
        </div>
        <div className="flex flex-row w-fit items-center gap-4 justify-end">
          <span className="xl:text-base text-primary text-sm"> ارتباط با ما </span>
          <div className='flex gap-1 justify-center items-center'>
            <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 9.73205C46.3333 8.96225 46.3333 7.03775 45 6.26795L39 2.80385C37.6667 2.03405 36 2.9963 36 4.5359L36 11.4641C36 13.0037 37.6667 13.966 39 13.1962L45 9.73205Z" fill="#8CFF45" />
              <path d="M23.75 9.29904C24.75 8.72169 24.75 7.27831 23.75 6.70096L19.25 4.10289C18.25 3.52554 17 4.24722 17 5.40192L17 10.5981C17 11.7528 18.25 12.4745 19.25 11.8971L23.75 9.29904Z" fill="#8CFF45" fillOpacity="0.5" />
              <path d="M6.5 8.86602C7.16667 8.48112 7.16667 7.51887 6.5 7.13397L3.5 5.40192C2.83333 5.01702 2 5.49815 2 6.26795L2 9.73205C2 10.5019 2.83333 10.983 3.5 10.5981L6.5 8.86602Z" fill="#8CFF45" fillOpacity="0.25" />
            </svg>
          </div>
        </div>
        <h2 className='xl:text-[32px] lg:text-[24px] text-[20px] font-[300]'> هر ساعت از شبانه روز که باشه ،<span className='font-semibold'> ما کنارتیم </span> ! </h2>
        <p className='font-[400] xl:text-base text-sm'> هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم ! </p>
        <AboutBox title='09229167194 - 098541612310' icon={<Phone />} />
        <AboutBox title='Delta@gmail.com' icon={<AtSign />} />
        <AboutBox title='گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده' icon={<AtSign />} />
      </div>
      <div className='bg-[#3B3B3B] mx-[100px] min-w-[387.89453125] rounded-[32px] h-[365.8563232421875] my-auto relative hidden xl:flex justify-center items-center'>
        <div className='w-[479] h-[340.15728759765625] bg-[#2D2D2D] rounded-[32px] absolute flex justify-center items-center'>
          <div className='bg-[#1C1C1C] w-[575] h-fit absolute rounded-[32px]'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='bg-[#1C1C1C] rounded-[32px] xl:hidden block'>
        <ContactForm />
      </div>
    </div>
  )
}

export default page
