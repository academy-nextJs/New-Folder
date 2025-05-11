'use client'
import SliderComponent from '@/components/Landing/sliders/SliderComponent'
import { fetchHouses } from '@/utils/service/api/fetchHouses'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const CallSlider = ({ type }: { type: "" | "rental" | "mortgage" | "reservation" | "direct_purchase" }) => {

    const { data: houses, isLoading } = useQuery({
        queryKey: ['fetchSameHouses'],
        queryFn: () => fetchHouses('last_updated', 'DESC', type)
    })

    return (
        <SliderComponent items={houses} loading={isLoading} view='2' />
    )
}

export default CallSlider
