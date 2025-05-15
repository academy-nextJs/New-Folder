import CommonButton from '@/components/common/buttons/common/CommonButton'
import FilterModal from '@/components/dashboard/modal/FilterModal'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const HeaderMyHouses = () => {
    return (
        <div className='flex w-full justify-between items-center'>
            <h2> املاک من </h2>
            <div className='flex gap-4'>
                <FilterModal />
                <div className='relative flex items-center'>
                    <Input className='bg-subBg2 px-4 py-2 rounded-2xl text-subText placeholder:text-subText text-sm min-w-[300px]' placeholder='جستجو اقامتگاه...' />
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
