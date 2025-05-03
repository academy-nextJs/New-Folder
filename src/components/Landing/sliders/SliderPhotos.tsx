import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ISliderPhotos } from '@/types/slider-type/slider-types'

export default function SliderPhotos({ photos }: ISliderPhotos) {
  return (
    <div className="w-full max-w-xl mx-auto relative">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        autoplay
        loop={true}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={photo}
              alt={``}
              className="w-full h-[157px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
