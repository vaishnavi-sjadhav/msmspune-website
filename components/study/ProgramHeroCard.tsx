"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ProgramHeroCard() {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  return (
    <>
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#330711] via-[#2A050D] to-[#1C0308] border border-[#C69A60]/40 p-6 sm:p-8 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_10px_30px_rgba(198,154,96,0.15)] overflow-hidden">
        
        {/* Subtle Top Golden Accent Border */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#C69A60] to-transparent" />

        {/* Subtle Background Watermark Crest */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#C69A60]">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M50 15L75 80H25L50 15Z" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column: Visual Showcase with Badge Overlays */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group rounded-3xl overflow-hidden border-2 border-[#C69A60]/40 shadow-2xl bg-neutral-950 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="/study/flagship-mba.jpg"
                alt="MSM Pune MBA Executive Lecture Hall"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              {/* Top Left Floating Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#3D0C16]/90 backdrop-blur-md border border-[#C69A60]/50 text-[#FAF3E8] text-xs font-bold tracking-wide shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#C69A60] animate-pulse" />
                  Flagship 2-Year Full-Time MBA
                </span>
              </div>

              {/* Bottom Quick Stats Strip */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex items-center justify-between text-white border-t border-[#C69A60]/20">
                <div>
                  <span className="text-[10px] sm:text-xs text-[#E0BA85] font-semibold uppercase tracking-wider block">
                    Affiliation
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    SPPU Pune & AICTE
                  </span>
                </div>
                <div className="h-7 w-px bg-[#C69A60]/30" />
                <div>
                  <span className="text-[10px] sm:text-xs text-[#E0BA85] font-semibold uppercase tracking-wider block">
                    DTE Code
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    6156
                  </span>
                </div>
                <div className="h-7 w-px bg-[#C69A60]/30" />
                <div>
                  <span className="text-[10px] sm:text-xs text-[#E0BA85] font-semibold uppercase tracking-wider block">
                    Intake
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    180 Seats
                  </span>
                </div>
              </div>
            </div>

            {/* Accreditation & Quality Badges */}
            <div className="mt-4 flex items-center justify-between px-2 gap-2 text-center text-xs text-[#E0BA85]/80">
              <span className="flex-1 py-1.5 rounded-lg bg-white/5 border border-[#C69A60]/20">
                ⭐ NAAC Accredited
              </span>
              <span className="flex-1 py-1.5 rounded-lg bg-white/5 border border-[#C69A60]/20">
                🎓 CBCS & OBE Model
              </span>
              <span className="flex-1 py-1.5 rounded-lg bg-white/5 border border-[#C69A60]/20">
                🌐 Dual Major Option
              </span>
            </div>
          </div>

          {/* Right Column: In-Depth Program Details */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold tracking-wider uppercase mb-2">
                Postgraduate Programme
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#FAF3E8] tracking-tight leading-tight">
                Master of Business Administration (MBA)
              </h3>
              <p className="text-sm sm:text-base text-[#FAF3E8]/90 font-normal leading-relaxed mt-2.5">
                A transformational 2-year leadership journey engineered for the dynamic global economy. Combines rigorous analytical frameworks with immersive corporate case studies, CXO interactions, and real-time consulting simulations under the Savitribai Phule Pune University curriculum.
              </p>
            </div>

            {/* Program Highlights Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-[#C69A60]/25 text-center">
                <span className="text-xs text-neutral-400 block font-medium">Duration</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">2 Years</span>
                <span className="text-[10px] text-[#E0BA85] block mt-0.5">4 Semesters</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-[#C69A60]/25 text-center">
                <span className="text-xs text-neutral-400 block font-medium">Pedagogy</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">Case-Study</span>
                <span className="text-[10px] text-[#E0BA85] block mt-0.5">Harvard Method</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-[#C69A60]/25 text-center">
                <span className="text-xs text-neutral-400 block font-medium">Internship</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">45 Days</span>
                <span className="text-[10px] text-[#E0BA85] block mt-0.5">Corporate SIP</span>
              </div>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-[#C69A60]/25 text-center">
                <span className="text-xs text-neutral-400 block font-medium">Placement</span>
                <span className="text-sm sm:text-base font-bold text-white block mt-0.5">100% Aid</span>
                <span className="text-[10px] text-[#E0BA85] block mt-0.5">350+ Recruiters</span>
              </div>
            </div>

            {/* Core Curriculum Value Points */}
            <div className="space-y-2 pt-1 text-xs sm:text-sm text-[#FAF3E8]/85">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C69A60]/25 text-[#E0BA85] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span><strong>Dual Specialization Flexibility:</strong> Major in one domain with an industry-relevant minor.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C69A60]/25 text-[#E0BA85] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span><strong>Advanced Industry Certifications:</strong> Financial Modeling, Six Sigma Green Belt, PowerBI & Digital Marketing.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C69A60]/25 text-[#E0BA85] flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span><strong>Matrix Incubation Cell:</strong> Seed capital guidance, prototype lab, and patent filing support for founders.</span>
              </div>
            </div>

            {/* Primary Action Row */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/admissions/enquiry"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-sm text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] shadow-lg hover:brightness-110 hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Apply for MBA 2026-27</span>
                <span className="ml-2">→</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsSyllabusOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm text-[#FAF3E8] bg-white/10 hover:bg-white/15 border border-[#C69A60]/40 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 mr-2 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>View 4-Semester Syllabus</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 4-Semester Curriculum Syllabus Modal */}
      <AnimatePresence>
        {isSyllabusOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-[#C69A60]/40 shadow-2xl relative text-[#3D0C16] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsSyllabusOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#3D0C16] text-[#E0BA85] text-xs font-bold uppercase tracking-wider">
                  SPPU Curriculum Framework
                </span>
                <span className="text-xs text-neutral-500 font-semibold">
                  Choice Based Credit System (CBCS)
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D0C16] mt-2">
                MBA 4-Semester Academic Structure
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Savitribai Phule Pune University prescribed Outcome-Based Education (OBE) syllabus outline.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Semester 1 */}
                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 space-y-2">
                  <div className="flex justify-between items-center border-b border-[#C69A60]/20 pb-1.5">
                    <span className="font-bold text-sm text-[#4A0E1B]">Semester I: Core Fundamentals</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-[#C69A60]">27 Credits</span>
                  </div>
                  <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Managerial Accounting & Costing</li>
                    <li>Organizational Behaviour & Dynamics</li>
                    <li>Economic Analysis for Business Decisions</li>
                    <li>Business Research Methods & Analytics</li>
                    <li>Marketing Management Fundamentals</li>
                    <li>Digital Business & Enterprise Architecture</li>
                  </ul>
                </div>

                {/* Semester 2 */}
                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 space-y-2">
                  <div className="flex justify-between items-center border-b border-[#C69A60]/20 pb-1.5">
                    <span className="font-bold text-sm text-[#4A0E1B]">Semester II: Applied Operations</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-[#C69A60]">27 Credits</span>
                  </div>
                  <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Strategic Financial Management</li>
                    <li>Human Resource Architecture & Relations</li>
                    <li>Operations & Supply Chain Logistics</li>
                    <li>Start-up Ecosystem & Venture Valuation</li>
                    <li>Business Law & Corporate Ethics</li>
                    <li>Specialization Domain Foundation Courses</li>
                  </ul>
                </div>

                {/* Semester 3 */}
                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 space-y-2">
                  <div className="flex justify-between items-center border-b border-[#C69A60]/20 pb-1.5">
                    <span className="font-bold text-sm text-[#4A0E1B]">Semester III: Specialization & SIP</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-[#C69A60]">28 Credits</span>
                  </div>
                  <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Strategic Management & Competitive Moats</li>
                    <li>Enterprise Performance Management (EPM)</li>
                    <li>45-Day Summer Internship Project (SIP) Viva</li>
                    <li>Advanced Domain Electives (Finance/Mkt/HR/BA/OSCM)</li>
                    <li>Data Analytics & Sector Simulations</li>
                    <li>Industry Capstone Project</li>
                  </ul>
                </div>

                {/* Semester 4 */}
                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 space-y-2">
                  <div className="flex justify-between items-center border-b border-[#C69A60]/20 pb-1.5">
                    <span className="font-bold text-sm text-[#4A0E1B]">Semester IV: Executive Integration</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white text-[#C69A60]">20 Credits</span>
                  </div>
                  <ul className="text-xs text-neutral-700 space-y-1 list-disc list-inside">
                    <li>Global Strategic Management & Macroeconomics</li>
                    <li>Corporate Governance, ESG & Boardroom Ethics</li>
                    <li>Specialized Sector Labs & Dissertation</li>
                    <li>Cross-Functional Capstone Simulations</li>
                    <li>Campus Placement Readiness & Case Mastery</li>
                    <li>Comprehensive Viva Voce Examination</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                <span className="text-xs text-neutral-500 font-medium">
                  Total Degree Credits: 102 Credits • Savitribai Phule Pune University
                </span>
                <div className="flex items-center gap-3">
                  <Link
                    href="/admissions/enquiry"
                    onClick={() => setIsSyllabusOpen(false)}
                    className="px-6 py-2 rounded-full text-xs font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-105"
                  >
                    Apply for Admission →
                  </Link>
                  <button
                    onClick={() => setIsSyllabusOpen(false)}
                    className="px-5 py-2 rounded-full text-xs font-bold text-neutral-600 bg-neutral-100 hover:bg-neutral-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProgramHeroCard;
