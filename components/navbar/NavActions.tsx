"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SearchModal } from "./SearchModal";
import { CartModal } from "./CartModal";

interface NavActionsProps {
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

export function NavActions({ onToggleMobileMenu, isMobileMenuOpen }: NavActionsProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-1.5 min-[360px]:space-x-2 sm:space-x-3 md:space-x-4">
        {/* 'Apply Now' Pill Button (matches screenshot) */}
        <Link
          href="/admissions/enquiry"
          className="inline-flex items-center justify-center px-2.5 min-[360px]:px-3 sm:px-5 py-1 sm:py-2 text-[10.5px] min-[360px]:text-[11px] sm:text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] rounded-full shadow-sm hover:brightness-110 hover:shadow-md active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
        >
          Apply Now
        </Link>

        {/* Search Icon Trigger */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="p-1 sm:p-1.5 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
          aria-label="Search website"
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

        {/* Shopping Bag Icon Trigger (desktop/tablet) */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="hidden sm:inline-flex relative p-1.5 text-white/90 hover:text-white rounded-full hover:bg-white/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
          aria-label="Open campus store and kits"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        </button>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="lg:hidden p-1.5 text-white/90 hover:text-white rounded-md hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Interactive Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
