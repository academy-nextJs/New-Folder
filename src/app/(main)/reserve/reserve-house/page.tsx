import ReserveContent from '@/components/reserve/content/ReserveContent'
import ReserveFilter from '@/components/reserve/filter/ReserveFilter'
import ReserveHeader from '@/components/reserve/header/ReserveHeader'
import React from 'react'

const ReserveHouse = () => {
  return (
    <div className='px-8 mt-[120px] flex flex-col gap-4'>
      <ReserveHeader />
      <ReserveFilter />
      <ReserveContent />
    </div>
  )
}

export default ReserveHouse
