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
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center text-gray-500 text-xl">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-logo-100 px-4 py-2 text-sm text-white transition-colors"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
