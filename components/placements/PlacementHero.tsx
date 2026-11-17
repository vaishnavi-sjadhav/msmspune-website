"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function PlacementHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#25040B] via-[#3D0C16] to-[#2A050D] text-[#FAF3E8] pt-8 pb-12 sm:pt-14 sm:pb-16 border-b border-[#C69A60]/20">
      {/* Cinematic Ambient Flares */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[350px] bg-[#C69A60]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#5B1525]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/40 text-[#C69A60] text-xs font-bold uppercase tracking-wider">
              <span>Corporate Relations & Career Cell</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#FAF3E8] leading-[1.12] tracking-tight">
              Where Talent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                Meets Opportunity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-xl font-normal leading-relaxed">
              At Matrix, we empower our students with industry-relevant skills and strong corporate connections for a successful career.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#highlights"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Placements</span>
                <span>→</span>
              </Link>
              <Link
                href="#recruiters"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 backdrop-blur-sm transition-all"
              >
                Top Recruiters
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Corporate Dressed Students Group Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] aspect-[310/150] rounded-3xl overflow-hidden shadow-2xl border border-[#C69A60]/30 group">
              <Image
                src="/placements/hero-students.jpg"
                alt="Matrix Management Students in Business Suits"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
              />
              {/* Bottom Gold & Maroon Wave Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#25040B] via-transparent to-transparent opacity-40 pointer-events-none" />
              
              {/* Highlight Badge */}
              <div className="absolute bottom-3 left-4 bg-[#3D0C16]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C69A60]/40 text-xs font-semibold text-[#FAF3E8] flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Batch 2025-26 Placements Ongoing</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
