'use client'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

const FilterModal = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [priceFrom, setPriceFrom] = useState("0")
    const [priceTo, setPriceTo] = useState("15000000")
    const t = useTranslations('modals.filter');

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <div className='cursor-pointer px-4 py-2 rounded-[14px] h-fit flex text-primary-foreground max-md:w-full justify-center bg-primary text-sm hover:scale-[1.02] transition-all'>
                    {t('filters')}
                </div>
            </DialogTrigger>
            <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl py-8 px-6 w-full max-w-[600px]'>
                <DialogTitle>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-xl font-bold'>{t('filters')}</h2>
                        <CommonButton onclick={() => setOpen(false)} title={t('close')} icon={<X />} classname='border border-danger bg-transparent text-danger' />
                    </div>
                </DialogTitle>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <CommonSelect
                        label={t('propertyType')}
                        selectItems={[
                            { label: t('apartment'), value: 'apartment' },
                            { label: t('villa'), value: 'villa' },
                            { label: t('house'), value: 'house' },
                        ]}
                        placeholder={t('apartment')}
                        color='text-subText'
                        classname='bg-subBg2 w-full'
                    />
                    <CommonSelect
                        label={t('ownerStatus')}
                        selectItems={[
                            { label: t('active'), value: 'active' },
                            { label: t('inactive'), value: 'inactive' },
                        ]}
                        placeholder={t('active')}
                        color='text-subText'
                        classname='bg-subBg2 w-full'
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-6'>
                    <div className='flex gap-2 whitespace-nowrap items-center'>
                        <span className='text-subText'>{t('priceFrom')}</span>
                        <Input
                            defaultValue={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className='bg-transparent rounded px-3 py-2 w-full'
                        />
                        <span className='text-subText'>{t('currency')}</span>
                    </div>
                    <div className='flex gap-2 whitespace-nowrap items-center'>
                        <span className='text-subText'>{t('priceTo')}</span>
                        <Input
                            defaultValue={priceTo}
                            onChange={(e) => setPriceTo(e.target.value)}
                            className='bg-transparent rounded px-3 py-2 w-full'
                        />
                        <span className='text-subText'>{t('currency')}</span>
                    </div>
                </div>

                <div className='w-fit mx-auto'>
                    <CommonButton title={t('applyFilter')} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FilterModal