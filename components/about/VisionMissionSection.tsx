"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function VisionMissionSection() {
  const [activeModal, setActiveModal] = useState<"vision" | "mission" | null>(null);

  return (
    <section id="vision-mission" className="relative bg-[#FAF3E8] py-16 sm:py-24 overflow-hidden text-[#3D0C16]">
      {/* Background Campus Facade Silhouette */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
        <Image
          src="/about/vision-mission-campus-bg.jpg"
          alt="Campus Architectural Facade"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF3E8] via-[#FAF3E8]/70 to-[#FAF3E8]/90" />
      </div>

      {/* Decorative Gold Ambient Radial Glows */}
      <div className="absolute -top-10 left-1/3 w-[500px] h-[500px] bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#5B1525]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Gold Swirl in Corner (Mockup detail) */}
      <div className="absolute top-0 left-0 w-80 h-32 pointer-events-none opacity-30">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full">
          <path d="M0,0 C200,40 300,10 400,100" stroke="#C69A60" strokeWidth="4" />
          <path d="M0,20 C180,60 270,30 380,120" stroke="#5B1525" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Header Block: Badge, Title, Subtitle & Flourish */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          {/* "Vision & Mission" Pill Badge */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="text-[#C69A60] text-xs">◆</span>
            <span className="px-6 py-1.5 rounded-full bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] text-[#FAF3E8] border border-[#C69A60]/60 text-xs font-bold uppercase tracking-[0.2em] shadow-md">
              Vision &amp; Mission
            </span>
            <span className="text-[#C69A60] text-xs">◆</span>
            <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl font-extrabold text-[#3D0C16] tracking-tight">
            Our Vision &amp; Mission
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-[#5B1525]/85 font-medium max-w-xl mx-auto leading-relaxed">
            Guided by a clear vision and a strong mission, we aim to shape a better tomorrow.
          </p>

          {/* Decorative Flourish */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="text-[#C69A60] text-xs">◆</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>
        </div>

        {/* 3-Part Showcase: Left Vision Card, Center 3D Target Pedestal, Right Mission Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left: Our Vision 3D Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 mt-8 lg:mt-0"
            style={{ perspective: 1000 }}
          >
            <div className="relative group">
              {/* Metallic 3D Gold Extruded Frame */}
              <div className="p-3 sm:p-3.5 rounded-[32px] bg-gradient-to-br from-[#E2B774] via-[#FCE9C2] to-[#A87432] shadow-[0_20px_45px_rgba(61,12,22,0.16),0_8px_16px_rgba(198,154,96,0.35)] ring-1 ring-white/60 transform lg:rotate-1 transition-transform duration-500 group-hover:rotate-0">
                
                {/* Inner Card Body */}
                <div className="relative rounded-[24px] bg-[#FFFDF9] p-6 sm:p-8 pt-10 text-center shadow-inner flex flex-col justify-between min-h-[360px]">
                  
                  {/* Floating Circular Icon Badge on Top Edge */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#6B182B] via-[#521120] to-[#3B0B16] border-2 border-[#E2B774] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    {/* Vision Eye Icon */}
                    <svg className="w-7 h-7 text-[#FAF3E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D0C16]">
                      Our Vision
                    </h3>

                    {/* Small divider */}
                    <div className="flex items-center justify-center gap-2 my-3">
                      <span className="w-6 h-px bg-[#C69A60]" />
                      <span className="text-[#C69A60] text-[10px]">◆</span>
                      <span className="w-6 h-px bg-[#C69A60]" />
                    </div>

                    <p className="text-xs sm:text-[13.5px] text-[#5B1525]/85 leading-relaxed font-normal">
                      To be a premier management institute, recognized for excellence in education, innovation and leadership, contributing to a progressive and sustainable society.
                    </p>
                  </div>

                  {/* "Learn More →" Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => setActiveModal("vision")}
                      className="px-7 py-2.5 rounded-full text-xs font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-md transition-all duration-200 cursor-pointer"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>

              {/* 3D Floor Shadow */}
              <div className="w-4/5 h-4 bg-black/15 blur-lg rounded-full mx-auto mt-2 pointer-events-none" />
            </div>
          </motion.div>

          {/* Center: 3D Target & Arrow on Pedestal (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative py-4 lg:py-0"
          >
            {/* Ambient Radial Glow behind Target */}
            <div className="absolute w-64 h-64 bg-[#C69A60]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-center justify-center">
              <Image
                src="/about/3d-target-pedestal.png"
                alt="3D Golden Target Bullseye on Tiered Pedestal"
                width={330}
                height={220}
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Label Under Target */}
            <div className="text-center mt-2 z-10">
              <span className="text-[11px] font-bold text-[#C69A60] uppercase tracking-[0.2em] block">
                Targeting Excellence
              </span>
              <span className="text-xs font-serif font-semibold text-[#5B1525] block">
                Focused on Student Success
              </span>
            </div>
          </motion.div>

          {/* Right: Our Mission 3D Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 mt-8 lg:mt-0"
            style={{ perspective: 1000 }}
          >
            <div className="relative group">
              {/* Metallic 3D Gold Extruded Frame */}
              <div className="p-3 sm:p-3.5 rounded-[32px] bg-gradient-to-br from-[#E2B774] via-[#FCE9C2] to-[#A87432] shadow-[0_20px_45px_rgba(61,12,22,0.16),0_8px_16px_rgba(198,154,96,0.35)] ring-1 ring-white/60 transform lg:-rotate-1 transition-transform duration-500 group-hover:rotate-0">
                
                {/* Inner Card Body */}
                <div className="relative rounded-[24px] bg-[#FFFDF9] p-6 sm:p-8 pt-10 text-center shadow-inner flex flex-col justify-between min-h-[360px]">
                  
                  {/* Floating Circular Icon Badge on Top Edge */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#6B182B] via-[#521120] to-[#3B0B16] border-2 border-[#E2B774] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    {/* Mission Mountain Summit Flag Icon */}
                    <svg className="w-7 h-7 text-[#FAF3E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 21h18M5 21l7-14 4 8 5-10"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 7V3m0 0l4 2-4 2"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D0C16]">
                      Our Mission
                    </h3>

                    {/* Small divider */}
                    <div className="flex items-center justify-center gap-2 my-3">
                      <span className="w-6 h-px bg-[#C69A60]" />
                      <span className="text-[#C69A60] text-[10px]">◆</span>
                      <span className="w-6 h-px bg-[#C69A60]" />
                    </div>

                    <p className="text-xs sm:text-[13.5px] text-[#5B1525]/85 leading-relaxed font-normal">
                      To provide quality management education, foster critical thinking, promote innovation and develop ethical leaders for the corporate world and society.
                    </p>
                  </div>

                  {/* "Learn More →" Button */}
                  <div className="pt-6">
                    <button
                      onClick={() => setActiveModal("mission")}
                      className="px-7 py-2.5 rounded-full text-xs font-bold text-[#FAF3E8] bg-gradient-to-r from-[#5B1525] via-[#4A0F1D] to-[#3D0C16] hover:brightness-110 border border-[#C69A60]/50 shadow-md transition-all duration-200 cursor-pointer"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>

              {/* 3D Floor Shadow */}
              <div className="w-4/5 h-4 bg-black/15 blur-lg rounded-full mx-auto mt-2 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details Lightbox Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#C69A60]/40 shadow-2xl relative space-y-4"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              {activeModal === "vision" ? (
                <>
                  <span className="text-xs font-bold text-[#C69A60] uppercase tracking-wider block">
                    Institutional Vision
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                    Our Vision &amp; Strategic Horizon
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3D0C16]/80 leading-relaxed">
                    Matrix School of Management Studies envisions being a globally recognized center of management thought leadership. By cultivating digital business skills, ethical decision-making, and entrepreneurial resilience, we prepare executives who can navigate complex international business ecosystems.
                  </p>
                </>
              ) : (
                <>
                  <span className="text-xs font-bold text-[#C69A60] uppercase tracking-wider block">
                    Institutional Mission
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                    Our Mission &amp; Core Pillars
                  </h3>
                  <ul className="text-xs sm:text-sm text-[#3D0C16]/80 space-y-2 list-disc list-inside">
                    <li>Deliver an industry-aligned curriculum enriched with live internships and real-world case simulations.</li>
                    <li>Promote impactful management research and cross-disciplinary innovation.</li>
                    <li>Instill high ethical standards, social responsibility, and empathetic corporate governance.</li>
                  </ul>
                </>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 rounded-full text-xs font-bold text-[#FAF3E8] bg-[#5B1525]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
