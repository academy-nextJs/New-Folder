import CommonButton from '@/components/common/buttons/common/CommonButton'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { X } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl'
import { UploadButton } from '@uploadthing/react'
import { OurFileRouter } from '@/app/api/uploadthing/core'
import { showToast } from '@/core/toast/toast'

const SelectImageModal = ({
    open,
    setOpen,
    setSelectedImage
}: {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>
}) => {

    const t = useTranslations('modals.selectImage')

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
                    <line x1="0" y1="0.88" x2="1131" y2="0.88" stroke="#888888" strokeOpacity="0.26" strokeDasharray="7 7" />
                </svg>

                <DialogFooter className='relative flex flex-col gap-4 items-center'>

                    <UploadButton<OurFileRouter, "imageUploader">
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            console.log("res", res);
                            console.log("file.url", res?.[0]?.url);
                            if (res && res[0] && res[0].url) {
                                setSelectedImage(res[0].url);
                                setOpen(false);
                            } else {
                                showToast("error", "URL پیدا نشد. لطفا دوباره امتحان کن.");
                            }
                        }}
                        onUploadError={() => {
                            showToast("error", "آپلود فایل موفقیت‌آمیز نبود.")
                        }}
                    />

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default SelectImageModal
