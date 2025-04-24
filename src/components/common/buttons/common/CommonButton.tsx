import { Button } from '@/components/ui/button'
import { IButtonWithIcon } from '@/types/buttons-type/buttons-type'
import React, { FC } from 'react'

const CommonButton: FC<IButtonWithIcon> = ({ title, classname, onclick, icon }) => {
    return (
        <Button variant={'scale'} onClick={onclick} className={`cursor-pointer rounded-[14px] flex text-black bg-[#8CFF45] ${classname}`}>
            {title}
            {icon}
        </Button>
    )
}

export default CommonButton
