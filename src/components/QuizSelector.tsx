import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <>
      <Link href={quizLink}>
        <li className="flex items-center gap-3 p-3 bg-white rounded-xl text-lg leading-6">
          <Image
            className={`${bgColor} p-1 rounded-md`}
            src={imgSrc}
            alt=""
            width={28}
            height={28}
          />
          {quizText}
        </li>
      </Link>
    </>
  );
}
