import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { useTranslations } from 'next-intl'

const FirstStep = () => {
    const t = useTranslations('dashboardSeller.firstStep')
    const selectItems = [
        { label: t('direct_purchase'), value: "direct_purchase" },
        { label: t('reservation'), value: "reservation" },
        { label: t('rental'), value: "rental" },
        { label: t('mortgage'), value: "mortgage" },
    ]

    return (
        <form className='flex flex-col gap-8 w-full'>
            <div className='flex max-lg:flex-col w-full justify-between gap-8'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='title' className='text-subText'>{t('houseName')}</Label>
                    <Input name='title' id='title' placeholder={t('houseNamePlaceholder')} className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                </div>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='capacity' className='text-subText'>{t('capacity')}</Label>
                    <Input name='capacity' placeholder={t('capacityPlaceholder')} id='capacity' className='w-full text-sm px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                </div>
            </div>
            <div className='flex max-lg:flex-col w-full justify-between gap-8'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <CommonSelect
                        selectItems={selectItems}
                        placeholder=''
                        classname='text-subText placeholder:text-subText rounded-xl py-5 border border-subText w-full'
                        color='text-subText'
                        label={t('dealType')}
                    />
                </div>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='price' className='text-subText'>{t('price')}</Label>
                    <Input name='price' placeholder={t('pricePlaceholder')} id='price' className='w-full text-sm px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                </div>
            </div>
            <div className='flex max-lg:flex-col w-full justify-between gap-8 items-center'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='type' className='text-subText'>{t('type')}</Label>
                    <Input name='type' placeholder={t('typePlaceholder')} id='type' className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                </div>
                <svg width="21" height="14" viewBox="0 0 21 14" fill='none' xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5H9V1.43484C9 1.26397 8.79958 1.17179 8.66984 1.28299L2 7L8.66984 12.717C8.79958 12.8282 9 12.736 9 12.5652V9H21" className='stroke-foreground' strokeWidth="2" />
                </svg>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='subtype' className='text-subText'>{t('subtype')}</Label>
                    <Input name='subtype' placeholder={t('subtypePlaceholder')} id='subtype' className='w-full text-sm px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                </div>
            </div>
            <div className='w-full max-lg:w-full flex flex-col gap-2'>
                <Label htmlFor='caption' className='text-subText'>{t('description')}</Label>
                <Textarea name='caption' placeholder={t('descriptionPlaceholder')} id='caption' className='w-full h-[244] rounded-xl border border-subText text-subText' />
            </div>
        </form>
    )
}

export default FirstStep