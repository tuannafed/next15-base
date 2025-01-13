import React from 'react';

interface ComponentSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ComponentSection({ title, children }: ComponentSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[30%] mb-4 md:mb-0">
          <h2 className="heading-5">{title}</h2>
        </div>
        <div className="md:w-[70%]">{children}</div>
      </div>
    </section>
  );
}
