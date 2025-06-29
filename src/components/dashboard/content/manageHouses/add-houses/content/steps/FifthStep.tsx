/* eslint-disable */

import SliderPhotos from '@/components/Landing/sliders/SliderPhotos'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { ArrowDownUp, Building, Castle, Coins, Drill, MapPin, School } from 'lucide-react'
import React, { Fragment } from 'react'
import { useTranslations } from 'next-intl'

const photos: any = []

const categories = [
  { name: 'apartment' },
  { name: 'residential' },
  { name: 'balcony' }
]

const FifthStep = () => {
  
  const t = useTranslations('dashboardSeller.fifthStep')
  return (
    <Fragment>
      <div className='bg-secondary-light max-xl:hidden rounded-2xl border-border border p-4 flex justify-between gap-4'>
        <div className='w-5/12 flex flex-col gap-4'>
          {photos.length > 0 ? <SliderPhotos photos={photos} /> : <div className='bg-secondary-light3 rounded-xl h-[226] w-full'></div>}
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2 items-center'> <MapPin className='text-muted' size={20} /> <span>{t('address')}</span> </div>
            <div className='flex gap-2 items-center'> <Building className='text-muted' size={20} /> <span>{t('details')}</span> </div>
            <div className='flex gap-2 items-center'> <Castle className='text-muted' size={20} /> <span>{t('yard')}</span> </div>
            <div className='flex gap-2 items-center'> <ArrowDownUp className='text-muted' size={20} /> <span>{t('dealType')}</span> </div>
          </div>
        </div>
        <div className='w-7/12 flex flex-col gap-8'>
          <div className='w-full flex flex-col gap-4'>
            <h2 className='text-xl font-bold'>{t('title')}</h2>
            <span className='text-subText text-justify'>{t('description')}</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-subText'>{t('tags')}:</h2>
              {categories.map((category, idx) => (
                <div key={idx} className='bg-primary rounded-xl text-primary-foreground px-8 py-2'>
                  {category.name}
                </div>
              ))}
            </div>
            <div className='flex gap-4 items-center'> <Drill className='text-muted' size={20} /> <span>{t('residential')}</span> </div>
            <div className='flex gap-4 items-center'> <School className='text-muted' size={20} /> <span>{t('apartment')}</span> </div>
            <div className='flex gap-4 items-center'> <Coins className='text-muted' size={20} /> <span className='text-primary'> {SplitNumber(17000000)} {t('currency')} </span> </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary-light max-xl:flex flex-col rounded-2xl border-border border p-4 hidden justify-between gap-8' >
        {photos.length > 0 ? <SliderPhotos photos={photos} /> : <div className='bg-secondary-light3 rounded-xl h-[226] w-full'></div>}
        <div className='w-full flex flex-col gap-4'>
          <h2 className='text-xl font-bold'>{t('title')}</h2>
          <span className='text-subText text-justify'>{t('description')}</span>
        </div>
        <div className='flex flex-row-reverse max-lg:flex-col justify-between gap-4'>
          <div className='flex w-1/2 max-lg:w-full flex-col gap-4'>
            <div className='flex gap-4 items-center'>
              <div className='flex gap-2 flex-wrap' >
                {categories.map((category, idx) => (
                  <div key={idx} className='bg-primary rounded-xl text-primary-foreground px-8 py-2'>
                    {t(category.name)}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex gap-4 items-center'> <Drill className='text-muted' size={20} /> <span>{t('residential')}</span> </div>
            <div className='flex gap-4 items-center'> <School className='text-muted' size={20} /> <span>{t('apartment')}</span> </div>
            <div className='flex gap-4 items-center'> <Coins className='text-muted' size={20} /> <span className='text-primary'> {SplitNumber(17000000)} {t('currency')} </span> </div>
          </div>
          <div className='flex flex-col gap-4 w-1/2 max-lg:w-full'>
            <div className='flex gap-2 items-center'> <MapPin className='text-muted' size={20} /> <span>{t('address')}</span> </div>
            <div className='flex gap-2 items-center'> <Building className='text-muted' size={20} /> <span>{t('details')}</span> </div>
            <div className='flex gap-2 items-center'> <Castle className='text-muted' size={20} /> <span>{t('yard')}</span> </div>
            <div className='flex gap-2 items-center'> <ArrowDownUp className='text-muted' size={20} /> <span>{t('dealType')}</span> </div>
          </div>
        </div>
      </div>
    </Fragment >
  )
}

export default FifthStep