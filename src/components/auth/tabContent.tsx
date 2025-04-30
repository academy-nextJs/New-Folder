'use client'
import React, { FC, ReactNode } from 'react'
import LoginButton from '@/components/common/buttons/auth/LoginButton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginForm from '@/components/auth/loginForm'

interface IProps {
    defaultValue: "register" | "login";
    registerElement: ReactNode;
}

const TabContent: FC<IProps> = ({ defaultValue, registerElement }) => {
  return (
    <Tabs defaultValue={defaultValue} className='rtl'>
        <TabsList className='bg-subBg text-subText w-full mt-[20px]' >
          <TabsTrigger value="login" className='bg-subBg w-1/2'> ورود به حساب کاربری </TabsTrigger>
          <TabsTrigger value="register" className='bg-subBg w-1/2'> ساخت حساب کاربری </TabsTrigger>
        </TabsList>
        <div className="flex md:flex-nowrap flex-wrap gap-4 w-full my-8">
          <div className="md:w-1/2 w-full">
            <LoginButton icon="google" title="ورود با حساب گوگل" classname="w-full py-5 md:text-base text-sm" />
          </div>
          <div className="md:w-1/2 w-full">
            <LoginButton icon="apple" title=" ورود با حساب اپل " classname="w-ful md:text-base text-sm bg-transparent bg-[#303030] text-white py-5" />
          </div>
        </div>
        <div className="flex gap-2 flex-row-reverse items-center text-sm w-full justify-center text-subText">
          <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M249.875 1L1.75001 0.999978" stroke="url(#paint0_linear_1_8425)" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear_1_8425" x1="249.875" y1="0.5" x2="1.75" y2="0.499978" gradientUnits="userSpaceOnUse">
                <stop offset="0.06" stopColor="#AAAAAA" stopOpacity="0.94" />
                <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span className='whitespace-nowrap'> یا میتوانید </span>
          <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.875 1H250" stroke="url(#paint0_linear_1_8424)" strokeWidth="2" strokeLinecap="round" />
            <defs>
              <linearGradient id="paint0_linear_1_8424" x1="1.875" y1="1.5" x2="250" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.06" stopColor="#AAAAAA" stopOpacity="0.94" />
                <stop offset="1" stopColor="#AAAAAA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <TabsContent value="login" className='mt-[30px]'>
          <LoginForm />
        </TabsContent>
        <TabsContent value="register" className='mt-[30px]'>
          {registerElement}
        </TabsContent>
      </Tabs>
  )
}

export default TabContent
