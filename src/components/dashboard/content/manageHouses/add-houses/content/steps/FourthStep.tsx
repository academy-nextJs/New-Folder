/* eslint-disable */

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import mainImage from '@/assets/MainImage.png'
import addImage from '@/assets/AddImage.png'
import { X } from 'lucide-react'

const FileImage = ({ defaultImage }: { defaultImage: any }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const fileUrl = URL.createObjectURL(e.target.files[0])
            setSelectedImage(fileUrl)
        }
    }

    return (
        <label className={` relative w-[189px] h-[189px] ${!selectedImage && "cursor-pointer"}`}>
            {selectedImage && <div onClick={() => setSelectedImage("")} className='rounded-full bg-background text-danger flex justify-center items-center absolute z-20 -right-2 -top-2 p-2 cursor-pointer'> <X size={16} /> </div>}
            {!selectedImage && <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
            />}
            <Image
                src={selectedImage || defaultImage}
                alt="uploaded"
                fill
                className="object-cover rounded-2xl"
            />
        </label>
    )
}

const FourthStep = () => {
    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-4">
                <h2>آدرس ملک</h2>
                <span>
                    <span className="text-primary">یک تصویر بهتر از هزار کلمه.</span> با
                    قرار دادن عکس شانس دیده شدن ملک‌تان را ۵ برابر کنید.
                </span>
            </div>
            <div className="flex w-full justify-center gap-8">
                <FileImage defaultImage={mainImage} />
                <FileImage defaultImage={addImage} />
                <FileImage defaultImage={addImage} />
                <FileImage defaultImage={addImage} />
            </div>
        </div>
    )
}

export default FourthStep
