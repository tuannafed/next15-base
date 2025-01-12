'use client';

export default function GlobalError() {
  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <h2 className="font-heading my-2 text-2xl font-bold">Something&apos;s missing</h2>
      <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
      <div className="mt-8 flex justify-center gap-2"></div>
    </div>
  );
}
