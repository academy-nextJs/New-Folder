/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { fetchApi } from '@/core/interceptore/fetchApi'
import { IFooterForm } from '@/types/footer-type/footer-types'
import { ChevronLeft, Loader } from 'lucide-react'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaContactValidation } from '@/utils/validations/contact-validation'
import { showToast } from '@/core/toast/toast'
import CommonButton from '../../buttons/common/CommonButton'
import { useTranslation } from 'react-i18next'

type FormValues = {
    name: string
    title: string
    message: string
}

const FooterForm: FC<IFooterForm> = ({ classname }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {t, i18n} = useTranslation("footer")
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
                showToast('success', " تایید درخواست ", " بستن ", " درخواست شما با موفقیت ارسال شد ")
            }
            setIsLoading(false)
            reset()
        } catch (error: any) {
            console.log(error)
            setIsLoading(false)
            showToast('error', " مشکل در ارسال ", " بستن ", " مشکلی در درخواست پیدا شد ")
        }
    }

    return (
        <form dir={i18n.dir()} className={`flex flex-col text-primary-foreground gap-6 ${classname}`} onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-4 md:flex-row flex-col w-full'>
                <div className="flex flex-col gap-1 md:w-1/2 w-full">
                    <Label htmlFor="name" className=" text-sm">
                         نام و نام خانوادگی: 
                    </Label>
                    <Input
                        type='text'
                        id="name"
                        {...register('name')}
                        className="border w-full outline-none border-border bg-transparent px-4 py-2 placeholder:text-border rounded-2xl"
                        placeholder="وارد کنید..."
                    />
                    {errors.name && <p className='text-danger text-sm font-semibold'>{errors.name.message}</p>}
                </div>
                <div className="flex flex-col gap-1 md:w-1/2 w-full">
                    <Label htmlFor="title" className=" text-sm">
                        {t("form.title")}
                    </Label>
                    <Input
                        type='title'
                        id="title"
                        {...register('title')}
                        className="border w-full outline-none border-border-form bg-transparent px-4 py-2 placeholder:text-border rounded-2xl"
                        placeholder={t("form.titlePlaceholder")}
                    />
                    {errors.title && <p className='text-danger text-sm font-semibold'>*{errors.title.message}</p>}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="message" className=" text-sm">
                    {t("form.message")}
                </Label>
                <Textarea
                    id="message"
                    {...register('message')}
                    className="border h-[156px] outline-none border-border bg-transparent px-4 py-2 placeholder:text-border rounded-2xl"
                    placeholder="....."
                />
                {errors.message && <p className='text-danger text-sm font-semibold'>*{errors.message.message}</p>}
            </div>
            <CommonButton
                type="submit"
                title={isLoading ? t("form.loading") : t("form.send")}
                icon={isLoading ? <Loader /> : <ChevronLeft size={16} />}
                classname="w-full bg-secondary text-foreground"
                disabled={isLoading}
            />
        </form>
    )
}

export default FooterForm
