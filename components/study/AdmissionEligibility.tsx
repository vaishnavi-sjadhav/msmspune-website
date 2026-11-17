"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function AdmissionEligibility() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Online Registration",
      desc: "Fill the admission enquiry form and submit undergraduate marksheets & photo ID.",
    },
    {
      num: "02",
      title: "Entrance Score Evaluation",
      desc: "Submit valid score in MAH-MBA CET, CAT, CMAT, XAT, MAT, or ATMA.",
    },
    {
      num: "03",
      title: "Centralized Admission (CAP)",
      desc: "Participate in DTE Maharashtra CAP rounds with Institute Choice Code 6156.",
    },
    {
      num: "04",
      title: "Document Verification",
      desc: "Verify original certificates at campus desk and confirm seat allotment.",
    },
  ];

  return (
    <>
      <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#2B060E] via-[#20040A] to-[#170206] border border-[#C69A60]/40 p-6 sm:p-10 lg:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_10px_30px_rgba(198,154,96,0.2)] overflow-hidden">
        
        {/* Top Gold Horizon Beam */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C69A60] to-transparent" />

        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold tracking-wider uppercase">
              Admissions 2026-27 Open
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#FAF3E8] tracking-tight">
              Admission Criteria & Eligibility
            </h3>
            <p className="text-xs sm:text-base text-[#E0BA85]/90 font-medium max-w-xl mx-auto">
              Transparent, merit-centric enrollment guided by Savitribai Phule Pune University & DTE Maharashtra.
            </p>
          </div>

          {/* 2-Column Criteria Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1: Academic Qualification */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-[#C69A60]/25 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#3D0C16] border border-[#C69A60]/40 flex items-center justify-center text-lg text-[#E0BA85]">
                  🎓
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Academic Qualifications
                  </h4>
                  <span className="text-[11px] text-[#E0BA85] font-semibold">
                    Recognized University Degree
                  </span>
                </div>
              </div>
              <ul className="text-xs sm:text-[13px] text-neutral-300 space-y-2 pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#C69A60] font-bold mt-0.5">✔</span>
                  <span>
                    Bachelor&apos;s degree of minimum 3 years duration in any discipline from a recognized University.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C69A60] font-bold mt-0.5">✔</span>
                  <span>
                    Minimum <strong>50% aggregate marks</strong> (or <strong>45% marks</strong> in case of reserved category candidates belonging to Maharashtra State).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C69A60] font-bold mt-0.5">✔</span>
                  <span>
                    Candidates appearing for final year graduation examinations are also eligible to apply provisionally.
                  </span>
                </li>
              </ul>
            </div>

            {/* Box 2: Accepted Entrance Examinations */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-[#C69A60]/25 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#3D0C16] border border-[#C69A60]/40 flex items-center justify-center text-lg text-[#E0BA85]">
                  📋
                </span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Accepted Entrance Scores
                  </h4>
                  <span className="text-[11px] text-[#E0BA85] font-semibold">
                    National & State Tests
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-[13px] text-neutral-300 pt-1">
                Applicants must hold a valid percentile score in any one of the following recognized management entrance exams:
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                  MAH-CET
                </span>
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                  CAT
                </span>
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                  CMAT
                </span>
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                  XAT
                </span>
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                  MAT
                </span>
                <span className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white">
                  ATMA
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#3D0C16]/60 border border-[#C69A60]/30 text-[11px] text-[#FAF3E8]/90 text-center">
                DTE Maharashtra Institute Code: <strong className="text-[#E0BA85]">6156</strong>
              </div>
            </div>

          </div>

          {/* 4-Step Admission Journey */}
          <div className="space-y-4 pt-2">
            <span className="text-xs font-extrabold text-[#C69A60] uppercase tracking-wider block text-center">
              Simple 4-Step Enrolment Roadmap
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 relative">
                  <span className="text-xl font-black text-[#C69A60]/40 block">{st.num}</span>
                  <h5 className="font-serif text-sm font-bold text-white mt-1">{st.title}</h5>
                  <p className="text-[11px] text-neutral-300/80 leading-relaxed mt-1.5">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prominent Call to Action Row */}
          <div className="pt-6 border-t border-[#C69A60]/25 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              href="/admissions/enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-extrabold text-sm sm:text-base text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] shadow-[0_10px_25px_rgba(198,154,96,0.35)] hover:brightness-110 hover:shadow-2xl active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Apply for MBA 2026-27 Now</span>
              <span className="ml-2 text-lg">→</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsBrochureOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-xs sm:text-sm text-[#FAF3E8] bg-white/10 hover:bg-white/15 border border-[#C69A60]/40 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 mr-2 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Admissions Brochure</span>
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full font-medium text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
            >
              Contact Admissions Desk ↗
            </Link>
          </div>

        </div>
      </div>

      {/* Brochure Request / Overview Modal */}
      <AnimatePresence>
        {isBrochureOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#C69A60]/40 shadow-2xl relative text-[#3D0C16]"
            >
              <button
                onClick={() => setIsBrochureOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-[#3D0C16] text-[#E0BA85] flex items-center justify-center text-2xl mx-auto shadow-md">
                  📄
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                  Official MBA Prospectus
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                  Download the complete information brochure containing detailed seat matrix, fee structure, scholarship criteria, and placement statistics.
                </p>
              </div>

              <div className="mt-5 p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 text-xs text-neutral-800 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Programme:</span>
                  <span className="font-bold">MBA 2-Year Full-Time</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">DTE Choice Code:</span>
                  <span className="font-bold text-[#4A0E1B]">6156</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Affiliation:</span>
                  <span className="font-bold">SPPU Pune</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-neutral-600">Accreditation:</span>
                  <span className="font-bold">NAAC Accredited</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <Link
                  href="/admissions/enquiry"
                  onClick={() => setIsBrochureOpen(false)}
                  className="w-full py-3 rounded-full text-xs font-bold text-center text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] shadow-md hover:brightness-105"
                >
                  Proceed to Direct Online Application →
                </Link>
                <button
                  onClick={() => setIsBrochureOpen(false)}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-neutral-600 bg-neutral-100 hover:bg-neutral-200"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AdmissionEligibility;
