'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { ChevronLeft, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCommentFormValidation } from '@/utils/validations/comment-form-validation'
import { IComment } from '@/types/comment-type/comment-type'
import { fetchApi } from '@/core/interceptore/fetchApi'
import { useParams } from 'next/navigation'
import { showToast } from '@/core/toast/toast'

const SingleReserveForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaCommentFormValidation),
    })
    const [rating, setRating] = useState([4.5])

    const params = useParams()
    const id = params?.id as string

    const onSubmit = async (data: IComment) => {
        const commentData = {
            title: data.name,
            caption: data.caption,
            rating: rating[0],
            parent_comment_id: null
        }
        try {
            const response = await fetchApi.post(`/houses/${id}/comments`, commentData)
            console.log(response)
            if (response) {
                showToast('success', ' تایید نظر ', 'بستن', ' نظر شما با موفقیت ارسال شد ')
            }
        } catch (error) {
            console.log(error)
            showToast('success', ' مشکل نظر ', 'بستن', ' مشکلی پیدا شد و نظر شما لغو شد ')
        }
    }

    useEffect(() => {
        console.log(rating[0])
    }, [rating])


    return (
        <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center w-full justify-between gap-4'>
                <div className='flex flex-col gap-2 text-sm text-subText'>
                    <Label htmlFor='name' > نام و نام خانوادگی </Label>
                    {errors.name && <span className='text-danger font-semibold text-xs'>{errors.name.message}</span>}
                    <Input {...register('name')} id='name' name='name' className='px-4 py-2 bg-transparent rounded-[16px] border border-subText' />
                </div>
                <div className='flex flex-col gap-2 text-sm text-subText'>
                    <Label htmlFor='email' > ایمیل شما </Label>
                    {errors.email && <span className='text-danger font-semibold text-xs'>{errors.email.message}</span>}
                    <Input {...register('email')} id='email' name='email' className='px-4 py-2 bg-transparent rounded-[16px] border border-subText' />
                </div>
                <div className='flex flex-col gap-2 text-sm text-subText w-full'>
                    <Label htmlFor='rating' > امتیاز شما </Label>
                    <div className="w-full max-w-xl bg-muted/20 rounded-[16px] p-2 flex flex-row-reverse items-center justify-between gap-4 border border-subText">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-md">{rating[0]}</span>
                            <Star className="" size={16} />
                        </div>

                        <Slider
                            defaultValue={rating}
                            max={5}
                            min={0}
                            step={0.1}
                            onValueChange={setRating}
                            className="w-full mx-4"
                        />

                    </div>
                </div>
            </div>
            <div className='flex items-end justify-between w-full gap-4'>
                <div className='flex flex-col gap-2 text-sm w-full text-subText'>
                    <Label htmlFor='caption' > پیام شما </Label>
                    {errors.caption && <span className='text-danger font-semibold text-xs'>{errors.caption.message}</span>}
                    <Input {...register('caption')} id='caption' name='caption' className='px-4 py-2 bg-transparent w-full rounded-[16px] border border-subText' />
                </div>
                <CommonButton type='submit' icon={<ChevronLeft />} title='ارسال نظر' />
            </div>
        </form>
    )
}

export default SingleReserveForm
