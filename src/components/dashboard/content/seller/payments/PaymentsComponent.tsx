import React from 'react'
import PaymentHeader from './header/PaymentHeader'
import PaymentsDetail from './detail/PaymentsDetail'

const PaymentsComponent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <PaymentHeader />
      <PaymentsDetail />
    </div>
  )
}

export default PaymentsComponent
