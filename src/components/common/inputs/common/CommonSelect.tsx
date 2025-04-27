import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ISelect } from '@/types/select-type/select-types'
import React, { FC } from 'react'

const CommonSelect: FC<ISelect> = ({ background, color, label, mandatory, classname, placeholder, selectItems, onValueChange, icon }) => {
    return (
        <div className='rtl flex flex-col gap-2'>
            <Label htmlFor={label} className={`text-[13px] flex gap-0.5 ${color}`}>
                <span> {label} </span>
                {mandatory === true ? <p className='text-danger'> * </p> : <></>}
                <span> : </span>
            </Label>
            <Select onValueChange={onValueChange}>
                <SelectTrigger className={`rtl rounded-[16px] px-4 py-2 ${classname} ${color} ${background}`}>
                    {icon && <span className="flex-shrink-0">{icon}</span>}
                    <SelectValue placeholder={`${placeholder}`}></SelectValue>
                </SelectTrigger>
                <SelectContent className={`rtl ${background} ${color}`}>
                    <SelectGroup>
                        <SelectLabel> {label} </SelectLabel>
                        {selectItems.map((item, index) => (
                            <SelectItem key={index} value={item.value}> {item.label} </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default CommonSelect
