"use client";

import React, { useEffect } from "react";
import Link from "next/link";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <div className="relative w-full max-w-sm bg-white h-full sm:h-auto sm:max-h-[85vh] sm:rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 flex flex-col animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 bg-[#4A0E1B] text-white">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="font-semibold text-base">Campus Store & Kit</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3">
            <span className="text-xl">🎓</span>
            <div>
              <h4 className="text-sm font-semibold text-neutral-800">2026 Admissions Prospectus Kit</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Complimentary physical syllabus & campus roadmap package.</p>
              <span className="inline-block mt-2 text-xs font-bold text-[#4A0E1B]">FREE with Registration</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3">
            <span className="text-xl">🏛️</span>
            <div>
              <h4 className="text-sm font-semibold text-neutral-800">MSMS Centenary Hoodie (Official)</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Premium cotton collegiate fleece with embroidered insignia.</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-bold text-neutral-900">₹1,499</span>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">In Stock</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex flex-col gap-2">
          <Link
            href="/store"
            onClick={onClose}
            className="w-full text-center py-2.5 px-4 rounded-full bg-[#4A0E1B] text-white font-medium text-sm hover:bg-[#380914] transition-all shadow-md"
          >
            Go to Official Store
          </Link>
          <button
            onClick={onClose}
            className="w-full text-center py-2 text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
