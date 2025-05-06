'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Feather, Notebook, Text } from 'lucide-react';
import React, { FC } from 'react'
import SingleReserveAbout from '../about/SingleReserveAbout';
import SingleReserveFacilities from '../facilitis/SingleReserveFacilities';
import { TFacilities } from '@/types/facilites-type';
import SingleReserveComment from '../comments/SingleReserveComment';
import { motion } from 'framer-motion';

interface IProps {
  defaultValue: string;
  facilities: TFacilities
}


const SingleReserveTab: FC<IProps> = ({ defaultValue, facilities }) => {
  return (
    <Tabs defaultValue={defaultValue} className='rtl xl:w-9/12 w-full'>
      <TabsList className='bg-subBg text-subText w-full overflow-hidden custom-scrollbar max-sm:overflow-x-scroll rounded-2xl flex justify-start gap-4 py-6 px-4' >
        <TabsTrigger value="about" className='bg-subBg flex items-center gap-2 flex-row-reverse'> درباره ملک <Notebook size={16} /> </TabsTrigger>
        <TabsTrigger value="facilities" className='bg-subBg flex items-center gap-2 flex-row-reverse'> امکانات اقامتگاه <Feather size={16} /> </TabsTrigger>
        <TabsTrigger value="comments" className='bg-subBg flex items-center gap-2 flex-row-reverse'> نظرات کاربران <Text size={16} /> </TabsTrigger>
      </TabsList>
      <TabsContent value="about" className='mt-[30px]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SingleReserveAbout />
        </motion.div>
      </TabsContent>
      <TabsContent value="facilities" className='mt-[30px]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SingleReserveFacilities facilities={facilities} />
        </motion.div>
      </TabsContent>
      <TabsContent value="comments" className='mt-[30px]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SingleReserveComment />
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}

export default SingleReserveTab
