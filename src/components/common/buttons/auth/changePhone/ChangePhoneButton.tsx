'use client'
import { Button } from '@/components/ui/button'
import { IChangePhoneButton } from '@/types/buttons-type/changephonebutton-type'
import { RefreshCcw } from 'lucide-react'
import React, { FC } from 'react'

const ChangePhoneButton: FC<IChangePhoneButton> = ({ classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-[278.1300048828125px] justify-center items-center border border-border h-[44px] rounded-[12px] text-[16px] flex text-white bg-accent-foreground ${classname}`}>
                {` تغییر شماره تلفن `}
                <RefreshCcw />
            </Button>
        </div>
    )
}

export default ChangePhoneButton
