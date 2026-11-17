"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, ADMISSION_PAGES } from "@/constants/navigation";

export function NavLinks() {
  const pathname = usePathname();
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isAdmissionsActive = pathname.startsWith("/admissions");

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 2xl:space-x-5" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        const isAdmissions = item.label === "Admissions";
        const isActive = isAdmissions
          ? isAdmissionsActive
          : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        if (isAdmissions) {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setIsAdmissionsOpen(true)}
              onMouseLeave={() => setIsAdmissionsOpen(false)}
            >
              <Link
                href="/admissions"
                className={`relative py-2.5 px-2 xl:px-2.5 text-[13px] xl:text-[14.5px] font-medium tracking-wide transition-colors duration-200 inline-flex items-center gap-1 group ${
                  isActive ? "text-[#FAF3E8]" : "text-[#FAF3E8]/85 hover:text-[#FAF3E8]"
                }`}
              >
                <span>{item.label}</span>

                {/* Animated chevron */}
                <motion.span
                  animate={{ rotate: isAdmissionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#C69A60]"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>

                {/* Active Underline Indicator */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#C69A60] rounded-full shadow-[0_0_8px_rgba(198,154,96,0.6)]"
                  />
                )}
              </Link>

              {/* Premium Animated Admissions Dropdown Menu */}
              <AnimatePresence>
                {isAdmissionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[380px] z-50"
                  >
                    <div className="bg-[#2D070F]/95 backdrop-blur-xl border border-[#C69A60]/30 rounded-2xl shadow-2xl p-3 overflow-hidden ring-1 ring-black/40">
                      
                      {/* Dropdown Header */}
                      <div className="px-3 py-2 border-b border-[#C69A60]/20 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#C69A60] uppercase tracking-wider">
                          Admissions 2026-27
                        </span>
                        <span className="text-[10px] font-semibold text-[#87977F] bg-[#87977F]/15 px-2 py-0.5 rounded-full border border-[#87977F]/30">
                          CET / CAP Open
                        </span>
                      </div>

                      {/* 7 Individual Submenu Pages */}
                      <div className="mt-2 space-y-1">
                        {ADMISSION_PAGES.map((page) => {
                          const isCurrentPage = pathname === page.href;

                          return (
                            <Link
                              key={page.href}
                              href={page.href}
                              onClick={() => setIsAdmissionsOpen(false)}
                              className={`group/item flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                                isCurrentPage
                                  ? "bg-[#C69A60]/20 border border-[#C69A60]/40 text-[#FAF3E8]"
                                  : "hover:bg-[#5B1525]/60 text-white/90 hover:text-white border border-transparent"
                              }`}
                            >
                              {/* Page Number Badge */}
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-transform group-hover/item:scale-110 ${
                                  isCurrentPage
                                    ? "bg-[#C69A60] text-[#3D0C16]"
                                    : "bg-white/10 text-[#C69A60] group-hover/item:bg-[#C69A60] group-hover/item:text-[#3D0C16]"
                                }`}
                              >
                                {page.num}
                              </div>

                              {/* Title & Short Description */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold tracking-wide truncate group-hover/item:text-[#C69A60] transition-colors">
                                    {page.title}
                                  </span>
                                  {isCurrentPage && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C69A60] animate-pulse" />
                                  )}
                                </div>
                                <p className="text-[10.5px] text-white/60 truncate group-hover/item:text-white/80 transition-colors">
                                  {page.description}
                                </p>
                              </div>

                              {/* Subtle arrow indicator */}
                              <svg
                                className="w-3.5 h-3.5 text-white/40 group-hover/item:text-[#C69A60] transition-transform group-hover/item:translate-x-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Dropdown Footer CTA */}
                      <div className="mt-2 pt-2 border-t border-[#C69A60]/20 px-2 flex items-center justify-between text-[11px]">
                        <span className="text-white/60">Helpline: +91 20 2569 0000</span>
                        <Link
                          href="/admissions/enquiry"
                          onClick={() => setIsAdmissionsOpen(false)}
                          className="font-semibold text-[#C69A60] hover:text-[#FAF3E8] transition-colors underline decoration-[#C69A60]/50"
                        >
                          Enquire Now →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        // Standard Navigation Items (Academics, About Us, Placements, Campus Life, Contact Us)
        const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={`relative py-2.5 px-2 xl:px-2.5 text-[13px] xl:text-[14.5px] font-medium tracking-wide transition-colors duration-200 inline-flex items-center gap-1 group ${
                isActive ? "text-[#FAF3E8]" : "text-[#FAF3E8]/85 hover:text-[#FAF3E8]"
              }`}
            >
              <span>{item.label}</span>

              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C69A60] rounded-full" />
              )}

              {!isActive && (
                <span className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-[#C69A60]/70 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 opacity-0 group-hover:opacity-100" />
              )}

              {hasDropdown && (
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 text-[#C69A60]/80 group-hover:text-[#C69A60] ${
                    activeDropdown === item.label ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>

            {hasDropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#2D070F]/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[#C69A60]/30 p-2 overflow-hidden ring-1 ring-black/40">
                  {item.dropdown?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-lg hover:bg-[#5B1525]/70 transition-colors group/item"
                    >
                      <div className="text-xs font-semibold text-white/90 group-hover/item:text-[#C69A60]">
                        {subItem.label}
                      </div>
                      {subItem.description && (
                        <div className="text-[11px] text-white/60 mt-0.5 leading-snug">
                          {subItem.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
