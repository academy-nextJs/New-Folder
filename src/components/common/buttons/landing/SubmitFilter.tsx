'use client'
import { Button } from '@/components/ui/button'
import React, { FC } from 'react'
import { Search } from 'lucide-react'
import { ISubmitFilter } from '@/types/buttons-type/submitFilter-type'

const SubmitFilter: FC<ISubmitFilter> = ({ onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer w-[134px] h-[59px] rounded-2xl text-[16px] text-black bg-[#8CFF45]`}>
                جستجو کن
                <Search className={`text-black`} />
            </Button>
        </div>
    )
}

export default SubmitFilter
