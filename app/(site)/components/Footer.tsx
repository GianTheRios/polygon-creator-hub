export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="Polygon" className="w-10 h-10 rounded-xl shadow-sm" />
          <div>
            <p className="font-semibold">Polygon Creator Hub</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Build the future, together</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a className="text-neutral-600 dark:text-neutral-300 hover:text-[color:rgb(var(--brand-700))]" href="#">Documentation</a>
          <a className="text-neutral-600 dark:text-neutral-300 hover:text-[color:rgb(var(--brand-700))]" href="#">Discord</a>
          <a className="text-neutral-600 dark:text-neutral-300 hover:text-[color:rgb(var(--brand-700))]" href="#">Twitter</a>
          <a className="text-neutral-600 dark:text-neutral-300 hover:text-[color:rgb(var(--brand-700))]" href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}


