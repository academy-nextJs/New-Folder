import { Button } from '@/components/ui/button'
import { IButton } from '@/types/buttons-type/buttons-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const ViewAllButton: FC<IButton> = ({ classname, onclick }) => {

    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-fit h-fit rounded-2xl text-sm flex flex-row-reverse bg-transparent border-subText border bg-none ${classname}`}>
                <ChevronLeft className={`text-foreground`} />
                مشاهده همه
            </Button>
        </div>
    )
}

export default ViewAllButton
