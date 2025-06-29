import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const SelectImageModal = ({
    open,
    setOpen,
    setSelectedImage
}: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>
}) => {

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const t = useTranslations('modals.selectImage');

    const handleFileChange = () => {
        // Implement file change logic if needed
    }

    // const handleSelect = () => {
    //     if (preview) {
    //         setSelectedImage(preview)
    //         setOpen(false)
    //     }
    // }

    const handleDelete = () => {
        setSelectedImage(null)
        setPreview(null)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl flex flex-col gap-8 items-center'>
                <DialogHeader className='flex justify-between flex-row w-full items-center mt-4'>
                    <DialogTitle className='text-xl'>
                        {t('selectProfile')}
                    </DialogTitle>
                    <DialogDescription>
                        <CommonButton onclick={() => setOpen(false)} title={t('close')} icon={<X />} classname='border border-danger bg-transparent text-danger' />
                    </DialogDescription>
                </DialogHeader>
                <svg width="100%" height="2" viewBox="0 0 1131 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-0.00439453" y1="0.881836" x2="1131" y2="0.881836" stroke="#888888" strokeOpacity="0.26" strokeDasharray="7 7" />
                </svg>
                <DialogFooter className='relative'>
                    <input
                        ref={fileInputRef}
                        type='file'
                        accept='image/*'
                        className='hidden'
                        onChange={handleFileChange}
                    />
                    <Image
                        onClick={() => fileInputRef.current?.click()}
                        src={preview || '/'}
                        alt=' '
                        width={225}
                        height={225}
                        className='bg-subBg2 rounded-full mx-auto cursor-pointer object-cover'
                    />
                    {preview && (
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className='bg-subBg2 rounded-full mx-auto cursor-pointer object-cover flex items-center justify-center'
                            style={{ width: 225, height: 225 }}
                        >
                            <X size={22} />
                        </div>
                    )}
                    {preview && <div onClick={() => handleDelete()} className='bg-danger rounded-full flex items-center justify-center cursor-pointer absolute size-[31px] top-4 right-4 text-accent-foreground'>
                        <X size={22} />
                    </div>}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SelectImageModal