"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingEduIcons } from "./FloatingEduIcons";

export function NaacPlaque() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center w-full max-w-[480px] mx-auto py-6"
    >
      {/* Surrounding Floating Educational Glassmorphism Tiles */}
      <FloatingEduIcons />

      {/* Glowing Swirling Orbital Light Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-[#C69A60]/20 border-dashed"
        />
        {/* Ring 2 with glowing orb */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] rounded-full border border-amber-300/15"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#C69A60] shadow-[0_0_12px_#C69A60] -top-1 left-1/2 absolute" />
        </motion.div>
      </div>

      {/* Main Plaque Container */}
      <div className="relative w-full max-w-[420px] aspect-[460/440] transition-transform duration-500 hover:scale-[1.02]">
        
        {/* The 3D High-Fidelity Plaque Graphic (Rendered directly from the reference asset) */}
        <Image
          src="/about/naac-plaque-full.png"
          alt="The Matrix Educational Foundation's Matrix School of Management Studies NAAC B+ Grade Accreditation 3D Plaque"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 460px"
          className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] select-none pointer-events-none"
        />

        {/* Interactive Specular Shimmer Effect on Hover */}
        <div className="absolute inset-x-8 top-12 bottom-20 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Plaque Caption for Accessibility & Rich SEO */}
      <div className="text-center mt-3 space-y-1">
        <span className="inline-block px-3 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/40 text-[#FAF3E8] text-xs font-bold tracking-wider uppercase">
          NAAC B+ Accredited
        </span>
        <p className="text-[11px] sm:text-xs text-white/70 max-w-xs mx-auto">
          National Assessment and Accreditation Council of India recognition for academic standards.
        </p>
      </div>
    </motion.div>
  );
}
