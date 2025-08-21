"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  lightSrc: string;
  darkSrc?: string;
  alt?: string;
  className?: string;
  size?: number;
};

export function Logo({ lightSrc, darkSrc, alt = "Polygon", className, size = 40 }: Props) {
  const [fallback, setFallback] = useState(false);
  const src = fallback ? "/logo-mark.svg" : lightSrc;
  const dark = darkSrc ?? lightSrc;
  return (
    <div className={className} style={{ width: size, height: size }}>
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={`block dark:hidden w-full h-full rounded-xl shadow-sm`}
          onError={() => setFallback(true)}
          priority
        />
        <Image
          src={dark}
          alt={alt}
          width={size}
          height={size}
          className={`hidden dark:block w-full h-full rounded-xl shadow-sm`}
          onError={() => setFallback(true)}
          priority
        />
      </div>
    </div>
  );
}


