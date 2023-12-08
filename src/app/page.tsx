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
        <p className="italic text-sm font-normal text-secondary mt-4 leading-5">
          Pick a subject to get started.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          <QuizSelector
            quizLink="/quiz/html"
            imgSrc={htmlIcon}
            quizText="HTML"
          />
          <QuizSelector quizLink="/quiz/css" imgSrc={cssIcon} quizText="CSS" />
          <QuizSelector
            quizLink="/quiz/javascript"
            imgSrc={jsIcon}
            quizText="Javascript"
          />
          <QuizSelector
            quizLink="/quiz/accessibility"
            imgSrc={accessabilityIcon}
            quizText="Accessibility"
          />
        </ul>
      </div>
    </main>
  );
}
