'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import IconButton from '@/components/common/buttons/common/IconButton'
import { ChevronLeft, Plus } from 'lucide-react'
import React from 'react'

const page = () => {
  
  return (
    <div className='p-4'>
      <br />
      <CommonButton title=' ارسال پیام ' icon={<ChevronLeft />} classname='bg-accent-foreground text-white flex flex-row-reverse border w-[618]' />
      <br />
      <IconButton icon={<Plus />} />
      <br />
    </div>
  )
}

export default page
