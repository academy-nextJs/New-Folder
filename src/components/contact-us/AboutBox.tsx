'use client'
import { IAboutBox } from '@/types/contact-us-type/contact-us-types'
import React, { FC } from 'react'
import { motion } from 'framer-motion'

const AboutBox: FC<IAboutBox> = ({ icon, title }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} className='bg-secondary-light text-subText flex flex-row-reverse rounded-[16px] w-fit px-6 py-2 gap-4'>
      {title}
      <div className='min-size-[20px]'> {icon} </div>
    </motion.div>
  )
}

export default AboutBox
