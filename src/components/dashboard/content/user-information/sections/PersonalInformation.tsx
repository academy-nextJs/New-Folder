import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const PersonalInformation = () => {
  return (
    <form className='flex w-full max-xl:flex-col flex-row max-xl:gap-8'>
      <div className='flex flex-col gap-2 w-1/2 max-xl:w-full'>
        <h2 className='text-xl font-bold'> اطلاعات فردی </h2>
        <span className='text-subText'> میتوانید اطلاعات فردی خود را تغییر دهید </span>
        <div className='flex gap-4'>
          <Button type='button' className='bg-subBg2 w-fit rounded-2xl mt-[10px]' variant={"scale"} > انصراف </Button>
          <Button type='submit' className='bg-primary w-fit text-primary-foreground rounded-2xl mt-[10px]' variant={"scale"} > اعمال تغییرات </Button>
        </div>
      </div>
      <div className='w-1/2 max-xl:w-full flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='firstName' className='text-subText'> نام : </Label>
          <Input
            className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
            placeholder='امیر محمد'
            name='firstName'
            id='firstName'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='lastName' className='text-subText'> نام خانوادگی : </Label>
          <Input
            className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
            placeholder='ملایی'
            name='lastName'
            id='lastName'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='email' className='text-subText'> ایمیل : </Label>
          <Input
            className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
            placeholder='example@gmail.com'
            name='email'
            id='email'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='phoneNumber' className='text-subText'> شماره موبایل : </Label>
          <Input
            className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
            placeholder='09123456789'
            name='phoneNumber'
            id='phoneNumber'
          />
        </div>
      </div>
    </form>
  )
}

export default PersonalInformation
