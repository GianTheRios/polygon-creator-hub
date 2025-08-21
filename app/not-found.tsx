import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 p-6 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-neutral-600 dark:text-neutral-400">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="rounded-full px-4 py-2 text-sm border border-black/10 dark:border-white/15">Return home</Link>
    </div>
  );
}


