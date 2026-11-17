"use client";

import React, { useState } from "react";
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

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <div className="lg:hidden fixed inset-x-0 top-[58px] sm:top-[64px] bottom-0 z-50 bg-[#2D070F]/98 backdrop-blur-2xl text-[#FAF3E8] overflow-y-auto border-t border-[#C69A60]/20 animate-in slide-in-from-top-2 duration-200">
      <div className="px-4 sm:px-6 py-5 pb-24 space-y-4">
        {/* Admissions Quick Hub Banner on Mobile */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#5B1525] to-[#3D0C16] border border-[#C69A60]/40 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#C69A60] uppercase tracking-wider">
              MBA Admissions 2026
            </span>
            <span className="text-[10px] bg-[#87977F]/30 text-[#FAF3E8] px-2 py-0.5 rounded-full border border-[#87977F]/40 font-semibold">
              CAP Open
            </span>
          </div>
          <p className="text-xs text-white/80 mt-1 leading-relaxed">
            Direct access to all 7 admission web pages, eligibility checks & online enquiry.
          </p>
        </div>

        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isAdmissions = item.label === "Admissions";
            const isExpanded = expandedSection === item.label;
            const isActive = isAdmissions
              ? pathname.startsWith("/admissions")
              : pathname === item.href;

            if (isAdmissions) {
              return (
                <div key={item.label} className="border-b border-white/10 pb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/admissions"
                      onClick={onClose}
                      className={`text-base font-semibold py-2 transition-colors flex items-center gap-2 ${
                        isActive ? "text-[#C69A60]" : "text-[#FAF3E8] hover:text-[#C69A60]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] bg-[#C69A60] text-[#3D0C16] font-bold px-1.5 py-0.5 rounded">
                        7 Pages
                      </span>
                    </Link>

                    <button
                      onClick={() => toggleSection(item.label)}
                      className="p-2 text-[#C69A60] hover:text-[#FAF3E8]"
                      aria-label="Toggle admissions subpages"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-2 pt-1 pb-2 space-y-1 bg-white/5 rounded-xl mt-1 border border-[#C69A60]/20 p-2">
                      {ADMISSION_PAGES.map((page) => {
                        const isCurrent = pathname === page.href;
                        return (
                          <Link
                            key={page.href}
                            href={page.href}
                            onClick={onClose}
                            className={`flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-xs transition-colors ${
                              isCurrent
                                ? "bg-[#C69A60]/25 text-[#FAF3E8] font-bold border border-[#C69A60]/40"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-[#C69A60]/20 text-[#C69A60] text-[10px] font-bold flex items-center justify-center shrink-0">
                              {page.num}
                            </span>
                            <span className="flex-1 font-medium">{page.title}</span>
                            <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

            return (
              <div key={item.label} className="border-b border-white/10 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`text-base font-medium py-2 transition-colors ${
                      isActive ? "text-[#C69A60] font-semibold" : "text-[#FAF3E8]/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {hasDropdown && (
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="p-2 text-white/70 hover:text-[#C69A60]"
                      aria-label={`Expand ${item.label} submenu`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {hasDropdown && isExpanded && (
                  <div className="pl-4 pt-1 pb-2 space-y-2 bg-white/5 rounded-lg mt-1">
                    {item.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={onClose}
                        className="block py-1.5 text-xs text-white/80 hover:text-[#C69A60]"
                      >
                        <div className="font-medium">{subItem.label}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Action Buttons */}
        <div className="pt-4 space-y-3">
          <Link
            href="/admissions/enquiry"
            onClick={onClose}
            className="w-full block text-center py-3 px-5 text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] rounded-full shadow-lg hover:brightness-105 transition-all"
          >
            Apply for MBA 2026-27
          </Link>
          <div className="text-center text-xs text-white/60">
            Admissions Desk: +91 20 2569 0000 • admissions@msmspune.com
          </div>
        </div>
      </div>
    </div>
  );
}
