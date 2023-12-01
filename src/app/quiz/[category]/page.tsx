'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import quizData from '../../../../public/assets/data.json';

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
          <div key={idx}>
            <h1>{quiz.title}</h1>
            <p className="text-secondary italic">
              Question {questionIndex + 1} of {quiz.questions.length}
            </p>
            <h2>{quiz.questions[questionIndex].question}</h2>
            <ul>
              {quiz.questions[questionIndex].options.map((option, idx) => {
                return <li key={idx}>{option}</li>;
              })}
            </ul>
            <button
              className="bg-primary-button rounded-md p-3"
              onClick={() => setQuestionIndex(curr => curr + 1)}
            >
              Submit Answer
            </button>
          </div>
        );
      })}
    </div>
  );
}
