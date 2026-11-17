"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CareerOpportunities() {
  const pathways = [
    {
      sector: "Investment Banking & Private Equity",
      roles: "M&A Analyst, Equity Research, Portfolio Strategist",
      packageRange: "₹ 14 – 54 LPA",
      companies: ["Goldman Sachs", "J.P. Morgan", "Morgan Stanley", "Barclays"],
      icon: "💼",
    },
    {
      sector: "Global Management Consulting",
      roles: "Associate Consultant, Operations Transformation, Risk Advisory",
      packageRange: "₹ 12 – 45 LPA",
      companies: ["McKinsey", "Deloitte", "PwC", "EY", "KPMG"],
      icon: "📊",
    },
    {
      sector: "Technology & Product Management",
      roles: "Product Strategy Manager, Cloud Architect, AI Solutions Lead",
      packageRange: "₹ 16 – 54 LPA",
      companies: ["Google", "Microsoft", "Amazon", "Apple", "NVIDIA"],
      icon: "🚀",
    },
    {
      sector: "FMCG Brand Leadership & Retail",
      roles: "Senior Brand Manager, Chief Growth Officer, E-Commerce Head",
      packageRange: "₹ 12 – 42 LPA",
      companies: ["Hindustan Unilever", "ITC Limited", "Nestlé", "P&G"],
      icon: "🌟",
    },
    {
      sector: "Supply Chain & Smart Operations 4.0",
      roles: "Global Logistics Strategist, Operations Head, Lean Champion",
      packageRange: "₹ 12 – 41 LPA",
      companies: ["Tata Motors", "John Deere", "DHL Express", "Schneider"],
      icon: "⚙️",
    },
  ];

  return (
    <div className="space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold tracking-wider uppercase">
          Career Trajectories
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#FAF3E8] tracking-tight">
          Where Can Your MBA Take You?
        </h3>
        <p className="text-xs sm:text-sm text-[#E0BA85]/90 font-medium">
          Elevate your professional horizon with prestigious global corporate placements across high-impact sectors.
        </p>
      </div>

      {/* Main Showcase Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Visual Showcase Card */}
        <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden border-2 border-[#C69A60]/40 shadow-2xl bg-neutral-950 aspect-[4/3] sm:aspect-[16/12]">
          <Image
            src="/study/career-pathway.jpg"
            alt="Corporate Executive Boardroom Leadership"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Top Pill Overlay */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3D0C16]/90 backdrop-blur-md border border-[#C69A60]/40 text-[#FAF3E8] text-xs font-bold shadow-lg">
              Corporate Placement Hub
            </span>
          </div>

          {/* Bottom Placement Track Record Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/95 via-black/85 to-transparent text-white border-t border-[#C69A60]/20 space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#E0BA85] block">₹ 54 LPA</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider block">Highest CTC</span>
              </div>
              <div className="border-x border-white/10">
                <span className="text-xl sm:text-2xl font-black text-white block">350+</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider block">Recruiters</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-[#E0BA85] block">100%</span>
                <span className="text-[10px] text-neutral-300 uppercase tracking-wider block">Placement Aid</span>
              </div>
            </div>

            <Link
              href="/placements"
              className="w-full inline-flex items-center justify-center py-2.5 rounded-full text-xs font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-105 transition-all shadow-md"
            >
              <span>Explore Detailed Placement Report →</span>
            </Link>
          </div>
        </div>

        {/* Right Column: 5 Sector Pathways */}
        <div className="lg:col-span-7 space-y-3.5">
          {pathways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-[#C69A60]/25 hover:border-[#C69A60] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3D0C16] border border-[#C69A60]/40 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#FAF3E8]">
                    {item.sector}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {item.roles}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.companies.map((c, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#E0BA85]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Package Badge */}
              <div className="sm:text-right shrink-0">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase">
                  Compensation
                </span>
                <span className="text-xs sm:text-sm font-black text-[#E0BA85] block mt-0.5 whitespace-nowrap">
                  {item.packageRange}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default CareerOpportunities;
