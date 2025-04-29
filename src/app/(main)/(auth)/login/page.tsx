import AuthHeader from '@/components/auth/authHeader'
import LoginForm from '@/components/auth/loginForm'
import RegisterForm from '@/components/auth/registerForm'
import LoginButton from '@/components/common/buttons/auth/LoginButton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <AuthHeader pageName=' ورود به حساب کاربری ' />
      <Tabs defaultValue="login" className='rtl'>
        <TabsList className='bg-subBg text-subText w-full mt-[20px]' >
          <TabsTrigger value="login" className='bg-subBg w-1/2'> ورود به حساب کاربری </TabsTrigger>
          <TabsTrigger value="register" className='bg-subBg w-1/2'> ساخت حساب کاربری </TabsTrigger>
        </TabsList>
        <div className="flex gap-4 w-full my-8">
          <div className="w-1/2">
            <LoginButton icon="google" title="ورود با حساب گوگل" classname="w-full py-5" />
          </div>
          <div className="w-1/2">
            <LoginButton icon="apple" title=" ورود با حساب اپل " classname="w-full bg-transparent bg-[#303030] text-white py-5" />
          </div>
        </div>
        <div className="flex gap-2 flex-row-reverse items-center text-sm w-full justify-center text-subText">
          <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M249.875 1L1.75001 0.999978" stroke="url(#paint0_linear_1_8425)" stroke-width="2" stroke-linecap="round" />
            <defs>
              <linearGradient id="paint0_linear_1_8425" x1="249.875" y1="0.5" x2="1.75" y2="0.499978" gradientUnits="userSpaceOnUse">
                <stop offset="0.06" stop-color="#AAAAAA" stop-opacity="0.94" />
                <stop offset="1" stop-color="#AAAAAA" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <span> یا میتوانید </span>
          <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.875 1H250" stroke="url(#paint0_linear_1_8424)" stroke-width="2" stroke-linecap="round" />
            <defs>
              <linearGradient id="paint0_linear_1_8424" x1="1.875" y1="1.5" x2="250" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.06" stop-color="#AAAAAA" stop-opacity="0.94" />
                <stop offset="1" stop-color="#AAAAAA" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <TabsContent value="login" className='mt-[30px]'>
          <LoginForm />
        </TabsContent>
        <TabsContent value="register" className='mt-[30px]'>
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default LoginPage