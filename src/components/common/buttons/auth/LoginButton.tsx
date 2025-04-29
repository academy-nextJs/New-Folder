'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { FC } from 'react'
import Google from '@/assets/google.png'
import Apple from '@/assets/apple.png'
import { ILoginButton } from '@/types/buttons-type/buttons-type'

const LoginButton: FC<ILoginButton> = ({ title, classname, onclick, icon }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 flex-row-reverse py-4 w-full justify-center items-center rounded-[12px] text-[16px] flex gap-3 text-black bg-primary ${classname}`}>
                {title}
                {icon === 'google' ? <Image alt='' src={Google} className='w-[24px]' /> : <Image alt='' src={Apple} className='w-[24px]' />}
            </Button>
        </div>
    )
}

export default LoginButton
