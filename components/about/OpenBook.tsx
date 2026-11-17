"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function OpenBook() {
  const [activeLeader, setActiveLeader] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center w-full max-w-[560px] mx-auto py-6"
    >
      {/* 3D Open Antique Book Graphic */}
      <div className="relative w-full aspect-[515/350] transition-transform duration-500 hover:scale-[1.01] group">
        
        {/* Render High-Fidelity 3D Antique Book with Gold Stand */}
        <Image
          src="/about/open-book-full.png"
          alt="Matrix School of Management Studies 3D Antique Open Book - Our Foundation and Our Leadership"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 540px"
          className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] select-none"
        />

        {/* Interactive Hover Hotspot: Prof. M. N. Navale */}
        <div
          onMouseEnter={() => setActiveLeader("navale")}
          onMouseLeave={() => setActiveLeader(null)}
          className="absolute top-[28%] right-[12%] sm:right-[15%] w-[42%] h-[26%] cursor-pointer rounded-xl transition-all hover:bg-[#C69A60]/10 border border-transparent hover:border-[#C69A60]/30"
          title="Prof. M. N. Navale - Founder, Matrix Educational Foundation"
        />

        {/* Interactive Hover Hotspot: Dr. Mrs. Shilpa R. Kulkarni */}
        <div
          onMouseEnter={() => setActiveLeader("kulkarni")}
          onMouseLeave={() => setActiveLeader(null)}
          className="absolute top-[56%] right-[12%] sm:right-[15%] w-[42%] h-[26%] cursor-pointer rounded-xl transition-all hover:bg-[#C69A60]/10 border border-transparent hover:border-[#C69A60]/30"
          title="Dr. Mrs. Shilpa R. Kulkarni - Director, Matrix School of Management Studies"
        />
      </div>

      {/* Dynamic Leadership Bio Tooltip / Card (Appears on Hover) */}
      <div className="min-h-[50px] w-full mt-2 flex items-center justify-center px-4">
        {activeLeader === "navale" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-2xl bg-gradient-to-r from-[#5B1525]/90 to-[#3D0C16]/95 border border-[#C69A60]/50 shadow-xl text-center max-w-md backdrop-blur-md"
          >
            <span className="font-serif font-bold text-[#C69A60] text-xs sm:text-sm block">
              Prof. M. N. Navale — Founder & Visionary
            </span>
            <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
              Renowned educationist who founded Matrix School of Management Studies in 2010 to deliver transformative business education.
            </p>
          </motion.div>
        )}

        {activeLeader === "kulkarni" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-2xl bg-gradient-to-r from-[#5B1525]/90 to-[#3D0C16]/95 border border-[#C69A60]/50 shadow-xl text-center max-w-md backdrop-blur-md"
          >
            <span className="font-serif font-bold text-[#C69A60] text-xs sm:text-sm block">
              Dr. Mrs. Shilpa R. Kulkarni — Director
            </span>
            <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
              Academic leader steering curriculum innovation, industry-academia corporate linkages, and research excellence at MSMS Pune.
            </p>
          </motion.div>
        )}

        {!activeLeader && (
          <div className="text-center text-[11px] text-[#C69A60]/80 italic">
            ✦ Hover over leadership portraits to discover visionary profiles ✦
          </div>
        )}
      </div>

      {/* Mobile-Friendly Text Summary (Ensures 100% Readability on Small Screens) */}
      <div className="sm:hidden w-full mt-4 p-4 rounded-2xl bg-white/5 border border-[#C69A60]/30 space-y-3 text-xs">
        <div>
          <span className="font-serif font-bold text-[#C69A60] block">Our Foundation</span>
          <p className="text-white/80 mt-1 leading-relaxed">
            Matrix School of Management Studies was established in 2010 by Prof. M. N. Navale with the vision of empowering students through quality education, innovation, and excellence in management studies.
          </p>
        </div>
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="font-bold text-[#FAF3E8] block">Prof. M. N. Navale</span>
            <span className="text-[10px] text-[#C69A60]">Founder</span>
          </div>
          <div>
            <span className="font-bold text-[#FAF3E8] block">Dr. Mrs. Shilpa R. Kulkarni</span>
            <span className="text-[10px] text-[#C69A60]">Director</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
