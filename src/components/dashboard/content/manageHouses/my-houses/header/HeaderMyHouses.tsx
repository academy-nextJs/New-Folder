import CommonButton from '@/components/common/buttons/common/CommonButton'
import FilterModal from '@/components/dashboard/modal/FilterModal'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'

const HeaderMyHouses = () => {
    const t = useTranslations('dashboardSeller.myHouses')
    return (
        <div className='flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center'>
            <h2>{t('title')}</h2>
            <div className='flex gap-4 max-md:flex-col md:w-fit w-full'>
                <FilterModal />
                <div className='relative flex items-center max-md:w-full'>
                    <Input className='bg-subBg2 max-md:w-full px-4 py-2 rounded-2xl text-subText placeholder:text-subText text-sm md:min-w-[300px]' placeholder={t('searchPlaceholder')} />
                    <CommonButton
                        classname='absolute left-0'
                        icon={<Search size={20} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderMyHouses