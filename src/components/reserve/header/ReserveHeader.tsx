import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ReserveHeader = () => {
  return (
    <div className='flex gap-2 rtl text-sm items-center'>
      <Link href={'/'}> خانه </Link>
      <ChevronLeft size={16} />
      <Link className='text-primary' href={'/'}> رزرو </Link>
    </div>
  )
}

export default ReserveHeader
