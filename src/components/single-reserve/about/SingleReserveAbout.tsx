import Image from 'next/image'
import React from 'react'
import House from '@/assets/house.png'
import Sea from '@/assets/sea.png'

const SingleReserveAbout = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 w-full'>
        <h2 className='text-xl'> بهترین سبک طراحی وبسایت در سال 2024 چیست ؟ </h2>
        <span className='text-subText text-justify'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت..... </span>
      </div>
      <div className='w-full flex max-h-[391]'>
        <div className='w-2/5'>
          <Image src={House} alt='' className='w-full h-full' />
        </div>
        <div className='w-3/5'>
          <Image src={Sea} alt='' className='w-full h-full' />
        </div>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <h2 className='text-xl'> بهترین سبک طراحی وبسایت در سال 2024 چیست ؟ </h2>
        <span className='text-subText text-justify'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله در ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است گرها و متون بلکه روزنامه و مجله ست...لورم ایپسوم متن ساختگی با تولید سادگی نامف...لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت..... </span>
      </div>
    </div>
  )
}

export default SingleReserveAbout
