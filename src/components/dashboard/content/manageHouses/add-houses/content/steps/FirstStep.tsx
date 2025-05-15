import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const FirstStep = () => {
    return (
        <form className='flex flex-col gap-8 w-full'>
            <div className='flex w-full justify-between gap-8'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <Label htmlFor='title' className='text-subText'> عنوان ملک </Label>
                    <Input name='title' id='title' className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                </div>
                <div className='w-1/2 flex flex-col gap-2'>
                    <Label htmlFor='price' className='text-subText'> قیمت </Label>
                    <Input name='price' id='price' placeholder='تومن' className='w-full text-sm px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                </div>
            </div>
            <div className='flex w-full justify-between gap-8 h-fit'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <Label htmlFor='caption' className='text-subText'> توضیحات ملک </Label>
                    <Textarea name='caption' id='caption' className='w-full h-[244] rounded-xl border border-subText text-subText' />
                </div>
                <div className='w-1/2 flex flex-col justify-between'>
                    <div className='w-full flex gap-4'>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <Label htmlFor='capacity' className='text-subText'> ظرفیت (نفر) </Label>
                            <Input name='capacity' id='capacity' type='number' className='w-full text-sm remove-arrows px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                        </div>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <Label htmlFor='rooms' className='text-subText'> تعداد اتاق </Label>
                            <Input name='rooms' id='rooms' type='number' className='w-full text-sm px-4 remove-arrows py-2 bg-transparent border rounded-xl text-subText border-subText' />
                        </div>
                    </div>
                    <div className='w-full flex gap-4'>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <Label htmlFor='parking' className='text-subText'> تعداد پارکینگ </Label>
                            <Input name='parking' id='parking' type='number' className='w-full text-sm remove-arrows px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                        </div>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <Label htmlFor='bathrooms' className='text-subText'> تعداد حمام </Label>
                            <Input name='bathrooms' id='bathrooms' type='number' className='w-full text-sm px-4 remove-arrows py-2 bg-transparent border rounded-xl text-subText border-subText' />
                        </div>
                    </div>
                    <div className='w-full flex gap-4'>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <Label htmlFor='yard_type' className='text-subText'> نوع حیاط </Label>
                            <Input name='yard_type' id='yard_type' className='w-full text-sm remove-arrows px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                        </div>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <Label htmlFor='transaction_type' className='text-subText'> نوع معامله </Label>
                            <Input name='transaction_type' id='transaction_type' className='w-full text-sm px-4 remove-arrows py-2 bg-transparent border rounded-xl text-subText border-subText' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FirstStep
