"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SearchModal } from "./SearchModal";

interface NavActionsProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export function NavActions({ onToggleMobileMenu, isMobileMenuOpen }: NavActionsProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
        {/* Search Modal Trigger */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="p-1.5 sm:p-2 text-[#FAF3E8]/85 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A60] shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
          aria-label="Search website"
          title="Search"
        >
          <svg
            className="w-4.5 h-4.5 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Primary CTA: 'Apply Now' Pill Button (Mobile Responsive padding & font) */}
        <Link
          href="/admissions/enquiry"
          className="inline-flex items-center justify-center px-3.5 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] rounded-full shadow-md hover:brightness-110 hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
        >
          <span>Apply Now</span>
          <span className="ml-1 text-[10px] sm:text-xs">→</span>
        </Link>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="lg:hidden p-1.5 sm:p-2 text-[#FAF3E8] hover:text-white rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C69A60] shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer touch-manipulation select-none active:scale-95"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Interactive Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

export default NavActions;
