import QuizSelector from '@/components/QuizSelector';
import htmlIcon from '../../public/assets/icons/icon-html.svg';
import cssIcon from '../../public/assets/icons/icon-css.svg';
import jsIcon from '../../public/assets/icons/icon-js.svg';
import accessabilityIcon from '../../public/assets/icons/icon-accessibility.svg';

export default function Home() {
  return (
    <main className="pt-8 px-6 md:px-16 lg:px-36 lg:grid lg:grid-cols-2">
      <div className="mb-10 md:mb-16">
        <p className="text-[2.5rem] md:text-[4rem] font-light leading-10 md:leading-[100%]">
          Welcome to the
        </p>
        <h1 className="text-[2.5rem] md:text-[4rem] font-medium leading-10 md:leading-[100%]">
          Frontend Quiz!
        </h1>
        <p className="italic text-sm md:text-xl font-normal text-secondary mt-4 leading-5">
          Pick a subject to get started.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-3 md:gap-6">
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
