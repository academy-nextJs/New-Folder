'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IInput } from '@/types/input-type/input-types'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const CommonInput: FC<IInput> = ({ label, placeholder, classname, type, color, background, onchange, mandatory, name, id, value }) => {
    const {i18n} = useTranslation("landing")
    
    return (
        <div dir={i18n.dir()} className='rtl flex flex-col gap-1 group w-full'>
            <Label dir={i18n.dir()} htmlFor={label} className={`text-[13px] flex gap-0.5 ${color}`}>
                <span> {label} </span>
                {mandatory === true ? <p className='text-danger'> * </p> : <></>}
                <span> : </span>
            </Label>
            <Input
                dir={i18n.dir()}
                value={value}
                name={name}
                id={id}
                onChange={onchange}
                type={type || ''}
                placeholder={placeholder || ''}
                className={`w-fit py-3 bg-transparent remove-arrows border border-border px-4 text-[#FFFFFF] rounded-[16px] text-sm ${classname} ${color} ${background}`}
            />
        </div>
    )
}

export default CommonInput
