'use client';

import React, { useRef, FC } from 'react';
import { Button } from '@/components/ui/button';
import TimerTwoMinutes from '@/utils/helper/Timer/TowMinuteTimer';
import { ChevronLeft, Clock } from 'lucide-react';
import { IButton } from '@/types/buttons-type/buttons-type';
import { useTranslation } from 'react-i18next';

interface TimerHandle {
  reset(): void;
}

const TimerButton: FC<IButton> = ({ onclick }) => {
  const timerRef = useRef<TimerHandle | null>(null);
  const {t, i18n} = useTranslation("auth") 

  const handleClick = () => {
    if (timerRef.current) {
      timerRef.current.reset()
    }
    if (onclick) {
      onclick();
    }
  };

  return (
    <div dir={i18n.dir()} className="bg-[#7569FF] w-[226px] h-[34px] flex justify-start text-card-foreground rounded-[12px]">
      <Button
        type='button'
        variant="none"
        onClick={handleClick}
        className="bg-white text-black w-2/3 h-full flex-row-reverse cursor-pointer text-[13px] font-semibold"
      >
        <ChevronLeft /> {t("verifyCodeForm.twiceSend")}
      </Button>
      <div className="flex justify-center flex-row-reverse gap-2 w-1/3 items-center">
        <Clock className="size-[16px]" />
        <TimerTwoMinutes ref={timerRef} onExpire={() => {
        }} />
      </div>
    </div>
  );
};

export default TimerButton;
