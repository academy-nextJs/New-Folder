import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Security = () => {
    return (
        <form className='flex w-full max-xl:flex-col flex-row max-xl:gap-8'>
            <div className='flex flex-col gap-2 w-1/2 max-xl:w-full'>
                <h2 className='text-xl font-bold'> امنیت </h2>
                <span className='text-subText'> میتوانید در این بخش رمز خود را تغییر دهید </span>
                <div className='flex gap-4'>
                    <Button type='button' className='bg-subBg2 w-fit rounded-2xl mt-[10px]' variant={"scale"} > انصراف </Button>
                    <Button type='submit' className='bg-primary w-fit text-primary-foreground rounded-2xl mt-[10px]' variant={"scale"} > اعمال تغییرات </Button>
                </div>
            </div>
            <div className='w-1/2 max-xl:w-full flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='perviousPassword' className='text-subText'> رمز عبور قبلی : </Label>
                    <Input
                        className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
                        placeholder='امیر محمد'
                        name='perviousPassword'
                        id='perviousPassword'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='newPassword' className='text-subText'>  رمز عبور جدید : </Label>
                    <Input
                        className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
                        placeholder='ملایی'
                        name='newPassword'
                        id='newPassword'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='repeatPassword' className='text-subText'> تکرار رمز عبور : </Label>
                    <Input
                        className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
                        placeholder='example@gmail.com'
                        name='repeatPassword'
                        id='repeatPassword'
                    />
                </div>
            </div>
        </form>
    )
}

export default Security
