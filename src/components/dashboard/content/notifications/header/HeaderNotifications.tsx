'use client'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import CommonModal from '@/components/dashboard/modal/CommonModal'
import React from 'react'

const HeaderNotifications = () => {
    return (
        <div className='flex w-full gap-8 items-center max-md:text-start justify-between flex-wrap'>
            <h2 className='text-xl max-lg:text-base'> لیست اعلان های شما </h2>
            <div className='flex gap-4 md:w-fit flex-wrap w-full items-end'>
                <CommonSelect label=' نوع اعلان ' placeholder=' همه ' selectItems={[]} classname='border px-8 border-subText py-5'  />
                <CommonModal button={<div className="cursor-pointer px-4 py-2 rounded-[14px] flex text-primary-foreground bg-primary" >  علامت گذاری به عنوان خوانده شده  </div>} handleClick='موافقت' title='آیا مطمئن هستید که میخواهید همه مطالب سایت را به عنوان خوانده شده علامت بزنید؟'  />
            </div>
        </div>
    )
}

export default HeaderNotifications
