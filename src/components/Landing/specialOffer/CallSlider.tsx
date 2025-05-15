'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import SliderComponent from '../sliders/SliderComponent'
import { getRecommendsHouse } from '@/utils/service/api/recommendsHouse'

const CallSlider = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['recommendsHouses'],
        queryFn: () => getRecommendsHouse('rate', 'DESC', '')
    })
    console.log(data)

    return (
        <div>
            <SliderComponent items={data?.recommendations ? data?.recommendations : data} view='2' loading={isLoading} />
        </div>
    )
}

export default CallSlider
