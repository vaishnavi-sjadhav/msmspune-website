import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export function BrandLogo({ className = "", variant = "light" }: BrandLogoProps) {
  const isLight = variant === "light";
  const primaryTextColor = isLight ? "text-white" : "text-[#3D0C16]";
  const secondaryTextColor = isLight ? "text-white/80" : "text-[#5B1525]/80";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A60] rounded-sm transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Matrix School of Management Studies Home"
    >
      {/* Emblem: Stylized Academic M with Green Laurel / Sprout & Gold Accents */}
      <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 shrink-0">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Serif Letter M */}
          <path
            d="M6 36V12L18 28L30 12V36M4 36H10M26 36H34M3 12H11M27 12H35"
            stroke={isLight ? "#FAF3E8" : "#3D0C16"}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Botanical Sprout / Leaf in Center */}
          <path
            d="M18 26C18 20 20 14 24 10C24 16 22 22 18 26Z"
            fill="#87977F"
          />
          <path
            d="M18 26C15 22 16 16 20 13"
            stroke="#C69A60"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography (Matches "MATRIX School of Management Studies" in the mockup) */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif text-[13px] min-[360px]:text-sm sm:text-lg font-bold tracking-[0.12em] min-[360px]:tracking-[0.14em] sm:tracking-[0.16em] ${primaryTextColor} transition-colors`}
        >
          MATRIX
        </span>
        <span
          className={`font-sans text-[7px] min-[360px]:text-[7.5px] sm:text-[9.5px] tracking-[0.04em] min-[360px]:tracking-[0.08em] sm:tracking-[0.12em] font-medium uppercase ${secondaryTextColor} transition-colors whitespace-nowrap`}
        >
          School of Management Studies
        </span>
      </div>
    </Link>
  );
}
