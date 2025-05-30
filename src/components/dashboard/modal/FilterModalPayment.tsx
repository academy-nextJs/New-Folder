'use client'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { selectItems } from '@/components/Landing/hero-section/section/SearchBar'
import CommonInput from '@/components/common/inputs/common/CommonInput'
import { useTranslations } from 'next-intl'

const FilterModalPayment = ({ categories }: { categories: {label: string, value: string}[] }) => {
    const [open, setOpen] = useState<boolean>(false)
    const t = useTranslations('modals.filterPayment');

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
                        selectItems={categories}
                        placeholder={t('apartment')}
                        color='text-subText'
                        classname='border-subText py-5 rounded-xl w-full'
                    />
                    <CommonSelect
                        label={t('destination')}
                        selectItems={selectItems}
                        placeholder={t('destinationPlaceholder')}
                        color='text-subText'
                        classname='border-subText py-5 rounded-xl w-full'
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <CommonInput
                        label={t('minPrice')}
                        placeholder={t('minPricePlaceholder')}
                        color='text-subText'
                        classname='border-subText rounded-xl w-full'
                    />
                    <CommonInput
                        label={t('maxPrice')}
                        placeholder={t('maxPricePlaceholder')}
                        color='text-subText'
                        classname='border-subText rounded-xl w-full'
                    />
                </div>

                <div className='w-fit mx-auto'>
                    <CommonButton title={t('applyFilter')} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FilterModalPayment