import React from 'react'
import MiniCard from './cards/MiniCard'
import StatusProfile from './cards/StatusProfile'
import SituationPayroll from './cards/SituationPayroll'
import RecentReserves from './cards/RecentReserves'

const dataMiniCards = [
  { number: 2, title: " کل املاک ها " },
  { number: 8, title: " رزرو های فعال " },
  { number: 6, title: " رزرو های در انتظار " },
    { number: 5, title: " بازدید های امروز " },
]

const ComSellerDashboard = () => {
  return (
    <div className='bg-bgDash rounded-xl py-4 flex flex-col gap-8'>
      <div className='w-full max-lg:flex-col flex flex-row gap-4 justify-between '>
        {dataMiniCards.map((data, idx) => (
            <MiniCard key={idx} {...data} idx={idx} />
        ))}
      </div>
      <div className='flex w-full justify-between gap-4 h-fit max-lg:flex-col'>
        <SituationPayroll />
        <StatusProfile />
      </div>
      <RecentReserves />
    </div>
  )
}

export default ComSellerDashboard
