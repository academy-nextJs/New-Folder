'use client'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { ChevronLeft, RefreshCcw, Star } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCommentFormValidation } from '@/utils/validations/comment-form-validation'
import { IComment, IGetComment } from '@/types/comment-type/comment-type'
import { fetchApi } from '@/core/interceptore/fetchApi'
import { useParams } from 'next/navigation'
import { showToast } from '@/core/toast/toast'
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query'

const SingleReserveForm = ({ viewReply, title, parent_comment_id, refetch, setViewReply }: { setViewReply: React.Dispatch<React.SetStateAction<boolean>> ,refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<IGetComment[], Error>> ,viewReply: boolean, title: string, parent_comment_id: string | null }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaCommentFormValidation),
    })
    const [rating, setRating] = useState([4.5])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const params = useParams()
    const id = params?.id as string

    const onSubmit = async (data: IComment) => {
        setIsLoading(true)
        const commentData = {
            title: data.title,
            caption: data.caption,
            rating: rating[0],
            parent_comment_id: parent_comment_id
        }
        try {
            const response = await fetchApi.post(`/houses/${id}/comments`, commentData)
            console.log(response)
            if (response) {
                showToast('success', ' تایید نظر ', 'بستن', ' نظر شما با موفقیت ارسال شد ')
            }
            reset()
            refetch()
            setIsLoading(false)
            setViewReply(false)
        } catch (error) {
            console.log(error)
            showToast('success', ' مشکل نظر ', 'بستن', ' مشکلی پیدا شد و نظر شما لغو شد ')
            setIsLoading(false)
        }
    }


    return (
        <form className='flex flex-col w-full gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center max-md:flex-wrap w-full justify-between gap-4'>
                <div className='flex flex-col max-md:w-full w-1/5 gap-2 text-sm text-subText'>
                    <Label htmlFor='name' > نام و نام خانوادگی </Label>
                    {errors.name && <span className='text-danger font-semibold text-xs'>{errors.name.message}</span>}
                    <Input {...register('name')} id='name' name='name' className='px-4 w-full py-2 bg-transparent rounded-[16px] border border-subText' />
                </div>
                <div className='flex flex-col gap-2 text-sm w-1/5 text-subText max-md:w-full'>
                    <Label htmlFor='title' > عنوان شما </Label>
                    {errors.title && <span className='text-danger font-semibold text-xs'>{errors.title.message}</span>}
                    <Input {...register('title')} id='title' name='title' className='px-4 w-full py-2 bg-transparent rounded-[16px] border border-subText' />
                </div>
                {viewReply ? <div className='flex items-end max-md:flex-wrap justify-between w-full md:w-4/6 md:gap-4 gap-8'>
                    <div className='flex flex-col gap-2 text-sm w-full text-subText'>
                        <Label> برای نظر </Label>
                        <div className='px-4 py-2 bg-transparent w-full rounded-[16px] border border-subText'> {title || 'نامعلوم'} </div>
                    </div>
                </div> : <div className='flex flex-col gap-2 text-sm w-3/5 text-subText max-md:w-full'>
                    <Label htmlFor='rating' > امتیاز شما </Label>
                    <div className="w-full bg-muted/20 rounded-[16px] p-2 flex flex-row-reverse items-center justify-between gap-4 border border-subText">
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
                </div>}
            </div>
            <div className='flex items-end max-md:flex-wrap justify-between w-full md:gap-4 gap-8'>
                <div className='flex flex-col gap-2 text-sm w-full text-subText'>
                    <Label htmlFor='caption' > پیام شما </Label>
                    {errors.caption && <span className='text-danger font-semibold text-xs'>{errors.caption.message}</span>}
                    <Input {...register('caption')} id='caption' name='caption' className='px-4 py-2 bg-transparent w-full rounded-[16px] border border-subText' />
                </div>
                <CommonButton type='submit' classname='max-md:w-full text-primary-foreground' icon={isLoading ? <RefreshCcw /> : <ChevronLeft />} title={isLoading ? 'در حال ارسال...' : 'ارسال نظر'} />
            </div>
        </form>
    )
}

export default SingleReserveForm
