import CommonInput from '@/components/common/inputs/common/CommonInput'
import FilterModalReserve from '@/components/dashboard/modal/FilterModalReserve'
import React from 'react'
import { useTranslations } from 'next-intl'

const ReservesHeader = () => {
    const t = useTranslations('dashboardSeller.reserves')
    return (
        <div className='flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center'>
            <h2>{t('title')}</h2>
            <div className='flex gap-4 max-md:flex-col md:w-fit w-full items-end'>
                <div className='relative flex items-center max-md:w-full'>
                    <CommonInput
                        classname='text-subText placeholder:subText border-subText md:w-[400px] w-full'
                        color='text-subText'
                        label={t('search')}
                        placeholder={t('searchPlaceholder')}
                    />
                </div>
                <FilterModalReserve />
            </div>
        </div>
    )
}

export default ReservesHeader