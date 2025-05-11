'use client';

import { Heart, Home, LogOut, Text, User, MoreHorizontal, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DeltaIcon from '@/app/icon.png';
import { redirect, usePathname } from 'next/navigation';

const routes = [
  { label: 'داشبورد', href: '/dashboard', icon: Home },
  { label: 'اطلاعات کاربری', href: '/dashboard/profile', icon: User },
  { label: 'ذخیره‌ها', href: '/dashboard/favorites', icon: Heart },
  { label: 'دیدگاه‌های من', href: '/dashboard/my-comments', icon: Text },
  { label: 'مورد اضافه', href: '/dashboard/extra', icon: MoreHorizontal },
];

const SidebarDashboard = () => {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  const mainRoutes = routes.slice(0, 4);
  const extraRoutes = routes.slice(4);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setShowMore(false);
      }
    };
    if (showMore) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMore]);

  return (
    <div className="relative">
      <div className="bg-subBg px-4 py-8 gap-8 rounded-xl w-2/12 hidden xl:flex flex-col shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">دلتا</h2>
          <LogOut onClick={() => redirect('/')} className="cursor-pointer hover:text-danger transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          {routes.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex gap-3 items-center px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-subBg2'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-dvw fixed bottom-0 right-0 z-50 flex justify-around items-center xl:hidden bg-subBg border-t py-3">
        {mainRoutes.map(({ href, icon: Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link key={href} href={href} className="flex flex-col items-center">
              <Icon className={`w-6 h-6 ${isActive ? 'text-primary' : ''}`} />
            </Link>
          );
        })}

        {extraRoutes.length > 0 && (
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="flex flex-col items-center"
            >
              <MoreHorizontal className="w-6 h-6" />
            </button>
            {showMore && (
              <div className="absolute px-2 py-2 bottom-12 left-0 bg-subBg shadow-xl rounded-lg z-50 flex flex-col gap-2 w-max min-w-[160px]">
                <button
                  onClick={() => setShowMore(false)}
                  className="self-end mb-2"
                >
                  <X className="w-4 h-4" />
                </button>
                {extraRoutes.map(({ href, label }) => {
                  const isActive = pathname.startsWith(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 px-2 py-1 flex-nowrap whitespace-nowrap rounded-md text-sm ${
                        isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-subBg2'
                      }`}
                      onClick={() => setShowMore(false)}
                    >
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <Link href="/" className="p-1 rounded-full shadow-md">
          <Image src={DeltaIcon} alt="Delta" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
};

export default SidebarDashboard;
