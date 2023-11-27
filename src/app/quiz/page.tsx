'use client';
import { useState } from 'react';
import quizData from '../../../public/assets/data.json';
export default function QuizPage() {
  const [quizNumber, setQuizNumber] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const questionLength = quizData.quizzes[0].questions.length;

  const handleSubmit = event => {
    // setAnswer(event.target.value);
    event.preventDefault();
    if (selectedOption === quizData.quizzes[0].questions[0].answer) {
      alert('Correct!');
    } else if (selectedOption !== quizData.quizzes[0].questions[0].answer) {
      alert('Wrong answer :(');
    }
  };

  const handleSelected = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <p>{`Question ${quizNumber} out of ${questionLength}`}</p>
      <p>{`${quizData.quizzes[0].questions[0].question}`}</p>
      <div className="flex flex-col">
        {quizData.quizzes[0].questions[0].options.map((option, idx) => (
          <label id={option} key={idx}>
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={handleSelected}
            ></input>
            {option}
          </label>
        ))}
        <button className="bg-blue-400 rounded" onClick={handleSubmit}>
          Submit Answer
        </button>
      </div>
    </div>
  );
}
