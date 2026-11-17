import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export function BrandLogo({ className = "", variant = "light" }: BrandLogoProps) {
  const isLight = variant === "light";
  const primaryTextColor = isLight ? "text-[#FAF3E8]" : "text-[#3D0C16]";
  const secondaryTextColor = isLight ? "text-[#E0BA85]/90" : "text-[#5B1525]/80";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A60] rounded-sm transition-transform duration-200 active:scale-95 ${className}`}
      aria-label="Matrix School of Management Studies Home"
    >
      {/* Collegiate Crest Emblem Medallion */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-gradient-to-br from-[#C69A60] via-[#E0BA85] to-[#996C2E] p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-full bg-[#3D0C16] flex items-center justify-center border border-[#C69A60]/60">
          <span className="font-serif font-black text-xs sm:text-sm text-[#E0BA85] tracking-tight group-hover:text-white transition-colors">
            MS
          </span>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif text-base sm:text-xl font-bold tracking-[0.14em] ${primaryTextColor} transition-colors group-hover:text-[#E0BA85]`}
          >
            MATRIX
          </span>
          <span className="text-[9px] font-sans font-bold px-1.5 py-0.5 rounded bg-[#C69A60]/20 text-[#C69A60] border border-[#C69A60]/40 uppercase tracking-widest hidden sm:inline-block">
            MSMS
          </span>
        </div>
        <span
          className={`font-sans text-[8px] sm:text-[9.5px] tracking-[0.12em] font-medium uppercase ${secondaryTextColor} pt-1 transition-colors whitespace-nowrap`}
        >
          School of Management Studies
        </span>
      </div>
    </Link>
  );
}

export default BrandLogo;
