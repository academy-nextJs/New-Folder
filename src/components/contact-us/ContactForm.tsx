/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import { fetchApi } from '@/core/interceptore/fetchApi'
import { ChevronLeft, Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaContactValidation } from '@/utils/validations/contact-validation'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { showToast } from '@/core/toast/toast'
import CommonButton from '../common/buttons/common/CommonButton'

type FormValues = {
    name: string
    title: string
    message: string
}

const ContactForm = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schemaContactValidation)
    })

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true)
        const postData = {
            title: data.title,
            message: data.message
        }

        try {
            const response = await fetchApi.post('/contact-us', postData)
            if (response) {
                showToast('success', ' تایید درخواست ', ' بستن ', ' درخواست شما با موفقیت ارسال شد ')
            }
            setIsLoading(false)
            reset()
        } catch (error: any) {
            console.log(error)
            setIsLoading(false)
            showToast('error', ' ارور ', ' بستن ', ' مشکلی در درخواست پیدا شد ')
        }
    }

    return (
        <form className={`flex flex-col gap-6 p-[16px]`} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-4 md:flex-row flex-col w-full'>
                <div className="flex flex-col gap-1 md:w-1/2 w-full group">
                    <Label htmlFor="name" className="text-[#AAAAAA] group-hover:text-white text-sm">
                        نام و نام خانوادگی:
                    </Label>
                    <Input
                        id="name"
                        {...register('name')}
                        className="border w-full outline-none border-[#AAAAAA] bg-transparent group-hover:border-white group-hover:placeholder:text-white px-4 py-2 placeholder:text-[#AAAAAA] rounded-2xl outline-0"
                        placeholder="وارد کنید..."
                    />
                    {errors.name && <p className='text-danger text-sm font-semibold'>{errors.name.message} </p>}
                </div>
                <div className="flex flex-col gap-1 md:w-1/2 w-full group">
                    <Label htmlFor="title" className="text-[#AAAAAA] group-hover:text-white text-sm">
                        عنوان:
                    </Label>
                    <Input
                        id="title"
                        {...register('title')}
                        className="border w-full outline-none border-[#AAAAAA] bg-transparent group-hover:border-white group-hover:placeholder:text-white px-4 py-2 placeholder:text-[#AAAAAA] rounded-2xl outline-0"
                        placeholder="وارد کنید..."
                    />
                    {errors.title && <p className='text-danger text-sm font-semibold'>{errors.title.message} </p>}
                </div>
            </div>
            <div className="flex flex-col gap-1 group">
                <Label htmlFor="message" className="text-[#AAAAAA] group-hover:text-white text-sm">
                    پیام شما:
                </Label>
                <Textarea
                    id="message"
                    {...register('message')}
                    className="border h-[109px] outline-none border-[#AAAAAA] bg-transparent group-hover:border-white group-hover:placeholder:text-white px-4 py-2 placeholder:text-[#AAAAAA] rounded-2xl outline-0"
                    placeholder="....."
                />
                {errors.message && <p className='text-danger text-sm font-semibold'>{errors.message.message} </p>}
            </div>
            <CommonButton type="submit" title={isLoading ? "در حال ارسال..." : " ارسال درخواست "}
                icon={isLoading ? <Loader /> : <ChevronLeft size={16} />}
                classname="w-full"
                disabled={isLoading}
            />
        </form>

    )
}

export default ContactForm
