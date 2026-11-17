"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function LegacySection() {
  const [showModal, setShowModal] = useState(false);

  const stats = [
    {
      id: "students",
      number: "1000+",
      label: "Students",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "partners",
      number: "50+",
      label: "Industry Partners",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13c-3 0-7-2-7-5V6a2 2 0 012-2h10a2 2 0 012 2v10c0 3-4 5-7 5z"
          />
        </svg>
      ),
    },
    {
      id: "faculty",
      number: "Experienced",
      label: "Faculty",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
    },
    {
      id: "excellence",
      number: "Excellence",
      label: "in Education",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="our-legacy" className="relative bg-[#FAF3E8] py-16 sm:py-24 overflow-hidden text-[#3D0C16]">
      {/* Background Ambient Glows & Swooshes */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-0 w-80 h-80 bg-[#5B1525]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Gold Swoop in Top-Left */}
      <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none opacity-20">
        <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
          <path d="M0,0 C150,50 250,150 300,300" stroke="#C69A60" strokeWidth="4" />
          <path d="M0,50 C120,90 200,180 250,300" stroke="#5B1525" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="text-[#C69A60] text-xs">◆</span>
            <span className="px-5 py-1.5 rounded-full bg-[#FAF3E8] border border-[#C69A60]/80 text-[#C69A60] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              Our Legacy
            </span>
            <span className="text-[#C69A60] text-xs">◆</span>
            <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: 3D Extruded Metallic Gold Campus Frame (5.5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center"
            style={{ perspective: 1200 }}
          >
            <div className="relative w-full max-w-[480px] group">
              {/* Thick 3D Beveled Gold Outer Frame */}
              <div className="relative p-3.5 sm:p-4 rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-[#E2B774] via-[#FCE9C2] to-[#A87432] shadow-[0_25px_50px_rgba(61,12,22,0.22),0_10px_20px_rgba(198,154,96,0.4)] ring-1 ring-white/60 transform lg:-rotate-2 transition-transform duration-500 group-hover:rotate-0">
                
                {/* Inner Beveled Recessed Canvas */}
                <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden bg-white aspect-[4/3] shadow-inner">
                  {/* Photo of Campus Front with Signage */}
                  <Image
                    src="/about/3d-legacy-campus-frame.png"
                    alt="Matrix School of Management Studies Campus & Signboard"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 3D Floor Shadow */}
              <div className="w-4/5 h-5 bg-black/20 blur-xl rounded-full mx-auto mt-3 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Heading, Subtitle, 4 Stat Cards & CTA (6.5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl font-extrabold text-[#3D0C16] tracking-tight leading-[1.12]">
              Building Leaders, <br />
              <span className="bg-gradient-to-r from-[#3D0C16] via-[#5B1525] to-[#8A253A] bg-clip-text text-transparent">
                Shaping Futures
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#5B1525]/85 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
              Matrix School of Management Studies is committed to providing quality management education, fostering innovation, and nurturing future leaders who create meaningful impact in the corporate world and society.
            </p>

            {/* Decorative Gold Flourish */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
              <span className="text-[#C69A60] text-xs">◆</span>
              <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
            </div>

            {/* 4 Feature Stat Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-3">
              {stats.map((st) => (
                <div
                  key={st.id}
                  className="relative rounded-2xl bg-white/95 border border-[#C69A60]/50 p-4 pt-6 text-center shadow-[0_8px_20px_rgba(61,12,22,0.06)] hover:shadow-[0_12px_25px_rgba(198,154,96,0.22)] hover:border-[#C69A60] transition-all duration-300 group"
                >
                  {/* Floating Circular Badge on Top Edge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#6B182B] to-[#3B0B16] border border-[#E2B774] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {st.icon}
                  </div>

                  <span className="font-serif text-base sm:text-lg font-extrabold text-[#3D0C16] block mt-1 leading-snug">
                    {st.number}
                  </span>
                  <span className="text-[11px] font-semibold text-[#5B1525]/75 block mt-0.5">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            {/* "Know More →" Pill Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center gap-2.5 px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-[0_8px_22px_rgba(61,12,22,0.25)] transition-all duration-300 cursor-pointer"
              >
                <span>Know More</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Legacy Details Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-[#C69A60]/40 shadow-2xl relative space-y-4"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              <span className="text-xs font-bold text-[#C69A60] uppercase tracking-wider block">
                Institutional Milestones
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                Our Legacy of Academic Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#3D0C16]/80 leading-relaxed">
                Established under the visionary leadership of Prof. M. N. Navale, Matrix School of Management Studies has grown into a landmark institution in Pune. Offering SPPU-affiliated MBA programs, MSMS has fostered over a decade of excellence in executive leadership, state-of-the-art research laboratories, and top-tier corporate partnerships with leading Fortune 500 multinationals.
              </p>

              <div className="pt-2 flex justify-end">
                <Link
                  href="/admissions"
                  className="px-6 py-2 rounded-full text-xs font-bold text-[#FAF3E8] bg-[#5B1525] hover:bg-[#3D0C16] transition-colors"
                >
                  Explore Admissions →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
