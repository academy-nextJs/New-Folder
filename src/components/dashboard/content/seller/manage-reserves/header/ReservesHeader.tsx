
import CommonInput from '@/components/common/inputs/common/CommonInput'
import FilterModal from '@/components/dashboard/modal/FilterModal'
import React from 'react'

const ReservesHeader = () => {
    return (
        <div className='flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center'>
            <h2> لیست رزرو  های مشتریان </h2>
            <div className='flex gap-4 max-md:flex-col md:w-fit w-full items-end'>
                <div className='relative flex items-center max-md:w-full'>
                    <CommonInput classname='text-subText placeholder:subText border-subText w-[400px]' color='text-subText' label='جستجو' placeholder='نام مسافر مورد نظر .....' />
                </div>
                <FilterModal />
            </div>
        </div>
    )
}

export default ReservesHeader
