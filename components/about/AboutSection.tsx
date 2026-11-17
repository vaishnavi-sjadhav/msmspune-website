"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutHeader } from "./AboutHeader";
import { NaacPlaque } from "./NaacPlaque";
import { OpenBook } from "./OpenBook";
import { FloatingSocialBar } from "./FloatingSocialBar";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[700px] lg:min-h-[780px] bg-gradient-to-b from-[#2D070F] via-[#3D0C16] to-[#20040A] text-[#FAF3E8] overflow-hidden py-12 sm:py-16 lg:py-20 flex flex-col justify-between select-none"
    >
      {/* Cinematic Ambient Lighting & Flare Effects (Matches Mockup) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Center Golden Flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#C69A60]/20 via-[#C69A60]/5 to-transparent rounded-full blur-3xl" />
        
        {/* Left Rich Wine Glow */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#5B1525]/40 rounded-full blur-[100px]" />
        
        {/* Right Golden Amber Flare */}
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#C69A60]/15 rounded-full blur-[110px]" />
        
        {/* Subtle Floating Sparkles / Stars */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 right-1/4 w-2 h-2 rounded-full bg-[#FAF3E8] shadow-[0_0_12px_#FAF3E8]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.9, 1.3, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-28 left-1/4 w-2 h-2 rounded-full bg-[#C69A60] shadow-[0_0_10px_#C69A60]"
        />
        <motion.div
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-24 left-1/3 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"
        />

        {/* Polished Marble Floor Horizon Reflection at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C69A60]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
        
        {/* 1. Top Centered Glass Pill Badge: "About Matrix" */}
        <div className="mb-6 sm:mb-10">
          <AboutHeader />
        </div>

        {/* 2. Main 2-Column Section (NAAC Plaque on Left, Open Book on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pb-8 sm:pb-12">
          
          {/* Left Column: 3D NAAC Accreditation Bronze Plaque */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center">
            <NaacPlaque />
          </div>

          {/* Right Column: 3D Antique Open Book (Foundation & Leadership) */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center">
            <OpenBook />
          </div>

        </div>

      </div>

      {/* 3. Bottom Right Floating Social Media Bar (WhatsApp, Facebook, LinkedIn) */}
      <FloatingSocialBar />
    </section>
  );
}

export default AboutSection;
