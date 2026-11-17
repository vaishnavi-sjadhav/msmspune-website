"use client";

import React from "react";
import { motion } from "framer-motion";

interface OutcomeItem {
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
  metrics: string;
}

export function LearningOutcomes() {
  const outcomes: OutcomeItem[] = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      tag: "Leadership",
      title: "Executive Strategic Thinking",
      description:
        "Master competitive moat analysis, macroeconomic forecasting, scenario modeling, and board-level risk mitigation across unpredictable market cycles.",
      metrics: "60+ Real Case Studies",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tag: "Analytics",
      title: "Applied Decision Science & AI",
      description:
        "Harness business intelligence dashboards, PowerBI, predictive modeling, and Python to translate complex data into decisive financial and commercial actions.",
      metrics: "Python, R & PowerBI Labs",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tag: "Venture",
      title: "Innovation & Venture Incubation",
      description:
        "Ideate and launch scalable business models. Access the Matrix Incubation Cell, mentor network, seed capital advisory, and IP patent protection frameworks.",
      metrics: "Seed Funding Support",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tag: "Diplomacy",
      title: "Cross-Border Negotiation",
      description:
        "Command executive presence in investor pitching, multi-party labor disputes, international trade negotiations, and corporate crisis communications.",
      metrics: "Mock Boardroom Sims",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tag: "Sustainability",
      title: "ESG & Sustainable Governance",
      description:
        "Lead future-ready organizations aligned with SEBI ESG compliance mandates, circular economy models, transparent auditing, and stakeholder ethics.",
      metrics: "SEBI Mandate Ready",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#E0BA85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tag: "Immersion",
      title: "Industry Capstones & SIP",
      description:
        "Execute 45-day summer internships in Fortune 500 enterprises, live equity valuations, plant floor debottlenecking, and direct mentorship from CXOs.",
      metrics: "45 Days Corporate SIP",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold tracking-wider uppercase">
          Curriculum Transformation
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#FAF3E8] tracking-tight">
          What Will You Learn?
        </h3>
        <p className="text-xs sm:text-sm text-[#E0BA85]/90 font-medium">
          Outcome-based competencies designed to transition graduates into agile, high-impact corporate leaders.
        </p>
      </div>

      {/* 6 Modern Icon-Based Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="group relative rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#C69A60]/25 hover:border-[#C69A60] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_8px_20px_rgba(198,154,96,0.15)] flex flex-col justify-between"
          >
            <div>
              {/* Icon Container with Metallic Glow */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3D0C16] to-[#25050C] border border-[#C69A60]/40 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#E0BA85] transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#C69A60]/15 text-[#E0BA85] text-[10px] font-extrabold uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-[#FAF3E8]">
                {item.title}
              </h4>
              <p className="text-xs sm:text-[13px] text-neutral-300/90 leading-relaxed mt-2.5">
                {item.description}
              </p>
            </div>

            {/* Bottom Highlight Metric */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-[11px] text-neutral-400 font-medium">Outcome Standard</span>
              <span className="font-bold text-[#E0BA85]">{item.metrics}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LearningOutcomes;
