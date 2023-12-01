'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import quizData from '../../../../public/assets/data.json';
import { handleLetter } from '@/utils';

export default function QuizPage() {
  const params = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);

  const filteredQuiz = quizData.quizzes.filter(
    quiz => quiz.title.toLowerCase() === params.category
  );

  return (
    <div>
      {filteredQuiz.map((quiz, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-10">
            <div>
              <p className="text-sm text-secondary italic mb-3">
                Question {questionIndex + 1} of {quiz.questions.length}
              </p>
              <h2 className="text-xl font-medium">
                {quiz.questions[questionIndex].question}
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                {quiz.questions[questionIndex].options.map((option, idx) => {
                  const letter = handleLetter(idx);
                  return (
                    <li
                      key={idx}
                      className="flex items-center text-lg font-medium bg-white p-3 gap-4 rounded-lg"
                    >
                      <span className="flex justify-center items-center text-[#626c7f] bg-[#f4f6fa] h-10 w-10 rounded-md">
                        {letter}
                      </span>
                      {option}
                    </li>
                  );
                })}
              </ul>
              <button
                className="text-white bg-primary-button rounded-md p-3 mt-3 w-full"
                onClick={() => setQuestionIndex(curr => curr + 1)}
              >
                Submit Answer
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
