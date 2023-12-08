import React from 'react';
import { handleLetter } from '@/utils';
import correctIcon from '../../public/assets/icons/icon-correct.svg';
import incorrectIcon from '../../public/assets/icons/icon-incorrect.svg';
import Image from 'next/image';

export default function QuizOption({
  option,
  selectedOption,
  answer,
  id,
  selected,
  correct,
  wrong,
  disabled,
  handleChange,
}: {
  option: string;
  selectedOption: string;
  answer: string;
  id: number;
  selected: boolean;
  correct: boolean;
  wrong: boolean;
  disabled: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const letter = handleLetter(id);

  return (
    <li className="group flex items-center text-lg font-medium cursor-pointer">
      <input
        type="radio"
        name="choice"
        id={`choice-${id}`}
        value={option}
        className="hidden peer"
        onChange={handleChange}
        disabled={disabled}
        checked={selectedOption === option}
      />
      <label
        className={`${correct ? 'peer-checked:border-success ' : ''} ${
          wrong ? 'peer-checked:border-error ' : 'peer-checked:border-primary '
        }flex items-center bg-white p-3 gap-4 rounded-xl peer-checked:border-[3px] cursor-pointer w-full`}
        htmlFor={`choice-${id}`}
      >
        <span
          className={`${correct ? 'bg-success ' : ''} ${
            wrong && selected ? 'bg-error ' : ''
          } ${
            selected && !wrong ? 'bg-primary-button ' : 'bg-[#F4F6FA] '
          }flex shrink-0 justify-center items-center h-10 w-10 rounded-md group-hover:bg-light-purple group-hover:text-dark-purple`}
        >
          {letter}
        </span>
        <p>{option}</p>
        {correct ? (
          <Image
            className="ml-auto"
            src={correctIcon}
            width={24}
            height={24}
            alt=""
          />
        ) : null}
        {wrong && answer === option ? (
          <Image
            className="ml-auto"
            src={correctIcon}
            width={24}
            height={24}
            alt=""
          />
        ) : null}
        {wrong && selected ? (
          <Image
            className="ml-auto"
            src={incorrectIcon}
            width={24}
            height={24}
            alt=""
          />
        ) : null}
      </label>
    </li>
  );
}
