import { Button } from '@/components/ui/button'
import { IIconButton } from '@/types/buttons-type/buttons-type'
import React, { FC } from 'react'

const IconButton: FC<IIconButton> = ({ onclick, icon, classname }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer rounded-[14px] flex text-black bg-[#8CFF45] ${classname}`}>
                {icon}
            </Button>
        </div>
    )
}

export default IconButton
