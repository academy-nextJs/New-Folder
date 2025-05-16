import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

const SecondStep = () => {
    return (
        <div className='flex w-full flex-col gap-8'>
            <div className='flex w-full max-lg:flex-col justify-between gap-8 items-center'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='transaction_type' className='text-subText text-sm'> نوع ملک </Label>
                    <Input name='transaction_type' id='transaction_type' placeholder='رهن' className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                </div>

                <ArrowLeft className='max-lg:hidden' size={24} />

                <div className='w-1/2 max-lg:w-full flex flex-col gap-2'>
                    <Label htmlFor='type' className='text-subText text-sm'> زیرنوع ملک </Label>
                    <Input name='type' id='type' placeholder='آپارتمانی' className='w-full text-sm px-4 py-2 bg-transparent border rounded-xl text-subText border-subText' />
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <Label htmlFor='tags' className='text-subText text-sm'> برچسب ها </Label>
                <Input name='tags' id='tags' className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
            </div>
        </div>
    )
}

export default SecondStep
