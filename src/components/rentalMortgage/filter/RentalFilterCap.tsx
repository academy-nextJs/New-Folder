import CommonInput from '@/components/common/inputs/common/CommonInput'
import React, { FC } from 'react'

interface IProps {
    setMinRent: React.Dispatch<React.SetStateAction<number | "">>
    setMaxRent: React.Dispatch<React.SetStateAction<number | "">>
    setMinMortgage: React.Dispatch<React.SetStateAction<number | "">>
    setMaxMortgage: React.Dispatch<React.SetStateAction<number | "">>
    setMinArea: React.Dispatch<React.SetStateAction<number | "">>
    setMaxArea: React.Dispatch<React.SetStateAction<number | "">>
}

const RentalFilterCap: FC<IProps> = ({
    setMaxArea, setMaxMortgage, setMaxRent, setMinArea, setMinMortgage, setMinRent
}) => {
    return (
        <div className='flex xl:flex-row flex-col gap-4 border-b py-8 border-muted items-end'>
            <div className='flex gap-4 max-xl:w-full'>
                <div className='w-1/2'>
                    <CommonInput
                        onchange={(e) => setMinMortgage(e.target.valueAsNumber)}
                        placeholder='0 تومن'
                        type='number'
                        label='حداقل رهن'
                        classname='px-4 py-3 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    />
                </div>
                <div className='w-1/2'>
                    <CommonInput
                        onchange={(e) => setMaxMortgage(e.target.valueAsNumber)}
                        placeholder='0 تومن'
                        type='number'
                        label='حداکثر رهن'
                        classname='px-4 py-3 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    /></div>
            </div>
            <div className='h-[30px] max-xl:hidden border relative bottom-2 border-subText'></div>
            <div className='flex gap-4 max-xl:w-full'>
                <div className='w-1/2'>
                    <CommonInput
                        onchange={(e) => setMinRent(e.target.valueAsNumber)}
                        placeholder='0 تومن'
                        type='number'
                        label='حداقل اجاره'
                        classname='px-4 py-3 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    />
                </div>
                <div className='w-1/2'>
                    <CommonInput
                        onchange={(e) => setMaxRent(e.target.valueAsNumber)}
                        placeholder='0 تومن'
                        type='number'
                        label='حداکثر اجاره'
                        classname='px-4 py-3 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    />
                </div>
            </div>
            <div className='h-[30px] max-xl:hidden border relative bottom-2 border-subText'></div>
            <div className='flex gap-4 max-xl:w-full'>
                <div className='w-1/2'>
                    <CommonInput
                        onchange={(e) => setMinArea(e.target.valueAsNumber)}
                        placeholder='0 متر'
                        type='number'
                        label='حداقل متراژ'
                        classname='px-4 py-3 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    />
                </div>
                <div className='w-1/2'>
                    <CommonInput
                        onchange={(e) => setMaxArea(e.target.valueAsNumber)}
                        placeholder='0 متر'
                        type='number'
                        label='حداکثر متراژ'
                        classname='px-4 py-3 border-subText w-full dark:group-hover:text-white dark:group-hover:border-white outline-none'
                    /></div>
            </div>
        </div>
    )
}

export default RentalFilterCap
