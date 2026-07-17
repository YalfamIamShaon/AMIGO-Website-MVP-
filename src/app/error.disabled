"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F6] text-neutral-800 p-4 text-center">
      <h1 className="text-6xl font-black text-rose-600 mb-4 font-mono">500</h1>
      <h2 className="text-2xl font-bold mb-4 text-neutral-900">Something went wrong!</h2>
      <p className="text-neutral-500 max-w-md mb-8">
        We encountered a server-side error. Please try again or return to the home page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-md cursor-pointer"
        >
          Try Again
        </button>
        <a
          href="/"
          className="px-6 py-3 bg-neutral-200 hover:bg-[#E5E4E2] text-neutral-800 font-bold rounded-xl transition-colors shadow-md inline-block"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
