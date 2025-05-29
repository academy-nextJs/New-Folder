import CommonInput from '@/components/common/inputs/common/CommonInput'
import FilterModalPayment from '@/components/dashboard/modal/FilterModalPayment'
import { Category } from '@/types/categories-type/categories-type'
import { getCategories } from '@/utils/service/api/categories'
import React from 'react'

const FavoritesHeader = async () => {

    const categories = await getCategories() as Category[]
    const selectItems = categories.map((category) => ({
        label: category.name,
        value: category.name
    }))

    return (
        <div className='flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center'>
            <h2> لیست علاقه مندی ها </h2>
            <div className='flex gap-4 max-md:flex-col md:w-fit w-full items-end'>
                <div className='relative flex items-center max-md:w-full'>
                    <CommonInput classname='text-subText placeholder:subText border-subText md:w-[400px] w-full' color='text-subText' label='جستجو' placeholder='نام مسافر مورد نظر .....' />
                </div>
                <FilterModalPayment categories={selectItems} />
            </div>
        </div>
    )
}

export default FavoritesHeader
