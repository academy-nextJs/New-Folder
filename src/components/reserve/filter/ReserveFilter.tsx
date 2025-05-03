import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Filter, MapPin, Megaphone } from 'lucide-react'
import React from 'react'

const ReserveFilter = () => {
    return (
        <div className='bg-secondary-light2 w-full md:flex-nowrap flex-wrap gap-4 rounded-[24px] px-4 py-3 flex justify-between'>
            <div className='flex md:flex-row md:flex-wrap flex-col w-full gap-4'>
                <CommonSelect
                    placeholder='استان ، شهر ، هتل ....'
                    icon={<MapPin size={16} />}
                    selectItems={[]}
                    color='text-subText group-hover:text-white'
                    label='مقصد یا  هتل شما '
                    classname='px-4 py-5 border-subText w-full group-hover:text-white group-hover:border-white outline-none'
                />
                <CommonSelect
                    placeholder="جدید ترین ها"
                    icon={<Filter size={16} />}
                    selectItems={[]}
                    color='text-subText group-hover:text-white'
                    label='مرتب سازی بر اساس'
                    classname='px-4 py-5 border-subText w-full group-hover:text-white group-hover:border-white outline-none'
                />
                <CommonInput
                    label='جستجو'
                    classname='px-4 py-2 border-subText xl:w-[600px] w-full group-hover:placeholder:text-white placeholder:text-subText group-hover:text-white group-hover:border-white outline-none'
                    color='text-subText group-hover:text-white'
                    placeholder='نام هتل مورد نظر .....'
                />

            </div>
            <div className='flex gap-4 justify-center items-center'>
                <div className='px-4 py-2 border md:mx-0 mx-auto border-card-foreground items-center justify-center rounded-[16px] flex flex-nowrap gap-2 text-sm'>
                    <Megaphone size={20} />
                    <span className='whitespace-nowrap'> تعداد آگهی : 33 </span>
                </div>
                <CommonButton icon={<MapPin />} title='نقشه' classname='bg-transparent border-foreground border text-foreground flex xl:hidden' />
            </div>
        </div>
    )
}

export default ReserveFilter
