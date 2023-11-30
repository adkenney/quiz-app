'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function QuizSelector({
  quizLink,
  imgSrc,
  quizText,
  bgColor,
}: {
  quizLink: string;
  imgSrc: string;
  quizText: string;
  bgColor: string;
}) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(quizLink)}>
      <li className="flex items-center gap-3 p-3 bg-primary rounded-xl text-lg leading-6">
        <Image
          className={`${bgColor} p-1 rounded-md`}
          src={imgSrc}
          alt=""
          width={28}
          height={28}
        />
        {quizText}
      </li>
    </div>
  );
}
