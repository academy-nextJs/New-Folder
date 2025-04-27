'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { ISlider } from '@/types/slider-type/slider-types'
import CardComponent from '../cards/CardComponent'

export default function SliderComponent({ items, view }: ISlider) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
              <CardComponent
                {...item}
                image={item.photos?.[0]}
                view={view}
              />
          </SwiperSlide>
        ))}
      </Swiper>


      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #8CFF45 !important;
        }
      `}</style>
    </div>
  )
}
