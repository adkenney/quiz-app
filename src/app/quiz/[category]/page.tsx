'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import quizData from '../../../../public/assets/data.json';

export default function QuizPage() {
  const params = useParams();
  const [question, setQuestion] = useState(0);

  const filteredQuiz = quizData.quizzes.filter(
    quiz => quiz.title.toLowerCase() === params.category
  );

  return (
    <div>
      {filteredQuiz.map(quiz => {
        return (
          <>
            <h1>{quiz.title}</h1>
            <p className="text-secondary italic">
              Question {question + 1} of {quiz.questions.length}
            </p>
            <h2>{quiz.questions[question].question}</h2>
            <ul>
              {quiz.questions[question].options.map(option => {
                return <li>{option}</li>;
              })}
            </ul>
            <button
              className="bg-primary-button rounded-md p-3"
              onClick={() => setQuestion(curr => curr + 1)}
            >
              Submit Answer
            </button>
          </>
        );
      })}
    </div>
  );
}
