import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import React from 'react'

const HeaderPayments = () => {
    return (
        <div className='flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center'>
            <h2 className='text-xl max-lg:text-base'> املاک من </h2>
            <div className='flex gap-4 md:w-fit w-full'>
                <CommonSelect label=' وضعیت پرداخت ' placeholder=' تایید شده ' selectItems={[]} classname='border px-8 border-subText py-5'  />
                <CommonSelect label=' نوع تراکنش ' placeholder=' رزرو ' selectItems={[]} classname='border px-8 border-subText py-5'  />
            </div>
        </div>
    )
}

export default HeaderPayments
