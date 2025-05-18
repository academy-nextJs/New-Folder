/* eslint-disable */

'use client'
import SelectImageModal from '@/components/dashboard/modal/SelectImageModal'
import { Camera } from 'lucide-react'
import React, { useState } from 'react'

const ProfileImage = () => {

  const [open, setOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className='flex w-full max-sm:flex-col flex-row max-sm:gap-8'>
      <div className='flex flex-col gap-2 w-1/2 max-xl:w-full'>
        <h2 className='text-xl font-bold'> عکس نمایه شما </h2>
        <span className='text-subText'> میتوانید عکس نمایه خود را تغییر دهید </span>
      </div>
      <div className='w-1/2 max-sm:w-full flex justify-start relative'>
        <img src={selectedImage || '  '} alt='' className='rounded-full size-[120px] bg-subBg2 relative' />
        <div onClick={() => setOpen(true)} className='bg-primary rounded-full flex items-center justify-center cursor-pointer absolute size-[21px] top-4 text-primary-foreground'>
          <Camera size={16} />
        </div>
      </div>
      <SelectImageModal selectedImage={selectedImage} open={open} setOpen={setOpen} setSelectedImage={setSelectedImage} />
    </div>
  )
}

export default ProfileImage
