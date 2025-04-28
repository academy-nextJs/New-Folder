import React from 'react'
import ViewAllButton from '../common/buttons/common/ViewAllButton'
import SliderComponent from './sliders/SliderComponent'
import { fetchApi } from '@/core/interceptore/fetchApi'

const RealStateTraveling = async () => {
    const houses = await fetchApi.get('/houses?sort=last_updated&order=DESC')

    return (
        <div className='w-full h-fit flex flex-col gap-4'>
            <div className='flex gap-1 items-center'>
                <div className="flex flex-row w-fit items-center gap-4">
                    <span className="text-primary text-sm"> خونه از خودت میخوای ! </span>
                    <div className='flex gap-1 justify-center items-center'>
                        <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45 9.73205C46.3333 8.96225 46.3333 7.03775 45 6.26795L39 2.80385C37.6667 2.03405 36 2.9963 36 4.5359L36 11.4641C36 13.0037 37.6667 13.966 39 13.1962L45 9.73205Z" fill="#8CFF45" />
                            <path d="M23.75 9.29904C24.75 8.72169 24.75 7.27831 23.75 6.70096L19.25 4.10289C18.25 3.52554 17 4.24722 17 5.40192L17 10.5981C17 11.7528 18.25 12.4745 19.25 11.8971L23.75 9.29904Z" fill="#8CFF45" fillOpacity="0.5" />
                            <path d="M6.5 8.86602C7.16667 8.48112 7.16667 7.51887 6.5 7.13397L3.5 5.40192C2.83333 5.01702 2 5.49815 2 6.26795L2 9.73205C2 10.5019 2.83333 10.983 3.5 10.5981L6.5 8.86602Z" fill="#8CFF45" fillOpacity="0.25" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='flex justify-between w-full flex-wrap items-center gap-4'>
                    <div className='flex gap-4'>
                        <h2 className='lg:text-2xl md:text-xl text-base font-[500]'> خرید و فروش ملک در دلتا </h2>
                    </div>
                    <ViewAllButton classname='max-md:border-none max-md:p-0' />
                </div>
            </div>
            <div className='w-full'>
                <SliderComponent items={houses} view='1' />
            </div>
        </div>
    )
}

export default RealStateTraveling
