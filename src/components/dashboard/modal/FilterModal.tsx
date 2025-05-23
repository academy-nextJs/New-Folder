'use client'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Input } from '@/components/ui/input'

const FilterModal = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [priceFrom, setPriceFrom] = useState("0")
    const [priceTo, setPriceTo] = useState("15000000")

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <div className='cursor-pointer px-4 py-2 rounded-[14px] flex text-primary-foreground max-md:w-full justify-center bg-primary text-sm hover:scale-[1.02] transition-all'>
                    فیلتر ها
                </div>
            </DialogTrigger>
            <DialogContent className='rounded-2xl py-8 px-6 w-full max-w-[600px]'>
                <div className='flex items-center justify-between mb-6'>
                    <h2 className='text-xl font-bold'>فیلترها</h2>
                    <CommonButton onclick={() => setOpen(false)} title='بستن' icon={<X />} classname='border border-danger bg-transparent text-danger' />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <CommonSelect
                        label='نوع ملک'
                        selectItems={[
                            { label: 'آپارتمان', value: 'apartment' },
                            { label: 'ویلا', value: 'villa' },
                            { label: 'خانه', value: 'house' },
                        ]}
                        placeholder='آپارتمان'
                        color='text-subText'
                        classname='bg-subBg2 w-full'
                    />
                    <CommonSelect
                        label='وضعیت مالک'
                        selectItems={[
                            { label: 'فعال', value: 'active' },
                            { label: 'غیرفعال', value: 'inactive' },
                        ]}
                        placeholder='فعال'
                        color='text-subText'
                        classname='bg-subBg2 w-full'
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-6'>
                    <div className='flex gap-2 whitespace-nowrap items-center'>
                        <span className='text-subText'>قیمت از</span>
                        <Input
                            defaultValue={priceFrom}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className='border bg-transparent rounded px-3 py-2 w-full'
                        />
                        <span className='text-subText'>تومان</span>
                    </div>
                    <div className='flex gap-2 whitespace-nowrap items-center'>
                        <span className='text-subText'>قیمت تا</span>
                        <Input
                            defaultValue={priceTo}
                            onChange={(e) => setPriceTo(e.target.value)}
                            className='border bg-transparent rounded px-3 py-2 w-full'
                        />
                        <span className='text-subText'>تومان</span>
                    </div>
                </div>

                <div className='w-fit mx-auto'>
                    <CommonButton title={"اعمال فیلتر"} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FilterModal
