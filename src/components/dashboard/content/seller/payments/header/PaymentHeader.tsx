import React from 'react'
import MiniCard from '../../dashboard/cards/MiniCard'
import { SplitNumber } from '@/utils/helper/spliter/SplitNumber'

const dataMiniCards = [
    { value: " 115000000 ", title: " درآمد ماه جاری " },
    { value: " 2000000 ", title: " درآمد ماه قبل " },
    { value: " 25000000 ", title: " درآمد کل " },
    { value: " 850000 ", title: " موجودی قابل برداشت " },
]

const PaymentHeader = () => {
    return (
        <div className='w-full max-lg:flex-col flex flex-row gap-4 justify-between '>
            {dataMiniCards.map((data, idx) => (
                <MiniCard key={idx} {...data} idx={idx} value={` ${SplitNumber(Number(data.value))} تومن `} />
            ))}
        </div>
    )
}

export default PaymentHeader
