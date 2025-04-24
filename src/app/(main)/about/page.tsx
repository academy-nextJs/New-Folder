'use client'
import OtpInput from '@/components/common/inputs/auth/OtpInput'
import PasswordInput from '@/components/common/inputs/auth/PasswordInput'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import React from 'react'

const About = () => {

  return (
    <div>
      <br />
      <CommonInput label=' نام و نام خانوادگی ' classname='placeholder:text-white' placeholder=' وارد کنید... ' type='text' color='text-white' />
      <br />
      <PasswordInput label='کلمه عبور' classname='placeholder:text-white' mandatory={true} placeholder='وارد کنید ...' color='text-white'  />
      <br />
      <OtpInput />
    </div>
  )
}

export default About
