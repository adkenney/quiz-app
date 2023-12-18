'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { backgroundColor } from '@/utils';

export default function QuizSelector({
  quizLink,
  imgSrc,
  quizText,
}: {
  quizLink: string;
  imgSrc: string;
  quizText: string;
}) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(quizLink)}>
      <li className="flex items-center gap-3 md:gap-8 p-3 bg-primary rounded-xl text-lg md:text-[1.75rem] font-medium leading-6 cursor-pointer">
        <Image
          className={`${backgroundColor(
            quizText.toLowerCase()
          )} p-1 rounded-md md:rounded-xl md:w-[2em] md:h-[2em]`}
          src={imgSrc}
          alt=""
          width={30}
          height={30}
        />
        {quizText}
      </li>
    </div>
  );
}
