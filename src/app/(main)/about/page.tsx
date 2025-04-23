'use client'
import ChangePhoneButton from '@/components/common/buttons/auth/changePhone/ChangePhoneButton'
import LoginButton from '@/components/common/buttons/auth/GoogleAppleLogin/LoginButton'
import AuthSubmitButton from '@/components/common/buttons/auth/submit/AuthSubmitButton'
import TimerButton from '@/components/common/buttons/auth/timer/TimerButton'
import ViewAllButton from '@/components/common/buttons/common/ViewAllButton'
import SendMessageButton from '@/components/common/buttons/footer/SendMessageButton'
import LinkButtons from '@/components/common/buttons/landing/LinkButtons'
import SubmitFilter from '@/components/common/buttons/landing/SubmitFilter'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex gap-8'>
        <LinkButtons classname='bg-white text-black' link='/' title='وارد سایت شوید' />
        <LinkButtons classname='bg-accent-foreground text-white border' link='/' title='رهن و اجاره ملک' />
      </div>
      <br></br>
      <SubmitFilter />
      <br></br>
      <ViewAllButton classname='' />
      <br />
      <SendMessageButton />
      <br />
      <AuthSubmitButton title='ورود به جساب کاربری' />
      <br></br>
      <div className='flex gap-8'>
        <LoginButton title='ورود با اپل' classname='bg-black text-white' icon='apple' />
        <ChangePhoneButton />
      </div>
      <br />
      <TimerButton />
    </div>
  )
}

export default page
