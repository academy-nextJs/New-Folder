/* eslint-disable */

'use client'
import CommonSelect from '@/components/common/inputs/common/CommonSelect'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const SecondStep = () => {
    const t = useTranslations('dashboardSeller.secondStep')
    
    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const selectItems = [
        { label: t('balcony'), value: "balcony" }
    ]

    const handleKeyDown = (e: any) => {
        if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
            e.preventDefault();
            const newTag = input.trim()
            if (!tags.includes(newTag)) {
                setTags([...tags, newTag]);
            }
            setInput('');
        } else if (e.key === 'Backspace' && !input && tags.length) {
            setTags(tags.slice(0, -1));
        }
    };

    const removeTag = (indexToRemove: any) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className='flex w-full flex-col gap-8'>
            <div className='flex w-full max-lg:flex-col justify-between gap-8 items-center'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2 relative'>
                    <Label htmlFor='rooms' className='text-subText text-sm'>{t('rooms')}</Label>
                    <Input name='rooms' id='rooms' placeholder={t('roomsPlaceholder')} className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                    <div className='absolute left-4 top-9 text-muted'>{t('roomUnit')}</div>
                </div>

                <div className='w-1/2 max-lg:w-full flex flex-col gap-2 relative'>
                    <Label htmlFor='bathrooms' className='text-subText text-sm'>{t('bathrooms')}</Label>
                    <Input name='bathrooms' id='bathrooms' placeholder={t('bathroomsPlaceholder')} className='w-full text-sm px-4 placeholder:text-subText py-2 bg-transparent border rounded-xl text-subText border-subText' />
                    <div className='absolute left-4 top-9 text-muted'>{t('bathroomUnit')}</div>
                </div>
            </div>
            <div className='flex w-full max-lg:flex-col justify-between gap-8 items-center'>
                <div className='w-1/2 max-lg:w-full flex flex-col gap-2 relative'>
                    <Label htmlFor='parking' className='text-subText text-sm'>{t('parking')}</Label>
                    <Input name='parking' id='parking' placeholder={t('parkingPlaceholder')} className='w-full px-4 py-2 text-sm bg-transparent border rounded-xl text-subText border-subText' />
                    <div className='absolute left-4 top-9 text-muted'>{t('parkingUnit')}</div>
                </div>

                <div className='w-1/2 max-lg:w-full flex flex-col gap-2 relative'>
                    <CommonSelect
                        selectItems={selectItems}
                        placeholder=''
                        classname='text-subText placeholder:text-subText rounded-xl py-5 border border-subText w-full'
                        color='text-subText'
                        label={t('yardType')}
                    />
                </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <Label htmlFor="tags" className="text-subText text-sm">
                    {t('tags')}
                </Label>
                <div className="flex flex-wrap gap-2 px-4 py-2 border border-subText rounded-xl">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-primary text-primary-foreground gap-1 px-2 py-1 rounded-lg text-sm"
                        >
                            {tag}
                            <button
                                type="button"
                                className="ml-1 text-primary-foreground"
                                onClick={() => removeTag(index)}
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                    <input
                        id="tags"
                        name="tags"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow bg-transparent text-subText text-sm focus:outline-none"
                        placeholder={t('tagsPlaceholder')}
                    />
                </div>
            </div>
        </div>
    )
}

export default SecondStep