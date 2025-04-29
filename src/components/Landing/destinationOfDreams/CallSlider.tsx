'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchHouses } from '@/utils/service/api/fetchHouses'
import SliderComponent from '../sliders/SliderComponent'
import { fetchRentalHouses } from '@/utils/service/api/fetchRentalHouses'
import { fetchMortgageHouses } from '@/utils/service/api/fetchMortgageHouses'

export const CallSliderDreams = () => {
    const { data: dreamHouses, isLoading } = useQuery({
        queryKey: ['houses'],
        queryFn: () => fetchHouses('rate', 'DESC')
    })

    return (
        <div>
            <SliderComponent items={dreamHouses} view='2' loading={isLoading} />
        </div>
    )
}

export const CallSliderRental = () => {
    const { data: rentalHouses, isLoading } = useQuery({
        queryKey: ['rentalHouses'],
        queryFn: fetchRentalHouses
    })

    return (
        <div>
            <SliderComponent items={rentalHouses} view='2' loading={isLoading} />
        </div>
    )
}

export const CallSliderMortgage = () => {
    const { data: mortgageHouses, isLoading } = useQuery({
        queryKey: ['mortgageHouses'],
        queryFn: fetchMortgageHouses
    })

    return (
        <div>
            <SliderComponent items={mortgageHouses} view='2' loading={isLoading} />
        </div>
    )
}
