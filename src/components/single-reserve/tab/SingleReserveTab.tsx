import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Feather, Notebook, Text } from 'lucide-react';
import React, { FC } from 'react'
import SingleReserveAbout from '../about/SingleReserveAbout';
import SingleReserveFacilities from '../facilitis/SingleReserveFacilities';
import { TFacilities } from '@/types/facilites-type';
import SingleReserveComment from '../comments/SingleReserveComment';

interface IProps {
    defaultValue: string;
    facilities: TFacilities
}


const SingleReserveTab: FC<IProps> = ({ defaultValue, facilities }) => {
  return (
    <Tabs defaultValue={defaultValue} className='rtl w-9/12'>
        <TabsList className='bg-subBg text-subText w-full rounded-2xl flex justify-start gap-4 py-6 px-4' >
          <TabsTrigger value="about" className='bg-subBg flex items-center gap-2 flex-row-reverse'> درباره ملک <Notebook size={16} /> </TabsTrigger>
          <TabsTrigger value="facilities" className='bg-subBg flex items-center gap-2 flex-row-reverse'> امکانات اقامتگاه <Feather size={16} /> </TabsTrigger>
          <TabsTrigger value="comments" className='bg-subBg flex items-center gap-2 flex-row-reverse'> نظرات کاربران <Text size={16} /> </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className='mt-[30px]'>
          <SingleReserveAbout />
        </TabsContent>
        <TabsContent value="facilities" className='mt-[30px]'>
          <SingleReserveFacilities facilities={facilities} />
        </TabsContent>
        <TabsContent value="comments" className='mt-[30px]'>
          <SingleReserveComment />
        </TabsContent>
      </Tabs>
  )
}

export default SingleReserveTab
