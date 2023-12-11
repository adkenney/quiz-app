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
        <div className="flex items-center gap-4">
          <Image
            className={`${backgroundColor(category as string)} p-1 rounded-md`}
            src={handleCategoryIcon(category)}
            width={40}
            height={40}
            alt=""
          />
          <p className="text-lg font-medium">{category.toUpperCase()}</p>
        </div>
      ) : null}
    </>
  );
}
