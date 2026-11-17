"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ContactHero() {
  const scrollToForm = () => {
    const el = document.getElementById("enquiry-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3D0C16] via-[#4A0F1D] to-[#2E070F] text-[#FAF3E8]">
      {/* Background Campus Silhouette Blend */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <Image
          src="/hero1.webp"
          alt="Campus Architecture Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Cinematic Golden Ambient Glows */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5B1525]/30 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Golden Light Streak */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C69A60]/50 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-16 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/40 text-[#C69A60] text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C69A60] animate-pulse" />
              <span>Reach Out to Our Campus Team</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.12]">
              Get in Touch <br />
              <span className="bg-gradient-to-r from-[#FAF3E8] via-[#F3E5D0] to-[#C69A60] bg-clip-text text-transparent">
                with Matrix
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              We&apos;re here to help! Reach out to us for any queries related to admissions, programs or campus life.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#E0BA85] hover:brightness-110 shadow-[0_10px_25px_rgba(198,154,96,0.35)] transition-all duration-300 active:scale-95"
              >
                <span>Contact Us Today</span>
                <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Golden Location Pin on Layered Pedestal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Soft back radial glow behind 3D pin */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#C69A60]/30 via-[#E0BA85]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative w-[300px] sm:w-[360px] lg:w-[410px] aspect-square flex items-center justify-center">
              <Image
                src="/contact/3d-pin-pedestal.png"
                alt="3D Golden Location Pin on Circular Pedestal"
                width={410}
                height={410}
                priority
                className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
              />
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
