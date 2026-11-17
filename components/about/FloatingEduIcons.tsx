"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingEduIcons() {
  return (
    <>
      {/* 1. Top Left: Graduation Cap Tile */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 left-2 sm:left-4 z-20 w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-[#C69A60]/40 shadow-[0_8px_24px_rgba(198,154,96,0.25)] flex items-center justify-center pointer-events-none group"
      >
        <svg className="w-5 h-5 sm:w-8 sm:h-8 text-[#FAF3E8] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      </motion.div>

      {/* 2. Mid Left: Growth Bar Chart with Arrow (desktop/tablet) */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden sm:flex absolute top-1/3 left-1 z-20 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C69A60]/40 shadow-[0_8px_24px_rgba(198,154,96,0.25)] items-center justify-center pointer-events-none"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FAF3E8] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M6 18v-2m4 2v-5m4 5v-8" />
        </svg>
      </motion.div>

      {/* 3. Bottom Left: Students / Leadership Community Team */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 left-2 sm:left-3 z-20 w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-[#C69A60]/40 shadow-[0_8px_24px_rgba(198,154,96,0.25)] flex items-center justify-center pointer-events-none"
      >
        <svg className="w-5 h-5 sm:w-8 sm:h-8 text-[#FAF3E8] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </motion.div>

      {/* 4. Top Right: Science / Atom / Innovation */}
      <motion.div
        animate={{ y: [0, 7, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute top-4 right-2 sm:right-2 z-20 w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-[#C69A60]/40 shadow-[0_8px_24px_rgba(198,154,96,0.25)] flex items-center justify-center pointer-events-none"
      >
        <svg className="w-5 h-5 sm:w-8 sm:h-8 text-[#FAF3E8] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2.5" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" strokeWidth="1.6" />
        </svg>
      </motion.div>

      {/* 5. Mid Right: Digital Learning / Laptop & Book (desktop/tablet) */}
      <motion.div
        animate={{ y: [0, -7, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="hidden sm:flex absolute top-1/2 right-1 sm:-right-1 z-20 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-[#C69A60]/40 shadow-[0_8px_24px_rgba(198,154,96,0.25)] items-center justify-center pointer-events-none"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#FAF3E8] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M9 8h2m2 0h2M9 11h6" />
        </svg>
      </motion.div>
    </>
  );
}
