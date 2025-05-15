'use client'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ISelect } from '@/types/select-type/select-types'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const CommonSelect: FC<ISelect> = ({ background, color, label, mandatory, classname, placeholder, selectItems, onValueChange, icon }) => {
    const { i18n } = useTranslation("landing")

    return (
        <div dir={i18n.dir()} className='rtl flex flex-col gap-1 group'>
            {label && <Label dir={i18n.dir()} htmlFor={label} className={`text-[13px] flex gap-0.5 ${color}`}>
                <span> {label} </span>
                {mandatory === true ? <span className='text-danger'> * </span> : <></>}
                <span> : </span>
            </Label>}
            <Select dir={i18n.dir()} onValueChange={onValueChange}>
                <SelectTrigger className={`rtl rounded-[16px] px-4 py-2 ${classname} ${color} ${background}`}>
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                    <SelectValue placeholder={`${placeholder}`}></SelectValue>
                </SelectTrigger>
                <SelectContent className={`rtl ${background} ${color}`}>
                    <ScrollArea>
                        <SelectGroup>
                            <SelectLabel> {label} </SelectLabel>
                            {selectItems.map((item, index) => (
                                <SelectItem key={index} value={item.value}> {item.label} </SelectItem>
                            ))}
                        </SelectGroup>
                    </ScrollArea>
                </SelectContent>
            </Select>
        </div>
    )
}

export default CommonSelect
