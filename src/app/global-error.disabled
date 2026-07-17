"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#FAF9F6] text-neutral-800 min-h-screen font-sans flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl">
          <h1 className="text-6xl font-black text-orange-600 font-mono">500</h1>
          <h2 className="text-2xl font-bold text-neutral-900">A Critical Error Occurred</h2>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Amigo encountered an unexpected issue while rendering the application. We've logged this error and are looking into it.
          </p>
          {error?.message && (
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-left">
              <p className="text-xs font-mono text-neutral-500 break-all">{error.message}</p>
            </div>
          )}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-md cursor-pointer"
            >
              Try Again
            </button>
            <a
              href="/"
              className="px-6 py-3 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-bold rounded-xl transition-colors shadow-md inline-block"
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
