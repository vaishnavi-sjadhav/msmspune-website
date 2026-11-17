"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingAcademicObjects } from "./FloatingAcademicObjects";
import { ProgramHeroCard } from "./ProgramHeroCard";
import { SpecializationCards } from "./SpecializationCards";
import { LearningOutcomes } from "./LearningOutcomes";
import { CareerOpportunities } from "./CareerOpportunities";
import { AdmissionEligibility } from "./AdmissionEligibility";

export function WhatCanIStudySection() {
  return (
    <section
      id="what-can-i-study"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#1C0308] via-[#2A050D] to-[#20040A] text-[#FAF3E8] overflow-hidden select-none border-t border-[#C69A60]/20"
    >
      {/* 3D Floating Academic Objects & Ambient Flares */}
      <FloatingAcademicObjects />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">
        
        {/* 1. Hero Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3.5 max-w-3xl mx-auto"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/35 text-[#E0BA85] text-xs font-bold tracking-wider uppercase shadow-md">
            <span>Academic Programmes & Specializations</span>
          </div>

          {/* Main Section Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[62px] font-extrabold text-[#FAF3E8] tracking-tight leading-[1.08]">
            What Can I Study?
          </h2>

          {/* MBA-Focused Introduction */}
          <p className="text-sm sm:text-lg text-[#E0BA85]/95 font-medium leading-relaxed max-w-2xl mx-auto">
            Discover our flagship Master of Business Administration (MBA) program affiliated to Savitribai Phule Pune University (SPPU) and approved by AICTE. Engineered with rigorous case pedagogy, dual specializations, and deep corporate immersion.
          </p>

          {/* Decorative Gold Flourish: ─── ◆ ─── */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="w-2.5 h-2.5 rotate-45 bg-[#C69A60]" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>
        </motion.div>

        {/* 2. Flagship MBA Programme Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <ProgramHeroCard />
        </motion.div>

        {/* 3. Five Interactive Specialization Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <SpecializationCards />
        </motion.div>

        {/* 4. "What Will You Learn?" Competency Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <LearningOutcomes />
        </motion.div>

        {/* 5. "Where Can Your MBA Take You?" Career Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <CareerOpportunities />
        </motion.div>

        {/* 6. Admission Criteria, Eligibility & Prominent Apply Now */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <AdmissionEligibility />
        </motion.div>

      </div>
    </section>
  );
}

export default WhatCanIStudySection;
