'use client'
import { Button } from '@/components/ui/button'
import { IButton } from '@/types/buttons-type/buttons-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const ViewAllButton: FC<IButton> = ({ classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-fit h-fit border border-white rounded-2xl text-sm flex flex-row-reverse dark:text-white md:text-white text-black dark:bg-transparent md:bg-secondary-static bg-none ${classname}`}>
                <ChevronLeft className={`dark:text-white md:text-white text-black`} />
                مشاهده همه
            </Button>
        </div>
    )
}

export default ViewAllButton
