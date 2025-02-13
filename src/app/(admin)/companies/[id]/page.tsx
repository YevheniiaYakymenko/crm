import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${resolvedParams.id})`}</p>
    </div>
  );
}
