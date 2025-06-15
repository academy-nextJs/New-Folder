'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import { showToast } from '@/core/toast/toast'
import findDiscount from '@/utils/service/api/discount/findDiscount'
import { useBooking } from '@/utils/zustand/booking'
import { CheckCircle, Code } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const DiscountSection = () => {
    const t = useTranslations('hotel.second');
    const { setDiscount } = useBooking()
    const [code, setCode] = useState<string>("");
    
    const handleDiscount = async () => {
        const discount = await findDiscount(code);
        if(discount[0]){
            if(setDiscount){
                setDiscount(discount[0].discount_percentage)
                showToast("success", " کد تخفیف با موفقیت اعمال شد ");
            }
        }
        else{
            showToast("error", " کد تخفیف نامعتبر است ");
            if(setDiscount){
                setDiscount("")
            }
            setCode("");
        }
    }

    return (
        <div className='w-full bg-secondary-light2 px-2 py-2 gap-8 rounded-2xl flex flex-col'>
            <div className='w-full bg-subBg2 rounded-2xl flex-wrap gap-4 px-4 py-2 flex justify-between'>
                <div className='flex gap-3 items-center'>
                    <Code size={20} />
                    <span>{t('discountCode')}</span>
                </div>
            </div>

            <div className='w-full flex gap-4 px-4 pb-4 items-end flex-wrap'>
                <CommonInput value={code} onchange={(e) => setCode(e.target.value)} placeholder={t('discountCodePlaceholder')} label={t('discountCode')} classname='text-subText w-full placeholder:text-subText border-subText' color='text-subText' />
                <CommonButton onclick={handleDiscount} title={t('applyDiscount')} icon={<CheckCircle size={16} />} classname='bg-transparent flex border-primary border w-fit text-primary' />
            </div>
        </div>

    )
}

export default DiscountSection
