'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';
import HeaderCategory from './HeaderCategory';

export default function Header() {
  const params = useParams();

  return (
    <header className="flex justify-between px-6 py-4">
      <>
        <HeaderCategory category={params.category} />
      </>
      <div className="flex items-center gap-2 ml-auto">
        <Image
          src="/assets/icons/icon-sun-dark.svg"
          width={16}
          height={16}
          alt=""
        />
        <Switch className="ml-auto" />
        <Image
          src="/assets/icons/icon-moon-dark.svg"
          width={16}
          height={16}
          alt=""
        />
      </div>
    </header>
  );
}
