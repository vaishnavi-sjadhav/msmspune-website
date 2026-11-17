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
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        const isAdmissions = item.label === "Admissions";
        const isActive = isAdmissions
          ? isAdmissionsActive
          : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        if (isAdmissions) {
          return (
            <div
              key={item.label}
              className="relative py-2"
              onMouseEnter={() => setIsAdmissionsOpen(true)}
              onMouseLeave={() => setIsAdmissionsOpen(false)}
            >
              <Link
                href="/admissions"
                className={`relative py-1.5 px-2.5 xl:px-3 text-[13.5px] xl:text-[14.5px] font-medium tracking-wide transition-colors duration-200 inline-flex items-center gap-1.5 group whitespace-nowrap ${
                  isActive ? "text-[#E0BA85] font-semibold" : "text-[#FAF3E8]/85 hover:text-white"
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

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#C69A60] rounded-full shadow-[0_0_8px_rgba(198,154,96,0.6)]"
                  />
                )}
              </Link>

              {/* Premium Admissions Mega Dropdown Menu */}
              <AnimatePresence>
                {isAdmissionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[400px] z-50"
                  >
                    <div className="bg-[#2D070F]/95 backdrop-blur-2xl border border-[#C69A60]/40 rounded-2xl shadow-2xl p-3.5 overflow-hidden ring-1 ring-black/40">
                      
                      {/* Dropdown Header */}
                      <div className="px-3 py-2 border-b border-[#C69A60]/20 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C69A60] animate-pulse" />
                          <span className="text-[11px] font-bold text-[#E0BA85] uppercase tracking-wider">
                            MBA Admissions 2026-27
                          </span>
                        </div>
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
                              className={`group/item flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
                                isCurrentPage
                                  ? "bg-[#C69A60]/25 border border-[#C69A60]/50 text-[#FAF3E8]"
                                  : "hover:bg-white/10 text-white/90 hover:text-white border border-transparent"
                              }`}
                            >
                              {/* Step Badge */}
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10.5px] font-bold shrink-0 transition-transform group-hover/item:scale-110 ${
                                  isCurrentPage
                                    ? "bg-[#C69A60] text-[#3D0C16]"
                                    : "bg-white/10 text-[#C69A60] group-hover/item:bg-[#C69A60] group-hover/item:text-[#3D0C16]"
                                }`}
                              >
                                {page.num}
                              </div>

                              {/* Title & Description */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold tracking-wide truncate group-hover/item:text-[#E0BA85] transition-colors">
                                    {page.title}
                                  </span>
                                  {isCurrentPage && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C69A60]" />
                                  )}
                                </div>
                                <p className="text-[10.5px] text-white/60 truncate group-hover/item:text-white/80 transition-colors">
                                  {page.description}
                                </p>
                              </div>

                              {/* Chevron Indicator */}
                              <svg
                                className="w-3.5 h-3.5 text-white/30 group-hover/item:text-[#C69A60] transition-transform group-hover/item:translate-x-0.5 shrink-0"
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
                      <div className="mt-2.5 pt-2.5 border-t border-[#C69A60]/20 px-2 flex items-center justify-between text-[11px]">
                        <span className="text-white/70">Need assistance?</span>
                        <Link
                          href="/admissions/enquiry"
                          onClick={() => setIsAdmissionsOpen(false)}
                          className="font-bold text-[#E0BA85] hover:text-white transition-colors inline-flex items-center gap-1 group/link"
                        >
                          <span>Admission Enquiry Desk</span>
                          <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        // Standard Navigation Items (Home, About Us, Placements, Campus Life, Events, Contact Us)
        const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

        return (
          <div
            key={item.label}
            className="relative py-2"
            onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
            onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={`relative py-1.5 px-2.5 xl:px-3 text-[13.5px] xl:text-[14.5px] font-medium tracking-wide transition-colors duration-200 inline-flex items-center gap-1 group whitespace-nowrap ${
                isActive ? "text-[#E0BA85] font-semibold" : "text-[#FAF3E8]/85 hover:text-white"
              }`}
            >
              <span>{item.label}</span>

              {/* Active Indicator Underline */}
              {isActive && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#C69A60] rounded-full shadow-[0_0_8px_rgba(198,154,96,0.6)]" />
              )}

              {/* Hover Underline when inactive */}
              {!isActive && (
                <span className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-[#C69A60]/60 rounded-full transition-all duration-200 group-hover:left-2.5 group-hover:right-2.5 opacity-0 group-hover:opacity-100" />
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

            {/* Standard Dropdown Card */}
            {hasDropdown && activeDropdown === item.label && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#2D070F]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-[#C69A60]/40 p-2 overflow-hidden ring-1 ring-black/40">
                  {item.dropdown?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-xl hover:bg-white/10 transition-colors group/item"
                    >
                      <div className="text-xs font-semibold text-white/95 group-hover/item:text-[#E0BA85] transition-colors">
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

export default NavLinks;
