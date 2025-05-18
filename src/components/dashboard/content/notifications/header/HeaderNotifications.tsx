import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import React from 'react'

const HeaderNotifications = () => {
    return (
        <div className='flex w-full gap-8 items-center max-md:text-start justify-between flex-wrap'>
            <h2 className='text-xl max-lg:text-base'> لیست اعلان های شما </h2>
            <div className='flex gap-4 md:w-fit flex-wrap w-full items-end'>
                <CommonSelect label=' نوع اعلان ' placeholder=' همه ' selectItems={[]} classname='border px-8 border-subText py-5'  />
                <CommonButton classname='py-5' title=' علامت گذاری به عنوان خوانده شده ' />
            </div>
        </div>
    )
}

export default HeaderNotifications
