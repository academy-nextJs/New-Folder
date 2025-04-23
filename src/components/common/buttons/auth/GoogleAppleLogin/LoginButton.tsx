'use client'
import { Button } from '@/components/ui/button'
import { ILoginButton } from '@/types/buttons-type/loginButton-type'
import Image from 'next/image'
import React, { FC } from 'react'
import Google from '@/assets/google.png'
import Apple from '@/assets/apple.png'

const LoginButton: FC<ILoginButton> = ({ title, classname, onclick, icon }) => {
    return (
        <div>
            <Button variant={'scale'} onClick={onclick} className={`cursor-pointer px-4 py-2 w-[278.1300048828125px] justify-center items-center h-[48px] rounded-[12px] text-[16px] flex text-black bg-[#8CFF45] ${classname}`}>
                {title}
                {icon === 'google' ? <Image alt='' src={Google} className='size-[24px]' /> : <Image alt='' src={Apple} className='size-[24px]' />}
            </Button>
        </div>
    )
}

export default LoginButton
