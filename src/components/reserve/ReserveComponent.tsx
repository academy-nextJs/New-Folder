'use client'
import ReserveContent from '@/components/reserve/content/ReserveContent'
import ReserveFilter from '@/components/reserve/filter/ReserveFilter'
import ReserveHeader from '@/components/reserve/header/ReserveHeader'
import { IHouse } from '@/types/houses-type/house-type'
import { getHouses } from '@/utils/service/api/houses-api'
import React, { useEffect, useState } from 'react'
const ReserveComponent = () => {
    const [search, setSearch] = useState<string>('')
    const [order, setOrder] = useState<'DESC' | 'ASC'>('DESC')
    const [sort, setSort] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [minPrice, setMinPrice] = useState<number | ''>('')
    const [maxPrice, setMaxPrice] = useState<number | ''>('')
    const [houses, setHouses] = useState<IHouse[]>([])

    const fetchHouses = async () => {
        try {
            const response = await getHouses("", search || "", order || "DESC", sort || "last_updated", location || "", minPrice, maxPrice)
            setHouses(response)
        } catch (error) {
            console.error('Error fetching houses:', error)
        }
    }

    useEffect(() => {
        fetchHouses()
    }, [])

    useEffect(() => {
        if (order || search || sort || location || minPrice || maxPrice) {
            fetchHouses()
        }
    }, [search, order, sort, location, minPrice, maxPrice])

    return (
        <div className='px-8 mt-[120px] flex flex-col gap-4'>
            <ReserveHeader />
            <ReserveFilter
                setOrder={setOrder}
                setSort={setSort}
                setSearch={setSearch}
                houseLength={houses.length}
                setLocation={setLocation}
            />
            <ReserveContent houses={houses} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} setLocation={setLocation} />
        </div>
    )
}

export default ReserveComponent
