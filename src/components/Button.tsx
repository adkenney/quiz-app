import React from 'react';

export default function Button({
  text,
  handleClick,
}: {
  text: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="text-white text-lg md:text-[1.75rem] font-medium bg-primary-button rounded-xl md:rounded-3xl p-3 md:p-8 mt-3 md:mt-8 hover:opacity-50 w-full"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
