import React from 'react'
import MiniCard from './cards/MiniCard'
import StatusProfile from './cards/StatusProfile'
import SituationPayroll from './cards/SituationPayroll'
import RecentReserves from './cards/RecentReserves'

const ComSellerDashboard = () => {
  const dataMiniCards = [
    { number: 2, title: "totalProperties", href: "/dashboard/seller/manage-houses/my-houses" },
    { number: 8, title: "activeReserves", href: "/dashboard/seller/manage-reserves" },
    { number: 6, title: "pendingReserves", href: "/dashboard/seller/manage-reserves" },
    { number: 5, title: "todayVisits", href: "/dashboard/seller/manager-houses/my-houses" },
  ]

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