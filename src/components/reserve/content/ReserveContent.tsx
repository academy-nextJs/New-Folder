import CommonInput from '@/components/common/inputs/common/CommonInput'
import React from 'react'
import ReserveCard from '../card/ReserveCard'

const ReserveContent = () => {
    return (
        <div className='flex xl:flex-row flex-col gap-4 justify-between w-full xl:h-[1080px] overflow-hidden rounded-[40px] bg-secondary-light2 p-4'>
            <div className='flex gap-6 flex-col xl:w-3/5 w-full'>
                <div className='flex gap-4 w-full'>
                    <div className='flex gap-4 w-full'>
                        <div className='w-1/2'>
                            <CommonInput
                                label='حداقل قیمت'
                                classname='px-4 py-2 border-subText w-full group-hover:placeholder:text-white placeholder:text-subText group-hover:text-white group-hover:border-white outline-none'
                                color='text-subText group-hover:text-white'
                                placeholder='0                                                                                            تومان'
                            />
                        </div>
                        <div className='w-1/2'>
                            <CommonInput
                                label='حداکثر قیمت'
                                classname='px-4 py-2 border-subText w-full group-hover:placeholder:text-white placeholder:text-subText group-hover:text-white group-hover:border-white outline-none'
                                color='text-subText group-hover:text-white'
                                placeholder='0                                                                                            تومان'
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full border-2 border-[#4E4E4E]'>  </div>
                <div className='flex flex-col gap-6 static overflow-y-scroll'>
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                    <ReserveCard />
                </div>
            </div>
            <div className='bg-secondary-light3 rounded-[40px] xl:w-2/5 w-full h-[1032px] xl:block hidden'></div>
        </div>
    )
}

export default ReserveContent
