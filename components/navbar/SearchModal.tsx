"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { QUICK_SEARCH_LINKS } from "@/constants/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = React.useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? QUICK_SEARCH_LINKS.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : QUICK_SEARCH_LINKS;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-100 gap-3">
          <svg
            className="w-5 h-5 text-neutral-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, admissions, campus facilities..."
            className="w-full text-base text-neutral-800 placeholder-neutral-400 bg-transparent focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-colors"
          >
            ESC
          </button>
        </div>

        <div className="p-4 max-h-80 overflow-y-auto">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            {query.trim() ? "Search Results" : "Quick Suggestions"}
          </div>
          {filtered.length > 0 ? (
            <ul className="space-y-1">
              {filtered.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#4A0E1B]/5 transition-colors group"
                  >
                    <span className="text-sm font-medium text-neutral-700 group-hover:text-[#4A0E1B]">
                      {item.title}
                    </span>
                    <span className="text-xs text-neutral-400 group-hover:text-[#4A0E1B]/70 px-2 py-0.5 rounded-full bg-neutral-100 group-hover:bg-[#4A0E1B]/10">
                      {item.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-8 text-center text-sm text-neutral-400">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
