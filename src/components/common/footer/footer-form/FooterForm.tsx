/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { fetchApi } from '@/core/interceptore/fetchApi'
import { IFooterForm } from '@/types/footer-type/footer-types'
import { ChevronLeft } from 'lucide-react'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaContactValidation } from '@/utils/validations/contact-validation'
import { showToast } from '@/core/toast/toast'

type FormValues = {
    name: string
    title: string
    message: string
}

const FooterForm: FC<IFooterForm> = ({ classname }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schemaContactValidation)
    })

    const onSubmit = async (data: FormValues) => {

        const postData = {
            title: data.title,
            message: data.message
        }

        try {
            const response = await fetchApi.post('/contact-us', postData)
            if (response.id) {
                showToast('success', ' تایید درخواست ', ' بستن ', ' درخواست شما با موفقیت ارسال شد ')
            }
            reset()
        } catch (error: any) {
            console.log(error)
            showToast('error', ' ارور ', ' بستن ', ' مشکلی در درخواست پیدا شد ')
        }
    }

    return (
        <form className={`flex flex-col gap-6 ${classname}`} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-4 md:flex-row flex-col w-full'>
                <div className="flex flex-col gap-1 md:w-1/2 w-full">
                    <Label htmlFor="name" className="text-black text-sm">
                        نام و نام خانوادگی:
                    </Label>
                    <Input
                        type='text'
                        id="name"
                        {...register('name')}
                        className="border w-full outline-none border-black bg-transparent px-4 py-2 placeholder:text-black rounded-2xl outline-0"
                        placeholder="وارد کنید..."
                    />
                    {errors.name && <p className='text-danger text-sm font-semibold'>{errors.name.message} </p>}
                </div>
                <div className="flex flex-col gap-1 md:w-1/2 w-full">
                    <Label htmlFor="title" className="text-black text-sm">
                        عنوان:
                    </Label>
                    <Input
                        type='title'
                        id="title"
                        {...register('title')}
                        className="border w-full outline-none border-black bg-transparent px-4 py-2 placeholder:text-black rounded-2xl outline-0"
                        placeholder="وارد کنید..."
                    />
                    {errors.title && <p className='text-danger text-sm font-semibold'>*{errors.title.message}</p>}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="message" className="text-black text-sm">
                    پیام شما:
                </Label>
                <Textarea
                    id="message"
                    {...register('message')}
                    className="border h-[156px] outline-none border-black bg-transparent px-4 py-2 placeholder:text-black rounded-2xl outline-0"
                    placeholder="....."
                />
                {errors.message && <p className='text-danger text-sm font-semibold'>*{errors.message.message}</p>}
            </div>
            <button type='submit' className='bg-[#363636] text-white text-[13px] rounded-2xl flex gap-2 justify-center items-center px-4 py-2 cursor-pointer hover:scale-[1.01] transition-all duration-100'>
                <span>  ارسال پیام  </span>
                <ChevronLeft />
            </button>
        </form>
    )
}

export default FooterForm
