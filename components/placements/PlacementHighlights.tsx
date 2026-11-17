"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PlacementHighlights() {
  const [activeYear, setActiveYear] = useState("2025-26");

  const yearStats: Record<string, { totalPlaced: string; companies: string; highestPkg: string; placementRate: string; avgPkg: string }> = {
    "2025-26": { totalPlaced: "2150+", companies: "350+", highestPkg: "12 LPA", placementRate: "97%", avgPkg: "6.8 LPA" },
    "2024-25": { totalPlaced: "1980+", companies: "320+", highestPkg: "11.5 LPA", placementRate: "96.5%", avgPkg: "6.5 LPA" },
    "2023-24": { totalPlaced: "1820+", companies: "290+", highestPkg: "10.8 LPA", placementRate: "95%", avgPkg: "6.2 LPA" },
    "2022-23": { totalPlaced: "1650+", companies: "260+", highestPkg: "10.2 LPA", placementRate: "94.2%", avgPkg: "5.9 LPA" },
    "2021-22": { totalPlaced: "1500+", companies: "230+", highestPkg: "9.6 LPA", placementRate: "93%", avgPkg: "5.5 LPA" },
  };

  const currentStats = yearStats[activeYear] || yearStats["2025-26"];

  const cards = [
    {
      value: currentStats.totalPlaced,
      label: "Total Students Placed",
      icon: (
        <svg className="w-6 h-6 text-[#A06C30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: currentStats.companies,
      label: "Recruiting Companies",
      icon: (
        <svg className="w-6 h-6 text-[#A06C30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: currentStats.highestPkg,
      label: "Highest Package",
      icon: (
        <svg className="w-6 h-6 text-[#A06C30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      value: currentStats.placementRate,
      label: "Placement Record",
      icon: (
        <svg className="w-6 h-6 text-[#A06C30]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  const years = ["2025-26", "2024-25", "2023-24", "2022-23", "2021-22"];

  return (
    <section id="highlights" className="relative py-12 sm:py-16 bg-[#FDFBF7] text-[#2D070F] border-b border-[#E8DEC9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3D0C16] tracking-tight">
            Placement Highlights
          </h2>
          <div className="w-16 h-1 bg-[#C69A60] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* 4 Stat Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA] shadow-sm hover:shadow-md hover:border-[#C69A60] transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FAF3E8] border border-[#E0D0BA] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3D0C16] tracking-tight">
                    {card.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-0.5">
                    {card.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Batch Year Filter Tabs (Matches Mockup) */}
        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-[#F4E8D7] border border-[#E0D0BA] gap-1 sm:gap-2 shadow-inner">
            {years.map((year) => {
              const isActive = activeYear === year;
              return (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none cursor-pointer ${
                    isActive
                      ? "bg-[#3D0C16] text-[#FAF3E8] shadow-md scale-[1.02]"
                      : "text-neutral-700 hover:text-[#3D0C16] hover:bg-white/60"
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
