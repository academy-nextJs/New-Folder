'use client'
import { Button } from '@/components/ui/button'
import { IButton } from '@/types/buttons-type/buttons-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const ViewAllButton: FC<IButton> = ({ classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-fit h-fit dark:border border-white border-none rounded-2xl text-sm flex flex-row-reverse text-white dark:bg-transparent bg-secondary-static ${classname}`}>
                <ChevronLeft className={`text-white`} />
                مشاهده همه
            </Button>
        </div>
    )
}

export default ViewAllButton
