"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/constants/navigation";

export function CampusVisitCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF3E8] to-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[36px] bg-gradient-to-b from-[#3D0C16] via-[#2D060F] to-[#1C0308] border-2 border-[#C69A60]/40 p-8 sm:p-14 lg:p-16 text-center text-[#FAF3E8] shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Golden Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#C69A60]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold uppercase tracking-wider">
              Visit Our Campus
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FAF3E8] tracking-tight leading-tight">
              Experience the Matrix Energy Firsthand
            </h2>

            <p className="text-sm sm:text-base text-neutral-200/90 leading-relaxed">
              We welcome prospective candidates and parents for guided campus walkthroughs, faculty interactions, and admissions counseling sessions every Monday to Saturday.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/admissions/enquiry"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-sm text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
              >
                <span>Apply for Admission 2026-27</span>
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all"
              >
                <span>Schedule Campus Walkthrough</span>
              </Link>
            </div>

            {/* Helpline Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="text-[#E0BA85]">📍</span>
                <span>{BRAND_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E0BA85]">📞</span>
                <a href={`tel:${BRAND_CONFIG.phone}`} className="hover:text-white transition-colors underline">
                  {BRAND_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#E0BA85]">✉️</span>
                <a href={`mailto:${BRAND_CONFIG.email}`} className="hover:text-white transition-colors underline">
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusVisitCTA;
