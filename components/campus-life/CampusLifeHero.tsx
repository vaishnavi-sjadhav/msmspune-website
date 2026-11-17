"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CampusLifeHero() {
  return (
    <section className="relative w-full min-h-[620px] sm:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#20040A] text-[#FAF3E8] py-20 select-none">
      
      {/* Hero Background Image: Clear, bright & properly visible without heavy dark overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/campus-life/campus-hero.jpg"
          alt="Matrix School of Management Studies Green Campus"
          fill
          className="object-cover object-center brightness-100"
          priority
        />
        {/* Minimal subtle vignettes for navbar contrast and bottom section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20040A] via-[#20040A]/20 to-black/40 pointer-events-none" />
      </div>

      {/* Ambient Lighting & Soft Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C69A60]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3D0C16]/85 backdrop-blur-md border border-[#C69A60]/50 text-[#E0BA85] text-xs font-bold uppercase tracking-widest shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#C69A60] animate-ping" />
          <span>Vibrant Student Life &amp; Infrastructure</span>
        </motion.div>

        {/* Editorial Heading with High-Contrast Text Shadows */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#FAF3E8] leading-[1.08] tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]"
        >
          <span className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Life at Matrix:</span>
          <span className="block mt-1 bg-gradient-to-r from-[#FAF3E8] via-[#F3E5D0] to-[#E0BA85] bg-clip-text text-transparent drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]">
            Where Ambition Meets Belonging
          </span>
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-[#FAF3E8] font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]"
        >
          Immerse yourself in a dynamic eco-friendly campus nestled in Pune. From high-tech smart classrooms and digital trading labs to pulsating cultural festivals, 25+ student clubs, and executive residences — discover a holistic environment that fuels future corporate leaders.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-2 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/admissions/enquiry"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Book a Campus Tour</span>
            <span className="ml-2">→</span>
          </Link>

          <a
            href="#infrastructure"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm text-[#FAF3E8] bg-black/40 hover:bg-black/60 border border-white/40 backdrop-blur-md transition-all cursor-pointer shadow-lg"
          >
            <span>Explore Facilities ↓</span>
          </a>
        </motion.div>

        {/* 4 Key Campus Stat Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C69A60]/40 shadow-xl">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA85] block drop-shadow-sm">15+ Acres</span>
            <span className="text-xs text-neutral-200 font-semibold mt-1 block">Lush Green Campus</span>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C69A60]/40 shadow-xl">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA85] block drop-shadow-sm">25+</span>
            <span className="text-xs text-neutral-200 font-semibold mt-1 block">Student Leadership Clubs</span>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C69A60]/40 shadow-xl">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA85] block drop-shadow-sm">100+</span>
            <span className="text-xs text-neutral-200 font-semibold mt-1 block">Annual Conclaves &amp; Fests</span>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-[#C69A60]/40 shadow-xl">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA85] block drop-shadow-sm">500+</span>
            <span className="text-xs text-neutral-200 font-semibold mt-1 block">Resident Scholars</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default CampusLifeHero;
