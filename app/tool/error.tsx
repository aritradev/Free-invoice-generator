"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime Crash in Tool:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] bg-slate-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center max-w-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <p className="text-slate-600 mb-8">
          An unexpected error occurred while loading the generator. Our privacy-first engine relies on your browser's local storage.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
