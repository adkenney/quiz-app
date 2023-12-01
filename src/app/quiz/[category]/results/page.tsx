'use client';
import React from 'react';
import { useParams } from 'next/navigation';

export default function ResultsPage() {
  const params = useParams();
  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  );
}
