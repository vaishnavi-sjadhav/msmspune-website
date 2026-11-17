"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutHeader() {
  return (
    <div className="relative flex items-center justify-center w-full py-4 sm:py-6 select-none">
      {/* Decorative Gold Wing Line on Left */}
      <div className="hidden sm:flex items-center gap-2 flex-1 max-w-[200px] justify-end">
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#C69A60]/60 to-[#C69A60]" />
        <span className="text-[#C69A60] text-xs">◆</span>
      </div>

      {/* Main Glass Pill Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-4 px-8 sm:px-14 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-xl border border-[#C69A60]/50 shadow-[0_8px_32px_0_rgba(198,154,96,0.25)] flex items-center justify-center group"
      >
        {/* Soft Gold Ambient Glow Behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C69A60]/30 via-amber-200/20 to-[#C69A60]/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Text */}
        <h2 className="relative font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#FAF3E8] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          About Matrix
        </h2>

        {/* Subtle Top Specular Shine */}
        <div className="absolute top-1 inset-x-6 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full pointer-events-none" />
      </motion.div>

      {/* Decorative Gold Wing Line on Right */}
      <div className="hidden sm:flex items-center gap-2 flex-1 max-w-[200px] justify-start">
        <span className="text-[#C69A60] text-xs">◆</span>
        <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent via-[#C69A60]/60 to-[#C69A60]" />
      </div>
    </div>
  );
}
