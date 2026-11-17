"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function EventHero() {
  const scrollToEvents = () => {
    const el = document.getElementById("upcoming-events-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3D0C16] via-[#4A0F1D] to-[#2B060E] text-[#FAF3E8]">
      {/* High-Resolution Auditorium Crowd Background (Curated Clean Unsplash) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Image
          src="/events/hero-auditorium.jpg"
          alt="Auditorium Keynote Presentation Scene"
          fill
          className="object-cover object-center brightness-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0C16]/90 via-[#3D0C16]/60 to-transparent" />
      </div>

      {/* Cinematic Golden Ambient Glows */}
      <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] bg-[#C69A60]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5B1525]/40 rounded-full blur-2xl pointer-events-none" />

      {/* Top subtle gold accent divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C69A60]/60 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 pb-20 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & Action (6.5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Header Kicker with Gold Line */}
            <div className="inline-flex items-center gap-3">
              <span className="text-xs font-bold text-[#C69A60] uppercase tracking-[0.22em]">
                Events at Matrix
              </span>
              <span className="w-12 h-[1.5px] bg-gradient-to-r from-[#C69A60] to-transparent" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3.5xl sm:text-5.5xl lg:text-6.5xl font-bold tracking-tight text-[#FAF3E8] leading-[1.08]">
              Engage. Learn. <br />
              <span className="bg-gradient-to-r from-[#FAF3E8] via-[#F3E5D0] to-[#C69A60] bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              A vibrant calendar of academic, cultural and industry events that inspire and empower tomorrow&apos;s business leaders.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={scrollToEvents}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#E0BA85] hover:brightness-110 shadow-[0_10px_25px_rgba(198,154,96,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Explore Upcoming Events</span>
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Icon Cubes & Keynote Speaker Presentation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Background Soft Glow */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#C69A60]/30 via-[#E0BA85]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[460px] flex items-center justify-center">
              {/* Floating 3D Cubes Composite */}
              <div className="relative w-[340px] sm:w-[400px] aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/events/3d-floating-cubes.png"
                  alt="3D Floating Bronze & Gold Event Cubes"
                  width={380}
                  height={280}
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Speaker Overlay at Podium */}
              <div className="absolute -bottom-4 right-0 w-[150px] sm:w-[190px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#C69A60]/40 shadow-2xl backdrop-blur-sm bg-black/30 hidden sm:block">
                <Image
                  src="/events/hero-speaker.png"
                  alt="Keynote Speaker at Podium"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C16]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white/90 font-medium truncate">
                  🎤 Annual Leadership Summit
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth Organic Wave Divider to Ivory Background Section */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mb-[1px]">
        <svg
          className="relative block w-full h-10 sm:h-16 lg:h-20 text-[#FAF3E8]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 400,110 600,60 C800,10 1050,80 1200,40 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
