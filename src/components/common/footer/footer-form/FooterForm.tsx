/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { fetchApi } from '@/core/interceptore/fetchApi'
import { IFooterForm } from '@/types/footer-type/footer-types'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

type FormValues = {
    name: string
    email: string
    message: string
}

const FooterForm: FC<IFooterForm> = ({ classname }) => {
    const { register, handleSubmit, reset } = useForm<FormValues>()

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await fetchApi.post('/contact-us', data)
            console.log(response)
            reset()
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <form className={`flex flex-col gap-6 ${classname}`} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-4 md:flex-row flex-col w-full'>
                <div className="flex flex-col gap-1 md:w-1/2 w-full">
                    <label htmlFor="name" className="text-black text-sm">
                        نام و نام خانوادگی:
                    </label>
                    <input
                        id="name"
                        {...register('name')}
                        className="border w-full outline-none border-black bg-transparent px-4 py-2 placeholder:text-black rounded-2xl outline-0"
                        placeholder="وارد کنید..."
                    />
                </div>
                <div className="flex flex-col gap-1 md:w-1/2 w-full">
                    <label htmlFor="email" className="text-black text-sm">
                        ایمیل:
                    </label>
                    <input
                        id="email"
                        {...register('email')}
                        className="border w-full outline-none border-black bg-transparent px-4 py-2 placeholder:text-black rounded-2xl outline-0"
                        placeholder="وارد کنید..."
                    />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-black text-sm">
                    پیام شما:
                </label>
                <textarea
                    id="message"
                    {...register('message')}
                    className="border h-[156px] outline-none border-black bg-transparent px-4 py-2 placeholder:text-black rounded-2xl outline-0"
                    placeholder="....."
                />
            </div>
            <button type='submit' className='bg-[#363636] text-white text-[13px] rounded-2xl flex gap-2 justify-center items-center px-4 py-2 cursor-pointer hover:scale-[1.01] transition-all duration-100'>
                <span>  ارسال پیام  </span>
                <ChevronLeft />
            </button>
        </form>
    )
}

export default FooterForm
