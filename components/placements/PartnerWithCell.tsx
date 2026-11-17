"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function PartnerWithCell() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#20040A] text-[#FAF3E8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 bg-gradient-to-r from-[#4D111E] via-[#350711] to-[#20040A] border border-[#C69A60]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Handshake Graphic + Copy */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="relative w-36 h-20 sm:w-44 sm:h-24 rounded-2xl overflow-hidden shadow-lg border border-[#C69A60]/30 shrink-0">
              <Image
                src="/placements/handshake.jpg"
                alt="Corporate Handshake Partnership"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Partner with Our Placement Cell
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-md">
                Let&apos;s build a stronger talent pipeline together. Invite Matrix MBA students for campus placements and summer internships.
              </p>
            </div>
          </div>

          {/* Right: Action Buttons (Matches Mockup) */}
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/admissions/enquiry"
              className="px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Recruit Our Students →
            </Link>
            <a
              href="mailto:placements@msmspune.com"
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/50 transition-all cursor-pointer"
            >
              Contact Placement Cell
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
