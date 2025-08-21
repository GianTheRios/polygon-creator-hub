"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 p-6 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-neutral-600 dark:text-neutral-400 max-w-md">We hit a snag loading this page. Try again, or return to the home section.</p>
      <div className="flex gap-3">
        <button onClick={() => reset()} className="rounded-full px-4 py-2 text-sm font-medium text-white bg-[color:rgb(var(--brand-700))] hover:bg-[color:rgb(var(--brand-600))]">Try again</button>
        <a href="#intro" className="rounded-full px-4 py-2 text-sm border border-black/10 dark:border-white/15">Go to top</a>
      </div>
    </div>
  );
}


