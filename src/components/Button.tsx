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
      className="text-white text-lg font-medium bg-primary-button rounded-xl p-3 mt-3 hover:opacity-50 w-full"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
