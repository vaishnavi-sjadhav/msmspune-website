"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Percent,
  Users,
  Award,
  Wallet,
} from "lucide-react";
import { PLACEMENT_SHOWCASE_DATA } from "@/data/placements";

export const PlacementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("2026");

  const currentBatch =
    PLACEMENT_SHOWCASE_DATA.batches.find((b) => b.batchId === activeTab) ||
    PLACEMENT_SHOWCASE_DATA.batches[0];

  // Helper to render authentic recruiter branding
  const renderRecruiterLogo = (company: string) => {
    switch (company) {
      case "TATA":
        return (
          <div className="flex items-center gap-1.5 text-[#005a9c] font-black text-lg tracking-wider">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3 0 .78-.3 1.49-.78 2.02L12 17.5l-2.22-7.48C9.3 9.49 9 8.78 9 8c0-1.66 1.34-3 3-3z" />
            </svg>
            <span>TATA</span>
          </div>
        );
      case "Deloitte.":
        return (
          <div className="font-extrabold text-base tracking-tight text-slate-900 flex items-center">
            <span>Deloitte</span>
            <span className="text-[#86bc25] font-black text-xl leading-none">.</span>
          </div>
        );
      case "Infosys":
        return (
          <div className="font-bold text-base text-[#007cc3] tracking-wide">
            <span>Infosys</span>
          </div>
        );
      case "KPMG":
        return (
          <div className="flex items-center gap-1">
            <span className="font-black text-base text-[#00338d] tracking-wider">
              KPMG
            </span>
            <div className="flex gap-0.5 h-3.5">
              <span className="w-0.5 h-full bg-[#00338d]" />
              <span className="w-0.5 h-full bg-[#005eb8]" />
              <span className="w-0.5 h-full bg-[#0091da]" />
            </div>
          </div>
        );
      case "ICICI Bank":
        return (
          <div className="flex items-center gap-1 text-[#b02a30] font-bold text-sm tracking-tight">
            <div className="w-4 h-4 rounded-full bg-[#f37021] text-white flex items-center justify-center text-[10px] font-black italic">
              i
            </div>
            <span className="text-[#982429]">ICICI Bank</span>
          </div>
        );
      case "Capgemini":
        return (
          <div className="flex items-center gap-1 text-[#0070ad] font-bold text-sm">
            <span className="text-base font-black">Capgemini</span>
            <span className="text-sm">♠</span>
          </div>
        );
      default:
        return (
          <span className="font-bold text-sm text-slate-800">{company}</span>
        );
    }
  };

  return (
    <section id="placements" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#051c1f] via-[#092e33] to-[#05181a] text-white overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0c3d42]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative side wave swoosh */}
      <div className="absolute -left-32 top-1/2 w-80 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-80 h-96 bg-gradient-to-l from-[#c89650]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#dfb271] uppercase">
            {PLACEMENT_SHOWCASE_DATA.kicker}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight">
            {PLACEMENT_SHOWCASE_DATA.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal pt-0.5">
            {PLACEMENT_SHOWCASE_DATA.subtitle}
          </p>
        </div>

        {/* Batch Selection Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/15 flex items-center justify-between overflow-x-auto no-scrollbar gap-1">
            {PLACEMENT_SHOWCASE_DATA.batches.map((batch) => {
              const isActive = activeTab === batch.batchId;
              return (
                <button
                  key={batch.batchId}
                  onClick={() => setActiveTab(batch.batchId)}
                  className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer text-center ${
                    isActive
                      ? "bg-[#062428] text-[#dfb271] border border-[#c89650]/70 shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {batch.batchLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Key Stats Metric Bar */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-[#08292d] border border-[#12454b] rounded-2xl p-4 sm:p-5 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Item 1: Key Stats Badge */}
              <div className="flex items-center gap-3 px-2 py-2 md:py-0">
                <div className="w-10 h-10 rounded-xl bg-[#c89650]/20 border border-[#c89650]/40 flex items-center justify-center text-[#dfb271] shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    Key Stats
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    ({currentBatch.period})
                  </p>
                </div>
              </div>

              {/* Item 2: Placement Rate */}
              <div className="flex items-center gap-3 px-3 py-2 md:py-0">
                <div className="w-10 h-10 rounded-xl bg-[#c89650]/20 border border-[#c89650]/40 flex items-center justify-center text-[#dfb271] shrink-0">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white block leading-tight">
                    {currentBatch.stats.placementRate}
                  </span>
                  <p className="text-[11px] text-gray-300">Placement Rate</p>
                </div>
              </div>

              {/* Item 3: Recruiting Partners */}
              <div className="flex items-center gap-3 px-3 py-2 md:py-0">
                <div className="w-10 h-10 rounded-xl bg-[#c89650]/20 border border-[#c89650]/40 flex items-center justify-center text-[#dfb271] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white block leading-tight">
                    {currentBatch.stats.recruitingPartners}
                  </span>
                  <p className="text-[11px] text-gray-300">Recruiting Partners</p>
                </div>
              </div>

              {/* Item 4: Highest Package */}
              <div className="flex items-center gap-3 px-3 py-2 md:py-0">
                <div className="w-10 h-10 rounded-xl bg-[#c89650]/20 border border-[#c89650]/40 flex items-center justify-center text-[#dfb271] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white block leading-tight">
                    {currentBatch.stats.highestPackage}
                  </span>
                  <p className="text-[11px] text-gray-300">Highest Package</p>
                </div>
              </div>

              {/* Item 5: Average Package */}
              <div className="flex items-center gap-3 px-3 py-2 md:py-0">
                <div className="w-10 h-10 rounded-xl bg-[#c89650]/20 border border-[#c89650]/40 flex items-center justify-center text-[#dfb271] shrink-0">
                  <Wallet className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-white block leading-tight">
                    {currentBatch.stats.averagePackage}
                  </span>
                  <p className="text-[11px] text-gray-300">Average Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Columns: Student Placement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {currentBatch.students.map((student) => (
            <div
              key={student.id}
              className="bg-white text-slate-800 rounded-2xl p-4 sm:p-4.5 shadow-xl border border-white/20 flex items-center gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Student Photo */}
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden shrink-0 shadow-md border border-gray-100 bg-slate-100">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Student Details & Company Branding */}
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 truncate">
                  {student.name}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium truncate mt-0.5">
                  {student.program}
                </p>

                {/* Placed At Kicker & Logo */}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    PLACED AT
                  </span>
                  <div className="h-7 flex items-center">
                    {renderRecruiterLogo(student.company)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
