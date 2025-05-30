import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useTranslations } from 'next-intl'

const Security = () => {
    const t = useTranslations('dashboardBuyer.profile3');

    return (
        <form className='flex w-full max-xl:flex-col flex-row max-xl:gap-8'>
            <div className='flex flex-col gap-2 w-1/2 max-xl:w-full'>
                <h2 className='text-xl font-bold'>{t('title')}</h2>
                <span className='text-subText'>{t('subtitle')}</span>
                <div className='flex gap-4'>
                    <Button type='button' className='bg-subBg2 w-fit rounded-2xl mt-[10px]' variant={"scale"} >{t('cancel')}</Button>
                    <Button type='submit' className='bg-primary w-fit text-primary-foreground rounded-2xl mt-[10px]' variant={"scale"} >{t('applyChanges')}</Button>
                </div>
            </div>
            <div className='w-1/2 max-xl:w-full flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='previousPassword' className='text-subText'>{t('previousPassword')}</Label>
                    <Input
                        className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
                        placeholder={t('previousPasswordPlaceholder')}
                        name='previousPassword'
                        id='previousPassword'
                        type='password'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='newPassword' className='text-subText'>{t('newPassword')}</Label>
                    <Input
                        className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
                        placeholder={t('newPasswordPlaceholder')}
                        name='newPassword'
                        id='newPassword'
                        type='password'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='repeatPassword' className='text-subText'>{t('repeatPassword')}</Label>
                    <Input
                        className='text-subText border-subText max-w-[450px] placeholder:text-subText px-4 py-2 border rounded-xl bg-transparent'
                        placeholder={t('repeatPasswordPlaceholder')}
                        name='repeatPassword'
                        id='repeatPassword'
                        type='password'
                    />
                </div>
            </div>
        </form>
    )
}

export default Security