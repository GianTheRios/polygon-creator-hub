"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setMounted(true);
    const initial =
      typeof window !== "undefined"
        ? localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
        : "light";
    if (initial === "dark") document.documentElement.classList.add("dark");
    setDark(initial === "dark");
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  if (!mounted) return null;
  return (
    <button
      onClick={toggle}
      className="rounded-full px-3 py-1.5 text-sm border border-black/10 hover:bg-neutral-100"
      aria-label="Toggle dark mode"
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}


