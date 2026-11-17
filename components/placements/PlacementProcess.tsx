"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function PlacementProcess() {
  const steps = [
    {
      step: 1,
      title: "Training & Skill Development",
      desc: "Comprehensive grooming in soft skills, business communication, aptitude, and specialized domain certifications.",
      icon: "💼",
    },
    {
      step: 2,
      title: "Corporate Mentorship",
      desc: "One-on-one sessions with senior industry CXOs, resume building workshops, and mock interview panels.",
      icon: "🤝",
    },
    {
      step: 3,
      title: "Placement Drives & Interviews",
      desc: "On-campus & pooled recruitment drives with prominent Fortune 500 MNCs and Indian conglomerates.",
      icon: "👥",
    },
    {
      step: 4,
      title: "Career Growth",
      desc: "Final job offers, pre-placement talks (PPOs), onboarding support, and lifelong alumni network access.",
      icon: "📈",
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#2A050D] via-[#3D0C16] to-[#25040B] text-[#FAF3E8] border-b border-[#C69A60]/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center sm:text-left mb-10 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF3E8] tracking-tight">
            Our Placement Process
          </h2>
          <p className="text-xs sm:text-sm text-white/75 mt-1">
            A structured approach for a successful career.
          </p>
          <div className="w-16 h-1 bg-[#C69A60] mt-2.5 rounded-full" />
        </div>

        {/* Process Roadmap & 3D Staircase Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 4-Step Connecting Roadmap */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
              {steps.map((st) => (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: st.step * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#5B1525]/40 border border-[#C69A60]/30 hover:border-[#C69A60] transition-all duration-300 shadow-xl backdrop-blur-md flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C69A60] to-[#E0BA85] text-[#3D0C16] font-bold text-sm flex items-center justify-center shadow-md">
                        {st.step}
                      </div>
                      <span className="text-2xl">{st.icon}</span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#FAF3E8] group-hover:text-[#C69A60] transition-colors leading-snug">
                      {st.title}
                    </h3>

                    <p className="text-xs text-white/75 mt-2 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Career Staircase Illustration (Matches Mockup) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[175/95] rounded-3xl overflow-hidden border border-[#C69A60]/40 shadow-2xl group">
              <Image
                src="/placements/career-staircase.jpg"
                alt="3D Corporate Career Staircase to Skyline"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25040B] via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-xl bg-[#3D0C16]/85 backdrop-blur-md border border-[#C69A60]/30 text-xs">
                <span className="text-[#C69A60] font-bold block">100% Career Assistance</span>
                <span className="text-white/80 text-[11px]">Connecting Students to Corporate Leadership</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
