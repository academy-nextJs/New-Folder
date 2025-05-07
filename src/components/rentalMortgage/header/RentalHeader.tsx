import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RentalHeader = () => {
    return (
        <div className='flex gap-2 rtl text-sm items-center'>
            <Link href={'/'}> خانه </Link>
            <ChevronLeft size={16} />
            <div className='text-primary'> رهن و اجاره </div>
        </div>
    )
}

export default RentalHeader
