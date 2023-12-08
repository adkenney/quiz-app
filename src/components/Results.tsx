'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { backgroundColor } from '@/utils';

export default function Results({
  score,
  icon,
  quizType,
}: {
  score: number;
  icon: string;
  quizType: string;
}) {
  const router = useRouter();
  return (
    <div>
      <p className="text-[40px] font-light">Quiz completed</p>
      <p className="text-[40px] font-medium mb-10">You scored...</p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-sm">
          <div className="flex items-center gap-4">
            <span
              className={`flex items-center ${backgroundColor(
                quizType.toLowerCase()
              )} p-1 rounded-md`}
            >
              <Image src={icon} height={30} width={30} alt="" />
            </span>
            <p className="text-lg font-medium">{quizType}</p>
          </div>
          <p className="text-[88px] font-medium">{score}</p>
          <p className="text-lg text-secondary font-normal">out of 10</p>
        </div>
        <button
          className="bg-primary-button text-white text-lg font-medium p-3 rounded-xl"
          onClick={() => router.push('/')}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
