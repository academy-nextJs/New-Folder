'use client'
import React, { useEffect } from 'react'
import SingleReserveHeader from './header/SingleReserveHeader'
import { getHouseById } from '@/utils/service/api/houses-api'
import { IHouse } from '@/types/houses-type/house-type'
import { useParams } from 'next/navigation'
import SingleReserveBooking from './booking/SingleReserveBooking'
import SingleReserveTab from './tab/SingleReserveTab'

const SingleReserveComponent = () => {
    const [house, setHouse] = React.useState<IHouse>()
    const params = useParams()
    const id = params?.id as string


    const fetchHouse = async () => {
        const houseData = await getHouseById(id) as IHouse
        setHouse(houseData)
    }

    useEffect(() => {
        fetchHouse()
    }, [])

    return house && <div className='px-8 flex flex-col gap-16'>
            <SingleReserveHeader house={house} />
            <div className='flex gap-12 justify-between'>
                <SingleReserveTab defaultValue='about' />
                <SingleReserveBooking price={house?.price} discountedPrice={1000000} />
            </div>
        </div>
}

export default SingleReserveComponent
