import Image from 'next/image';
import Link from 'next/link';
import QuizSelector from '@/components/QuizSelector';
import htmlIcon from '../../public/assets/icons/icon-html.svg';
import cssIcon from '../../public/assets/icons/icon-css.svg';
import jsIcon from '../../public/assets/icons/icon-js.svg';
import accessabilityIcon from '../../public/assets/icons/icon-accessibility.svg';

export default function Home() {
  return (
    <main className="pt-8 px-6">
      <div className="mb-10">
        <p className="text-[40px] font-light leading-10">Welcome to the</p>
        <h1 className="text-[40px] font-medium leading-10">Frontend Quiz!</h1>
        <p className="italic text-sm font-normal mt-4 leading-5">
          Pick a subject to get started.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <QuizSelector
            quizLink="/quiz"
            imgSrc={htmlIcon}
            quizText="HTML"
            bgColor="bg-light-orange"
          />
          <QuizSelector
            quizLink="/quiz"
            imgSrc={cssIcon}
            quizText="CSS"
            bgColor="bg-light-green"
          />
          <QuizSelector
            quizLink="/quiz"
            imgSrc={jsIcon}
            quizText="Javascript"
            bgColor="bg-light-blue"
          />
          <QuizSelector
            quizLink="/quiz"
            imgSrc={accessabilityIcon}
            quizText="Accessibility"
            bgColor="bg-light-purple"
          />
        </ul>
      </div>
    </main>
  );
}
