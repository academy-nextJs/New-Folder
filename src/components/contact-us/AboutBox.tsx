import { IAboutBox } from '@/types/contact-us-type/contact-us-types'
import React, { FC } from 'react'

const AboutBox: FC<IAboutBox> = ({ icon, title }) => {
  return (
    <div className='bg-[#303030] text-[#AAAAAA] flex flex-row-reverse rounded-[16px] w-fit px-6 py-2 gap-4'>
      {title}
      <div className='min-size-[20px]'> {icon} </div>
    </div>
  )
}

export default AboutBox
