'use client'
import { Button } from '@/components/ui/button'
import { IButtonWithoutTitle } from '@/types/buttons-type/buttons-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const ViewAllButton: FC<IButtonWithoutTitle> = ({ classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-fit h-fit border border-white rounded-2xl text-sm flex text-white bg-transparent ${classname}`}>
                <ChevronLeft className={`text-white`} />
                مشاهده همه
            </Button>
        </div>
    )
}

export default ViewAllButton
