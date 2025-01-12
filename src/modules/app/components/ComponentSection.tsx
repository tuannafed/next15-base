import React from 'react';

interface ComponentSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ComponentSection({ title, children }: ComponentSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="p-4 border rounded-lg bg-white">{children}</div>
    </section>
  );
}
