import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Feather, Notebook, Text } from 'lucide-react';
import React, { FC } from 'react'

interface IProps {
    defaultValue: string;
}


const SingleReserveTab: FC<IProps> = ({ defaultValue }) => {
  return (
    <Tabs defaultValue={defaultValue} className='rtl w-9/12'>
        <TabsList className='bg-subBg text-subText w-full rounded-2xl flex justify-start gap-4 py-6 px-4' >
          <TabsTrigger value="about" className='bg-subBg flex items-center gap-2 flex-row-reverse'> درباره ملک <Notebook size={16} /> </TabsTrigger>
          <TabsTrigger value="facilities" className='bg-subBg flex items-center gap-2 flex-row-reverse'> امکانات اقامتگاه <Feather size={16} /> </TabsTrigger>
          <TabsTrigger value="comments" className='bg-subBg flex items-center gap-2 flex-row-reverse'> نظرات کاربران <Text size={16} /> </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className='mt-[30px]'>
          
        </TabsContent>
        <TabsContent value="facilities" className='mt-[30px]'>
          
        </TabsContent>
        <TabsContent value="comments" className='mt-[30px]'>
          
        </TabsContent>
      </Tabs>
  )
}

export default SingleReserveTab
