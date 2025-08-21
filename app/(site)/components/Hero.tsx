import { Wordmark } from "./Wordmark";

export function Hero() {
  return (
    <section id="intro" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Wordmark lightSrc="/brand/polygon-wordmark.svg" darkSrc="/brand/polygon-wordmark-dark.svg" width={180} height={40} priority />
        </div>
        <p className="text-sm font-medium text-[color:rgb(var(--brand-700))] mb-4">
          Understanding the foundation of our shared future.
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
          Create Content That
          <br />
          <span className="bg-[linear-gradient(90deg,rgba(var(--brand-600),1),rgba(var(--brand-700),1))] bg-clip-text text-transparent drop-shadow-sm">
            Shapes Web3
          </span>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Polygon has become the leading scaling solution with one of the most influential ecosystems in the industry.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#metrics" className="rounded-full px-6 py-3 text-white bg-[color:rgb(var(--brand-700))] hover:bg-[color:rgb(var(--brand-600))] shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgb(var(--brand-600))]">
            Explore Resources
          </a>
          <a href="#" className="rounded-full px-6 py-3 border border-black/10 dark:border-white/15 hover:border-black/20 dark:hover:border-white/25 bg-white/60 dark:bg-white/5 backdrop-blur">
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}


