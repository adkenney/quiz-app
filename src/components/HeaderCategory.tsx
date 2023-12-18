import React from 'react';
import Image from 'next/image';
import { backgroundColor, handleCategoryIcon } from '@/utils';
import { categories } from '@/utils';

export default function HeaderCategory({
  category,
}: {
  category: string | string[];
}) {
  return (
    <>
      {categories.includes(category as string) ? (
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            className={`${backgroundColor(
              category as string
            )} p-1 rounded-md md:rounded-xl md:h-14 md:w-14`}
            src={handleCategoryIcon(category)}
            width={40}
            height={40}
            alt=""
          />
          <p className="text-lg md:text-[1.75rem] font-medium uppercase">
            {category}
          </p>
        </div>
      ) : null}
    </>
  );
}
