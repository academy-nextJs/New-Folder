import { Label } from '@/components/ui/label'
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import React, { FC } from 'react'
import { IDatePicker } from '@/types/input-type/input-types'

const DatePickerInput: FC<IDatePicker> = ({
  background = '',
  color = '',
  label,
  mandatory,
  placeholder,
  onChange,
  className = '',
  icon
}) => {
  return (
    <div className="rtl flex flex-col gap-1">
      {label && (
        <Label htmlFor={label} className={`text-[13px] flex gap-0.5 text-[#AAAAAA] ${color}`}>
          <span>{label}</span>
          {mandatory && <p className="text-danger">*</p>}
          <span>:</span>
        </Label>
      )}

      <div className={`flex items-center gap-2 rounded-[16px]  border-[#AAAAAA] text-[#AAAAAA] px-4 py-2 border ${background} ${color} ${className}`}>
        {icon && <span className={`text-[#AAAAAA] ${color}`}>{icon}</span>}
        <DatePicker
          id={label}
          onChange={onChange}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          inputClass="w-full outline-none bg-transparent text-sm"
          containerClassName="w-full"
          style={{
            background: 'transparent',
            border: 'none',
            width: '100%',
            fontSize: '14px',
            color: 'inherit',
          }}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default DatePickerInput
