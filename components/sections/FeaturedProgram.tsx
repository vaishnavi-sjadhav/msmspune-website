import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_PROGRAM } from "@/data/programs";

export const FeaturedProgram: React.FC = () => {
  return (
    <section id="academic-programs" className="relative bg-[#0c3d40] text-white py-16 sm:py-20 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c89650] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#124d54] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Program Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Kicker with trailing line */}
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#d2a054] uppercase">
                {FEATURED_PROGRAM.kicker}
              </span>
              <span className="w-16 h-[1.5px] bg-[#d2a054]" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.18] tracking-tight">
              Master of Business <br />
              Administration (MBA)
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed max-w-lg">
              {FEATURED_PROGRAM.description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={FEATURED_PROGRAM.ctaHref}
                className="inline-flex items-center gap-2 bg-[#c89650] hover:bg-[#b5883d] text-slate-900 hover:text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
              >
                <span>{FEATURED_PROGRAM.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Image with Gold Outline */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg p-2 sm:p-3">
              {/* Outer Golden Border Frame */}
              <div className="absolute inset-0 border border-[#c89650]/60 rounded-3xl sm:rounded-[32px] pointer-events-none" />

              {/* Inner Image Container */}
              <div className="relative rounded-2xl sm:rounded-[26px] overflow-hidden shadow-2xl bg-[#092e31] border border-white/10 aspect-[16/10]">
                <Image
                  src={FEATURED_PROGRAM.image}
                  alt="Master of Business Administration Graduation Cap and Academic Books"
                  width={750}
                  height={450}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
