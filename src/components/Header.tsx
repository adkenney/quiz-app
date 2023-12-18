'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';
import HeaderCategory from './HeaderCategory';
import { useTheme } from 'next-themes';

export default function Header() {
  const params = useParams();
  const { theme, setTheme } = useTheme();

  const sunIcon =
    theme === 'light'
      ? '/assets/icons/icon-sun-dark.svg'
      : '/assets/icons/icon-sun-light.svg';
  const moonIcon =
    theme === 'light'
      ? '/assets/icons/icon-moon-dark.svg'
      : '/assets/icons/icon-moon-light.svg';

  return (
    <header className="flex justify-between px-6 py-4 md:px-16 md:pt-10 lg:px-36">
      <>
        <HeaderCategory category={params.category} />
      </>
      <div className="flex items-center gap-2 ml-auto">
        <Image
          className="md:h-6 md:w-6"
          src={sunIcon}
          width={16}
          height={16}
          alt=""
        />
        <Switch
          aria-label="theme toggle"
          className="ml-auto"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          checked={theme === 'dark' ? true : false}
        />
        <Image
          className="md:h-6 md:w-6"
          src={moonIcon}
          width={16}
          height={16}
          alt=""
        />
      </div>
    </header>
  );
}
