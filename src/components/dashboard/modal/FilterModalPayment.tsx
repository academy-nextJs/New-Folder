'use client'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { selectItems } from '@/components/Landing/hero-section/section/SearchBar'

const FilterModalPayment = ({ categories }: { categories: {label: string, value: string}[] }) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <div className='cursor-pointer px-4 py-2 rounded-[14px] h-fit flex text-primary-foreground max-md:w-full justify-center bg-primary text-sm hover:scale-[1.02] transition-all'>
                    فیلتر ها
                </div>
            </DialogTrigger>
            <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl py-8 px-6 w-full max-w-[600px]'>
                <DialogTitle>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-xl font-bold'>فیلترها</h2>
                        <CommonButton onclick={() => setOpen(false)} title='بستن' icon={<X />} classname='border border-danger bg-transparent text-danger' />
                    </div>
                </DialogTitle>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <CommonSelect
                        label=' نوع ملک '
                        selectItems={categories}
                        placeholder='آپارتمان'
                        color='text-subText'
                        classname='border-subText py-5 rounded-xl w-full'
                    />
                    <CommonSelect
                        label=' مقصد یا هتل شما '
                        selectItems={selectItems}
                        placeholder=' استان ، شهر ، هتل .... '
                        color='text-subText'
                        classname='border-subText py-5 rounded-xl w-full'
                    />
                </div>

                <div className='w-full'>
                    <CommonSelect
                        label='وضعیت رزرو'
                        selectItems={[
                            { label: 'تایید شده', value: 'تایید شده' },
                            { label: 'لغو شده', value: 'لغو شده' },
                        ]}
                        placeholder='تایید شده'
                        color='text-subText'
                        classname='border-subText py-5 rounded-xl w-full'
                    />
                </div>

                <div className='w-fit mx-auto'>
                    <CommonButton title={"اعمال فیلتر"} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FilterModalPayment
