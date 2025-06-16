import { BlurFade } from '@/components/magicui/blur-fade'
import React from 'react'
import FavoritesHeader from './header/FavoritesHeader'
import FavoritesDetail from './detail/FavoritesDetail'
import { getCategories } from '@/utils/service/api/categories'
import { Category } from '@/types/categories-type/categories-type'

const FavoritesComponent = async () => {
    const categories = (await getCategories()).data  as Category[]

    return (
        <BlurFade className='px-4 bg-subBg rounded-xl py-4 flex flex-col gap-6'>
            <FavoritesHeader categories={categories} />
            <svg width="100%" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="100%" y2="1" stroke="#888888" strokeOpacity="0.26" strokeDasharray="7 7" />
            </svg>
            <FavoritesDetail />
        </BlurFade>
    )
}

export default FavoritesComponent
