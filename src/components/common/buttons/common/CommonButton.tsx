import { Button } from '@/components/ui/button'
import { IButton } from '@/types/buttons-type/buttons-type'
import React, { FC } from 'react'

const CommonButton: FC<IButton> = ({ title, classname, onclick, icon, type, disabled }) => {
    return (
        <Button variant={'scale'} disabled={disabled} type={type} onClick={onclick} className={`cursor-pointer rounded-[14px] flex text-black bg-primary ${classname}`}>
            {title}
            {icon}
        </Button>
    )
}

export default CommonButton
