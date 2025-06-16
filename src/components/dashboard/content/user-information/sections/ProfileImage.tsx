/* eslint-disable */

'use client'
import SelectImageModal from '@/components/dashboard/modal/SelectImageModal'
import { Camera } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSession } from 'next-auth/react'
import { editProfile } from '@/utils/service/api/profile/editProfile'
import { getProfileById } from '@/utils/service/api/profile/getProfileById'
import { IProfile } from '@/types/profile-type/profile-type'

const ProfileImage = () => {

  const { data: session } = useSession() as any

  const [profile, setProfile] = useState<IProfile | null>(null)
  const getProfile = async () => {
    if (session?.userInfo?.id) {
      const profile = await getProfileById(session?.userInfo?.id);
      setProfile(profile);
    }
  }

  useEffect(() => {
    getProfile()
  }, [session?.userInfo?.id])

  const [open, setOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(profile?.profilePicture || null)
  console.log("selectedImage:  ", selectedImage)
  const t = useTranslations('dashboardBuyer.profile2');

  const handleEditProfile = async () => {
    await editProfile(session?.userInfo?.id, {
      profilePicture: selectedImage
    })
  }

  useEffect(() => {
    handleEditProfile()
  }, [selectedImage])

  return (
    <div className='flex w-full max-sm:flex-col flex-row max-sm:gap-8'>
      <div className='flex flex-col gap-2 w-1/2 max-xl:w-full'>
        <h2 className='text-xl font-bold'>{t('title')}</h2>
        <span className='text-subText'>{t('subtitle')}</span>
      </div>
      <div className='w-1/2 max-sm:w-full flex justify-start relative'>
        <img src={selectedImage || '/default-profile.png'} alt='' className='rounded-full size-[120px] bg-subBg2 relative' />
        <div onClick={() => setOpen(true)} className='bg-primary rounded-full flex items-center justify-center cursor-pointer absolute size-[21px] top-4 text-primary-foreground'>
          <Camera size={16} />
        </div>
      </div>
      <SelectImageModal handleEditProfile={handleEditProfile} selectedImage={selectedImage} open={open} setOpen={setOpen} setSelectedImage={setSelectedImage} />
    </div>
  )
}

export default ProfileImage