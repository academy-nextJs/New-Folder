'use client'
import { Button } from '@/components/ui/button'
import { IViewAllButton } from '@/types/buttons-type/viewAllButton-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const ViewAllButton: FC<IViewAllButton> = ({ classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-[137px] h-[36px] border border-white rounded-2xl text-sm flex text-white bg-transparent ${classname}`}>
                <ChevronLeft className={`text-white`} />
                مشاهده همه
            </Button>
        </div>
    )
}

export default ViewAllButton
