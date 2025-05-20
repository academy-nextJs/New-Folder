/* eslint-disable */
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const SelectImageModal = ({
    open,
    setOpen,
    setSelectedImage,
    selectedImage
}: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>,
    selectedImage: string | null,
}) => {

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setPreview(url)
        }
    }

    const handleSelect = () => {
        if (preview) {
            setSelectedImage(preview)
            setOpen(false)
        }
    }

    const handleDelete = () => {
        setSelectedImage(null)
        setPreview(null)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl flex flex-col gap-8 items-center'>
                <DialogHeader className='flex justify-between flex-row w-full items-center mt-4'>
                    <DialogTitle className='text-xl'>
                        انتخاب پروفایل
                    </DialogTitle>
                    <DialogDescription>
                        <CommonButton onclick={() => setOpen(false)} title='بستن' icon={<X />} classname='border border-danger bg-transparent text-danger' />
                    </DialogDescription>
                </DialogHeader>
                <svg width="100%" height="2" viewBox="0 0 1131 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-0.00439453" y1="0.881836" x2="1131" y2="0.881836" stroke="#888888" strokeOpacity="0.26" strokeDasharray="7 7" />
                </svg>
                <div className='relative'>
                    <input
                        ref={fileInputRef}
                        type='file'
                        accept='image/*'
                        className='hidden'
                        onChange={handleFileChange}
                    />
                    <img
                        onClick={() => fileInputRef.current?.click()}
                        src={preview || '/default-profile.png'}
                        alt=''
                        className='size-[225px] bg-subBg2 rounded-full mx-auto cursor-pointer object-cover'
                    />
                    {preview && <div onClick={() => handleDelete()} className='bg-danger rounded-full flex items-center justify-center cursor-pointer absolute size-[31px] top-4 right-4 text-accent-foreground'>
                        <X size={22} />
                    </div>}
                </div>
                <DialogFooter className='flex gap-4 flex-row mx-auto justify-center items-center'>
                    <DialogClose className='text-sm'>
                        انصراف
                    </DialogClose>
                    <div onClick={handleSelect} className='bg-primary text-sm text-primary-foreground px-4 py-2 rounded-2xl cursor-pointer w-fit'> انتخاب </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SelectImageModal
