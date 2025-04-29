import { Clock } from 'lucide-react'
import React from 'react'
import CountdownTimer from '@/utils/helper/Timer/CountdownTimer'
import CallSlider from './CallSlider'

const SpecialOffer = () => {

  return (
    <div className="w-full h-fit bg-secondary-light px-8 py-12 rounded-[40px] relative">
      <div className="
        after:content-['']
        after:absolute after:right-0 after:top-[-50px]
        after:w-[220px] after:h-[80px]
        after:bg-secondary-light
        after:rounded-tr-[40px] after:rounded-tl-[70px]
      ">
        <div className="bg-danger text-white px-4 py-2 w-fit z-[1] absolute rounded-2xl flex gap-2 items-center right-[25px] top-[-35px]">
          <CountdownTimer initialSeconds={36000} classname='text-lg' /> <Clock size={16} />
        </div>

        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <div className="flex flex-row w-fit items-center gap-4 justify-end">
              <span className="text-primary text-sm"> پیشنهادات برای شما </span>
              <div className='flex gap-1 justify-center items-center'>
                <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45 9.73205C46.3333 8.96225 46.3333 7.03775 45 6.26795L39 2.80385C37.6667 2.03405 36 2.9963 36 4.5359L36 11.4641C36 13.0037 37.6667 13.966 39 13.1962L45 9.73205Z" fill="#8CFF45" />
                  <path d="M23.75 9.29904C24.75 8.72169 24.75 7.27831 23.75 6.70096L19.25 4.10289C18.25 3.52554 17 4.24722 17 5.40192L17 10.5981C17 11.7528 18.25 12.4745 19.25 11.8971L23.75 9.29904Z" fill="#8CFF45" fillOpacity="0.5" />
                  <path d="M6.5 8.86602C7.16667 8.48112 7.16667 7.51887 6.5 7.13397L3.5 5.40192C2.83333 5.01702 2 5.49815 2 6.26795L2 9.73205C2 10.5019 2.83333 10.983 3.5 10.5981L6.5 8.86602Z" fill="#8CFF45" fillOpacity="0.25" />
                </svg>
              </div>
            </div>

            <div className='flex justify-between w-full items-center'>
              <h2 className='lg:text-[28px] md:text-xl text-base font-[500]'> پیشنهادات ویژه </h2>
            </div>
          </div>

          <CallSlider />
        </div>

      </div>
    </div>
  )
}

export default SpecialOffer
