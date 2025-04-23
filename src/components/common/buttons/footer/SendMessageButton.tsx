'use client'
import { Button } from '@/components/ui/button'
import { ISendMessageButton } from '@/types/buttons-type/sendMessageButton-type'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'

const SendMessageButton: FC<ISendMessageButton> = ({ classname, onclick }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-[618px] h-[44px] border rounded-2xl text-sm flex text-white bg-accent-foreground ${classname}`}>
                <ChevronLeft className={`text-white`} />
                ارسال پیام
            </Button>
        </div>
    )
}

export default SendMessageButton
