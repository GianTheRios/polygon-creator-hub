"use client";
import Image from "next/image";

type Props = {
  lightSrc: string;
  darkSrc?: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function Wordmark({ lightSrc, darkSrc, width = 180, height = 40, className, alt = "Polygon", priority }: Props) {
  const dark = darkSrc ?? lightSrc;
  return (
    <div className={className}>
      <Image src={lightSrc} alt={alt} width={width} height={height} className="block dark:hidden" priority={priority} />
      <Image src={dark} alt={alt} width={width} height={height} className="hidden dark:block" priority={priority} />
    </div>
  );
}


