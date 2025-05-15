/* eslint-disable */

import SliderPhotos from '@/components/Landing/sliders/SliderPhotos'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'
import { ArrowDownUp, Building, Castle, Coins, Drill, MapPin, School } from 'lucide-react'
import React from 'react'

const photos: any = []

const categories = [
  { name: ' آپارتمان ' },
  { name: ' مسکونی ' },
  { name: ' بالکن ' }
]

const FifthStep = () => {
  return (
    <div className='bg-secondary-light rounded-2xl border-border border p-4 flex justify-between gap-4'>
      <div className='w-5/12 flex flex-col gap-4'>
        {photos.length > 0 ? <SliderPhotos photos={photos} /> : <div className='bg-secondary-light3 rounded-xl h-[226] w-full'></div>}
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center'> <MapPin className='text-muted' size={20} /> <span> خیابان ولیعصر، تهران، منطقه مرکزی </span> </div>
          <div className='flex gap-2 items-center'> <Building className='text-muted' size={20} /> <span> 2 خوابه ، 2 حمامه  ، 1 پارکینگ ، ظرفیت 6 نفر </span> </div>
          <div className='flex gap-2 items-center'> <Castle className='text-muted' size={20} /> <span> حیاط بالکنی </span> </div>
          <div className='flex gap-2 items-center'> <ArrowDownUp className='text-muted' size={20} /> <span> رهن ، اجاره </span> </div>
        </div>
      </div>
      <div className='w-7/12 flex flex-col gap-8'>
        <div className='w-full flex flex-col gap-4'>
          <h2 className='text-xl font-bold'> آپارتمان لوکس زعفرانیه </h2>
          <span className='text-subText text-justify'> ، آرامش و شروعی نو در زندگی روزمره‌تان.  آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. آپارتمانی دنج و آرام در قلب شهر، جایی که زندگی روزمره راحت و سبک‌تر است. فضایی مدرن با طراحی منحصربه‌فرد، یادآور خانه‌های دنج و دل‌نشین. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. محلی برای لحظه‌های خوش، آرامش و شروعی نو در زندگی روزمره‌تان. </span>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4 items-center'>
            <h2 className='text-subText'> برچسب ها: </h2>
            {categories.map((category, idx) => (
              <div key={idx} className='bg-primary rounded-xl text-primary-foreground px-8 py-2'>
                {category.name}
              </div>
            ))}
          </div>
         <div className='flex gap-4 items-center'> <Drill className='text-muted' size={20} /> <span> مسکونی </span> </div>
         <div className='flex gap-4 items-center'> <School className='text-muted' size={20} /> <span> آپارتمانی </span> </div>
         <div className='flex gap-4 items-center'> <Coins className='text-muted' size={20} /> <span className='text-primary'> {SplitNumber(17000000)} تومن </span> </div>
        </div>
      </div>
    </div>
  )
}

export default FifthStep
