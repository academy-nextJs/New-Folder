'use client';

import React, { useRef, FC } from 'react';
import { Button } from '@/components/ui/button';
import { ITimerButton } from '@/types/buttons-type/timerButton-type';
import TimerTwoMinutes from '@/utils/helper/Timer/TowMinuteTimer';
import { ChevronLeft, Clock } from 'lucide-react';

const TimerButton: FC<ITimerButton> = ({ onclick }) => {
  const timerRef = useRef(null);

  const handleClick = () => {
    if (timerRef.current) {
      timerRef.current.reset();
    }
    if (onclick) {
      onclick();
    }
  };

  return (
    <div className="bg-[#7569FF] w-[226px] h-[34px] flex flex-row-reverse justify-start text-white rounded-[12px]">
      <Button
        variant="none"
        onClick={handleClick}
        className="bg-white text-black w-2/3 h-full cursor-pointer text-[13px] font-semibold"
      >
        <ChevronLeft /> ارسال دوباره رمز
      </Button>
      <div className="flex justify-center gap-2 w-1/3 items-center">
        <Clock className="size-[16px]" />
        <TimerTwoMinutes ref={timerRef} onExpire={() => {
        }} />
      </div>
    </div>
  );
};

export default TimerButton;
