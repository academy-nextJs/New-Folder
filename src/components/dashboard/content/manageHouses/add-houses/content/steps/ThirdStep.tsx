import ReserveMap from '@/components/reserve/map/ReserveMap'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const ThirdStep = () => {
    return (
        <div className='w-full flex max-lg:flex-col-reverse justify-between gap-8'>
            <div className='w-5/12 max-lg:w-full flex flex-col gap-20 max-lg:gap-8'>
                <div className='w-full flex flex-col gap-2'>
                    <Label htmlFor='address' className='text-subText'> آدرس ملک </Label>
                    <Input name='address' id='address' placeholder='مثال : ساری, دنیای آرزو, پژوهشگاه سپهرگان' className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                </div>
                <span className='text-xl leading-[60px]'>
                    با انتخاب موقعیت مکانی ملک خود از روی نقشه

                    به راحتی <span className='text-primary'>  موقعیت ملک </span> را تعیین کنید.
                </span>
            </div>
            <div className='w-7/12 max-lg:w-full h-[366.65509033203125]'>
                <ReserveMap />
            </div>
        </div>
    )
}

export default ThirdStep
