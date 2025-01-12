'use client';

import { Button } from '@/components';

export function HomeContainer() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Our Component Library</h1>
      <p className="text-xl text-white mb-8">
        Explore our collection of beautiful and functional UI components
      </p>
      <Button size="lg" variant="secondary">
        View Component Library
      </Button>
    </div>
  );
}
