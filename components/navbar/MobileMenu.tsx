"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, ADMISSION_PAGES } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>("Admissions");

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu automatically on route changes
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <div
      className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[70px] bottom-0 z-50 bg-gradient-to-b from-[#2A050D]/98 via-[#20040A]/98 to-[#170206]/98 backdrop-blur-2xl text-[#FAF3E8] overflow-y-auto overscroll-contain border-t border-[#C69A60]/30 animate-in slide-in-from-top-2 duration-200"
    >
      <div className="px-4 sm:px-6 py-4 pb-28 space-y-4 max-w-lg mx-auto">
        
        {/* Admissions Quick Status Banner */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#4A0E1B] to-[#330711] border border-[#C69A60]/40 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#E0BA85] uppercase tracking-wider">
              MBA Admissions 2026-27
            </span>
            <span className="text-[10px] bg-[#C69A60]/20 text-[#E0BA85] px-2 py-0.5 rounded-full border border-[#C69A60]/40 font-bold">
              DTE Code: 6156
            </span>
          </div>
          <p className="text-[11px] text-white/85 mt-1 leading-relaxed">
            Centralized CET / CAP seat rounds &amp; direct online enquiry assistance.
          </p>
        </div>

        {/* Navigation Accordion Items */}
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isAdmissions = item.label === "Admissions";
            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
            const isExpanded = expandedSection === item.label;
            const isActive = isAdmissions
              ? pathname.startsWith("/admissions")
              : pathname === item.href;

            // 1. Admissions Section (7 Steps Accordion)
            if (isAdmissions) {
              return (
                <div key={item.label} className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between py-1">
                    <button
                      type="button"
                      onClick={() => toggleSection(item.label)}
                      className={`flex-1 text-left text-base font-semibold py-2 transition-colors flex items-center justify-between ${
                        isActive ? "text-[#E0BA85]" : "text-[#FAF3E8] hover:text-[#E0BA85]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        <span className="text-[10px] bg-[#C69A60] text-[#3D0C16] font-extrabold px-1.5 py-0.5 rounded">
                          7 Steps
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-[#C69A60] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-1 pt-1 pb-2 space-y-1 bg-white/[0.04] rounded-2xl border border-[#C69A60]/20 p-2.5 mt-1">
                      {ADMISSION_PAGES.map((page) => {
                        const isCurrent = pathname === page.href;
                        return (
                          <Link
                            key={page.href}
                            href={page.href}
                            onClick={onClose}
                            className={`flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-xs transition-colors ${
                              isCurrent
                                ? "bg-[#C69A60]/25 text-[#FAF3E8] font-bold border border-[#C69A60]/40 shadow-sm"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-[#C69A60]/25 text-[#E0BA85] text-[10px] font-bold flex items-center justify-center shrink-0">
                              {page.num}
                            </span>
                            <span className="flex-1 font-medium">{page.title}</span>
                            <span className="text-[10px] text-[#C69A60] opacity-80">›</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // 2. Sections with Dropdowns (About Us, Placements, Campus Life)
            if (hasDropdown) {
              return (
                <div key={item.label} className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between py-1">
                    <button
                      type="button"
                      onClick={() => toggleSection(item.label)}
                      className={`flex-1 text-left text-base font-medium py-2 transition-colors flex items-center justify-between ${
                        isActive ? "text-[#E0BA85] font-semibold" : "text-[#FAF3E8]/95 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#C69A60]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-2 pt-1 pb-2 space-y-1.5 bg-white/[0.04] rounded-2xl border border-[#C69A60]/20 p-2.5 mt-1">
                      {/* Direct Link to Main Page */}
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-bold text-[#E0BA85] hover:bg-white/10 border-b border-white/10 mb-1"
                      >
                        <span>Visit {item.label} Overview</span>
                        <span>→</span>
                      </Link>

                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={onClose}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <div className="font-medium">{subItem.label}</div>
                          <span className="text-white/40 text-[10px]">›</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // 3. Regular Navigation Links (Home, Events, Contact Us)
            return (
              <div key={item.label} className="border-b border-white/10 pb-2">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block text-base font-medium py-2.5 transition-colors ${
                    isActive ? "text-[#E0BA85] font-semibold" : "text-[#FAF3E8]/95 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Action Buttons & Direct Helpline */}
        <div className="pt-3 space-y-3">
          <Link
            href="/admissions/enquiry"
            onClick={onClose}
            className="w-full block text-center py-3.5 px-5 text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] rounded-full shadow-lg hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            Apply for MBA 2026-27 →
          </Link>

          <div className="p-3 rounded-2xl bg-white/[0.04] border border-[#C69A60]/20 text-center space-y-1">
            <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider block">
              Admissions Desk &amp; Campus Helpline
            </span>
            <a
              href="tel:+912024356000"
              className="text-xs text-[#E0BA85] font-bold hover:underline block"
            >
              📞 +91 20 2435 6000
            </a>
            <span className="text-[10px] text-neutral-400 block">
              Pune, Maharashtra • Matrix Campus
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MobileMenu;
