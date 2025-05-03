'use client';
import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="w-screen h-screen fixed z-[10000] bg-background flex justify-center items-center mx-auto">
      <div className="w-16 h-16 border-4 dark:border-green-500 border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
