'use client'
import { Button } from '@/components/ui/button'
import { IAuthSubmitButton } from '@/types/buttons-type/authSubmitButton-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const AuthSubmitButton: FC<IAuthSubmitButton> = ({ title, classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-[588.25] h-[44px] rounded-[12px] text-[16px] flex text-black bg-[#8CFF45] ${classname}`}>
                <ChevronLeft className={`text-black`} />
                {title}
            </Button>
        </div>
    )
}

export default AuthSubmitButton
