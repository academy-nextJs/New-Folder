/* eslint-disable */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import type { StaticImageData } from 'next/image'
import mainImage from '@/assets/MainImage.png'
import addImage from '@/assets/AddImage.png'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useDirection } from '@/utils/hooks/useDirection'
import CommonButton from '@/components/common/buttons/common/CommonButton'
import { useHouseStore } from '@/utils/zustand/house'
import { useUploadThing } from '@/utils/helper/uploadthing'

interface FileImageProps {
  defaultImage: StaticImageData
  selectedImage: string | null
  onImageChange: (image: string | null) => void
}

const FileImage: React.FC<FileImageProps> = ({ defaultImage, selectedImage, onImageChange }) => {
  const { startUpload, isUploading } = useUploadThing("imageUploader");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]

      try {
        const res = await startUpload([file])
        if (res && res[0]?.url) {
          onImageChange(res[0].url)
        }
      } catch (error) {
        console.error("Upload failed:", error)
      }
    }
  }

  const handleClear = () => {
    onImageChange(null)
  }

  const imgSrc = selectedImage || defaultImage.src

  return (
    <label className={`relative w-[189px] h-[189px] ${!selectedImage ? 'cursor-pointer' : ''}`}>
      {selectedImage && (
        <div
          onClick={handleClear}
          className="rounded-full bg-background text-danger flex justify-center items-center absolute z-20 -right-2 -top-2 p-2 cursor-pointer"
        >
          <X size={16} />
        </div>
      )}
      {!selectedImage && (
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          disabled={isUploading}
        />
      )}
      <img
        src={imgSrc}
        alt="uploaded"
        className="object-cover rounded-2xl w-full h-full"
      />
    </label>
  )
}

const FourthStep: React.FC<{ setStep: Dispatch<SetStateAction<number>> }> = ({ setStep }) => {
  const t = useTranslations('dashboardSeller.fourthStep')
  const dir = useDirection()
  const { data: house, setData } = useHouseStore()

  const [selectedImages, setSelectedImages] = useState<(string | null)[]>([null, null, null, null])

  useEffect(() => {
    const initialPhotos = house.photos || []
    const newImages: (string | null)[] = [null, null, null, null]
    for (let i = 0; i < newImages.length; i++) {
      newImages[i] = initialPhotos[i] || null
    }
    setSelectedImages(newImages)
  }, [house.photos])

  const handleImageChange = (index: number, url: string | null) => {
    setSelectedImages(prev => {
      const newArr = [...prev]
      newArr[index] = url
      return newArr
    })
  }

  const nextStep = () => {
    const photos = selectedImages.filter((img): img is string => img !== null)
    setData({ photos })
    setStep(prev => prev + 1)
  }

  return (
    <div dir={dir} className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <h2>{t('title')}</h2>
        <span>
          <span className="text-primary">{t('desc1')}</span>
          {t('desc2')}
        </span>
      </div>
      <div className="flex max-xl:flex-wrap max-xl:items-center w-full justify-center gap-8">
        <FileImage
          defaultImage={mainImage}
          selectedImage={selectedImages[0]}
          onImageChange={(url) => handleImageChange(0, url)}
        />
        <FileImage
          defaultImage={addImage}
          selectedImage={selectedImages[1]}
          onImageChange={(url) => handleImageChange(1, url)}
        />
        <FileImage
          defaultImage={addImage}
          selectedImage={selectedImages[2]}
          onImageChange={(url) => handleImageChange(2, url)}
        />
        <FileImage
          defaultImage={addImage}
          selectedImage={selectedImages[3]}
          onImageChange={(url) => handleImageChange(3, url)}
        />
      </div>
      <div className="w-full flex justify-end gap-4">
        <CommonButton
          type="button"
          title="مرحله قبل"
          classname="w-fit flex-row-reverse bg-subText text-[#000000]"
          icon={<ChevronRight size={16} />}
          onclick={() => setStep(prev => prev - 1)}
        />
        <CommonButton
          type="button"
          title="مرحله بعد"
          classname="w-fit"
          icon={<ChevronLeft size={16} />}
          onclick={nextStep}
        />
      </div>
    </div>
  )
}

export default FourthStep
