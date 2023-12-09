import React from 'react';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="bg-white h-4 mt-6 p-1 rounded-full">
      <div
        className={`bg-primary-button h-full rounded-full`}
        style={{ width: progress * 10 + '%' }}
      ></div>
    </div>
  );
}
