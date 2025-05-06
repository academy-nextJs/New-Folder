// components/QAWidget.tsx
import React, { FC, useState } from 'react';
import { Star, Calendar, ChevronLeft, NotepadText } from 'lucide-react';
import { IGetComment } from '@/types/comment-type/comment-type';
import { convertToJalaliString } from '@/utils/helper/shamsiDate/ShamsDate';

export const QAWidget: FC<IGetComment> = ({
  rating,
  title,
  caption,
  created_at,
  user
}) => {
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const clampStyle: React.CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  };

  return (
    <div className="flex max-w-[487.5px] rounded-[32px] flex-col gap-8 bg-secondary-light2 px-4 py-4 pt-[40px] relative group
                    after:content-[''] after:w-[125px] after:h-[70px] after:group-hover:bg-primary
                    after:absolute after:top-[-40px] after:rounded-tr-2xl after:rounded-tl-[40px]
                    after:right-0 after:bg-secondary-light2">

      <div className='absolute z-10 right-3 top-[-25px] w-fit rounded-[16px] px-2 py-1 text-sm bg-white text-primary-foreground flex gap-2 items-center'>
        {rating || 0} ستاره <Star size={16} />
      </div>

      <h2
        className="cursor-pointer"
        style={!showFullTitle ? clampStyle : undefined}
        onClick={() => setShowFullTitle(prev => !prev)}
      >
        {title}
      </h2>

      <div className='flex gap-4 items-center'>
        <div className='bg-accent px-6 py-3 rounded-[16px] flex items-center gap-2 flex-row-reverse'>
          پاسخ کاربران <NotepadText size={16} />
        </div>
        <svg width="283" height="3" viewBox="0 0 283 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="1.5" x2="283" y2="1.49998" stroke="url(#paint0)" strokeWidth="3" />
          <defs>
            <linearGradient id="paint0" x1="283" y1="3.5" x2="0.5" y2="3.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className='flex gap-4 items-center'>
        <h2>{user?.full_name || 'ناشناس'}</h2>
        |
        <span className='text-xs text-subText flex items-center gap-2'>
          <Calendar size={12} /> {convertToJalaliString(created_at)}
        </span>
      </div>

      <h2
        className="cursor-pointer"
        style={!showFullCaption ? clampStyle : undefined}
        onClick={() => setShowFullCaption(prev => !prev)}
      >
        {caption}
      </h2>

      <div className='bg-card-light rounded-[16px] flex items-center justify-between py-2 px-4 gap-4'>
        <div className='flex items-center gap-4'>
          <div className='bg-subText rounded-[16px] w-[57px] h-[57px]' />
          <div className='flex flex-col justify-between gap-3'>
            <h2>{user?.full_name || 'ناشناس'}</h2>
            <span className='text-sm text-subText flex items-center gap-2'>
              <Calendar size={16} /> {convertToJalaliString(created_at)}
            </span>
          </div>
        </div>
        <div className='px-4 py-2 cursor-pointer border border-white rounded-[16px] flex items-center gap-2 flex-row-reverse'>
          <ChevronLeft size={16} /> ثبت پاسخ
        </div>
      </div>
    </div>
  );
};
