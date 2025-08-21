"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { id: "metrics", label: "Metrics" },
  { id: "resources", label: "Resources" },
  { id: "content", label: "Content" },
  { id: "tools", label: "Tools" },
];

export function Header() {
  const [active, setActive] = useState<string>("intro");
  useEffect(() => {
    const ids = ["intro", ...nav.map((n) => n.id), "community"];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#intro" className="flex items-center gap-3" onClick={(e)=>{e.preventDefault();scrollTo("intro");}}>
          <div className="w-10 h-10 rounded-xl bg-[color:rgb(var(--brand-600))]" />
          <div>
            <p className="text-sm font-semibold">Creator Hub</p>
            <p className="text-xs text-neutral-500">by Polygon Labs</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 relative"
            >
              {item.label}
              {active === item.id && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[color:rgb(var(--brand-700))] rounded-full" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="rounded-full px-4 py-2 text-sm font-medium text-white bg-[color:rgb(var(--brand-700))] hover:bg-[color:rgb(var(--brand-600))]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}


