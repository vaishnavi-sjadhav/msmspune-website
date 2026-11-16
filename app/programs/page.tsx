"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { PROGRAMS_DATA, SpecializationProgram } from "@/data/programs";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeSyllabusProgram, setActiveSyllabusProgram] = useState<SpecializationProgram | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const programsList = Array.isArray(PROGRAMS_DATA) ? PROGRAMS_DATA : [];
  const filteredPrograms =
    selectedCategory === "all"
      ? programsList
      : programsList.filter((p) => p && p.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is the Dual Specialization advantage at Matrix School of Management Studies?",
      a: "Under the Savitribai Phule Pune University (SPPU) revised curriculum, Matrix offers a flexible Major + Minor combination. A student can choose a core major such as Marketing or Finance, paired with a functional minor such as Business Analytics, Operations, or HR. This multiplies corporate placement opportunities across diverse industry verticals.",
    },
    {
      q: "Which entrance examinations are accepted for MBA admission?",
      a: "Admissions are conducted through the Maharashtra State CET Cell Centralized Admission Process (CAP). We accept valid non-zero scores in MAH-MBA-CET, CAT, CMAT, MAT, XAT, and ATMA. Our official DTE Institute Code is 6634.",
    },
    {
      q: "How does the 10-week Summer Internship Project (SIP) work?",
      a: "At the end of Semester II, every student undergoes a mandatory 10-week corporate internship with top multinational and domestic enterprises. The college's corporate relations cell assists in securing stipend-backed projects, culminating in a university dissertation defense.",
    },
    {
      q: "Are the programs affiliated with Pune University and AICTE?",
      a: "Yes. All MBA and MCA programs offered by Matrix School of Management Studies are approved by the All India Council for Technical Education (AICTE), New Delhi, Directorate of Technical Education (DTE), Government of Maharashtra, and permanently affiliated with Savitribai Phule Pune University (SPPU).",
    },
    {
      q: "Does Matrix offer Ph.D. guidance and research support?",
      a: "Yes. Matrix is an officially recognized Research Centre of Savitribai Phule Pune University. We offer doctoral research fellowships, access to high-speed digital research repositories (EBSCO, J-Gate, Bloomberg terminals), and guidance from seasoned professors.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-800 selection:bg-[#c89650] selection:text-white">
      {/* 1. Main Navigation Header */}
      <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* 3. Hero Section with Cinematic Panoramic Campus View */}
      <section className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-center overflow-hidden bg-[#041618]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/programs-hero-banner.jpg"
            alt="Matrix School of Management Studies Academic Campus"
            fill
            priority
            className="object-cover object-center scale-105"
          />
        </div>

        {/* Multi-layer Dark Teal Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031518]/95 via-[#062024]/85 to-[#031518]/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#031518]/60 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center space-y-5">
          {/* Kicker with Gold Lines */}
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md border border-[#ebb14e]/40 px-4 py-1.5 rounded-full">
            <span className="w-6 h-[2px] bg-[#ebb14e]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ebb14e] uppercase font-sans">
              ACADEMIC EXCELLENCE • DTE CODE: 6634
            </span>
            <span className="w-6 h-[2px] bg-[#ebb14e]" />
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Transformative Programs <br />
            Engineered for <span className="text-[#ebb14e] italic font-serif">Executive Leadership</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Savitribai Phule Pune University affiliated & AICTE approved MBA dual-specializations,
            enterprise MCA, and doctoral research designed for the digital corporate era.
          </p>

          {/* 4 Stat Badges */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            <div className="bg-black/45 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#ebb14e]">
                100%
              </span>
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                SPPU University Degree
              </span>
            </div>
            <div className="bg-black/45 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#ebb14e]">
                Dual Major
              </span>
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                Flexible Combinations
              </span>
            </div>
            <div className="bg-black/45 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#ebb14e]">
                ₹24 LPA
              </span>
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                Highest Placement
              </span>
            </div>
            <div className="bg-black/45 backdrop-blur-md border border-white/15 p-3 rounded-xl text-center">
              <span className="block font-serif text-xl sm:text-2xl font-bold text-[#ebb14e]">
                150+
              </span>
              <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                Recruiting Partners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dual Specialization Strategic Advantage Banner */}
      <section className="relative -mt-6 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#062428] via-[#0c363b] to-[#062428] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white border border-[#ebb14e]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ebb14e]">
              <Sparkles className="w-4 h-4 text-[#ebb14e]" />
              <span>THE MATRIX ADVANTAGE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Dual Specialization Framework (Major + Minor)
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Why settle for one domain? Graduate with an industry-favored dual competency. Combine
              Marketing with Business Analytics, Finance with FinTech, or Operations with Supply
              Chain Strategy to maximize your corporate marketability.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-[#ebb14e] hover:bg-[#dfa037] text-slate-950 font-bold text-xs uppercase px-6 py-3 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              Apply for Batch 2026-28
            </button>
            <a
              href="#programs-grid"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs uppercase px-6 py-3 rounded-full transition-all"
            >
              Explore Specializations ↓
            </a>
          </div>
        </div>
      </section>

      {/* 5. Category Filter Navigation Bar */}
      <section id="programs-grid" className="pt-14 sm:pt-20 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
                Academic Portfolio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c363b]">
                Explore Our Specializations
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 no-scrollbar">
              {[
                { id: "all", label: "All Programs" },
                { id: "mba", label: "MBA Dual Specializations" },
                { id: "mca", label: "MCA Computing" },
                { id: "phd", label: "Ph.D. Research" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === tab.id
                      ? "bg-[#0c363b] text-white shadow-md border border-[#c89650]/50"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Programs Showcase Cards Grid */}
      <section className="py-6 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredPrograms && filteredPrograms.length > 0 ? (
              filteredPrograms.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Header with Badge and Package Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062024]/90 via-[#062024]/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-[#062024]/90 backdrop-blur-md border border-[#ebb14e]/60 text-[#ebb14e] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {program.badge}
                    </span>
                  </div>

                  {/* Top Right Duration */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      <Clock className="w-3 h-3 text-[#ebb14e]" />
                      {program.duration.split("(")[0]}
                    </span>
                  </div>

                  {/* Bottom Image Stats Bar */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                    <div>
                      <span className="text-slate-300 text-[10px] uppercase tracking-wider block">
                        Highest CTC
                      </span>
                      <span className="font-serif font-bold text-base text-[#ebb14e]">
                        {program.highestPackage}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-300 text-[10px] uppercase tracking-wider block">
                        Intake Capacity
                      </span>
                      <span className="font-semibold text-xs text-white">
                        {program.intake}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#c89650] font-semibold">
                      <span>SPPU Affiliated</span>
                      <span>•</span>
                      <span>DTE Code: {program.dteCode}</span>
                    </div>
                    <h4 className="font-serif text-2xl sm:text-2xl font-bold text-[#0c363b] group-hover:text-[#b5883d] transition-colors">
                      {program.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Key Electives & Curriculum Modules */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Key Curriculum Modules & Electives
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(program.keyElectives || []).slice(0, 4).map((elective, idx) => (
                        <span
                          key={idx}
                          className="bg-[#faf6ee] text-[#0c363b] text-[11px] font-medium px-2.5 py-1 rounded-md border border-[#c89650]/20"
                        >
                          {elective}
                        </span>
                      ))}
                      {(program.keyElectives || []).length > 4 && (
                        <span className="bg-gray-100 text-slate-600 text-[11px] font-medium px-2 py-1 rounded-md">
                          +{(program.keyElectives || []).length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Career Roles & Prospects */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Target Career Roles
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700">
                      {(program.careerRoles || []).slice(0, 3).map((role, rIdx) => (
                        <span key={rIdx} className="inline-flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c89650]" />
                          <span>{role}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top Recruiters Badges */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                        Frequent Recruiters
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-slate-700">
                        {(program.topRecruiters || []).slice(0, 4).map((recruiter, recIdx) => (
                          <span
                            key={recIdx}
                            className="bg-gray-50 border border-gray-200 px-2 py-0.5 rounded text-[11px]"
                          >
                            {recruiter}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveSyllabusProgram(program)}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#0c363b] text-[#0c363b] hover:bg-[#0c363b] hover:text-white text-xs font-semibold tracking-wide transition-all cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>View Full Syllabus</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEnquiryOpen(true)}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0c363b] hover:bg-[#072628] text-white text-xs font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
                    >
                      <span>Apply for Program</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ebb14e]" />
                    </button>
                  </div>
                </div>
              </div>
            ))
            ) : (
              <div className="col-span-1 lg:col-span-2 text-center py-12 text-slate-500">
                No programs found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. Curriculum Pedagogy & Learning Ecosystem */}
      <section className="py-16 sm:py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
              ACADEMIC PEDAGOGY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0c363b]">
              Beyond Textbooks: A 360° Management Ecosystem
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our curriculum blends Harvard case studies, interactive simulations, and direct C-suite
              mentorship so graduates are Day-1 corporate ready.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#c89650]/30 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                Harvard & Ivey Case Method
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Analyze over 200+ real-world Harvard Business Publishing cases across boardroom strategy,
                supply disruption, and brand turnaround.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#c89650]/30 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                Analytics & Bloomberg Labs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Master quantitative tools including Python, Tableau, SPSS, and live Bloomberg market data
                terminals for data-backed strategy.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#c89650]/30 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                10-Week Corporate SIP
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandatory paid corporate summer internship with Fortune 500s, concluding with a
                comprehensive university dissertation defense.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#c89650]/30 space-y-3 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#ebb14e] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                C-Suite Mentorship Network
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Personalized 1-on-1 career guidance, mock board interviews, and executive roundtables
                with Fortune 500 business leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-16 sm:py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c89650]">
              GOT QUESTIONS?
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#0c363b]">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 text-sm">
              Everything you need to know about academic curriculum, eligibility, and dual specializations.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50"
                  >
                    <span className="font-serif font-bold text-base text-[#0c363b]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c89650] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 bg-[#faf8f5]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Bottom Conversion CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#062024] via-[#0c363b] to-[#062024] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ebb14e]">
            ADMISSIONS OPEN • BATCH 2026-2028
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Ready to Accelerate Your Corporate Leadership Journey?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Take the definitive step towards high-impact management careers. Apply online through CAP
            Code 6634 or connect with an admissions counselor today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="bg-[#ebb14e] hover:bg-[#dfa037] text-slate-950 font-bold text-xs uppercase px-8 py-3.5 rounded-full shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              Apply Online Now
            </button>
            <Link
              href="/admissions"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs uppercase px-8 py-3.5 rounded-full transition-all"
            >
              View Eligibility & Fees →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Interactive Semester-by-Semester Syllabus Modal */}
      {activeSyllabusProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-[#0c363b] text-white px-6 py-4 flex items-center justify-between border-b border-[#c89650]/40">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#ebb14e]" />
                <div>
                  <h4 className="font-serif font-bold text-lg text-white">
                    {activeSyllabusProgram.title}
                  </h4>
                  <p className="text-xs text-[#ebb14e]">
                    Savitribai Phule Pune University (SPPU) Curriculum • {activeSyllabusProgram.duration}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveSyllabusProgram(null)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close syllabus modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Semester Breakdown */}
            <div className="p-6 overflow-y-auto space-y-6">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeSyllabusProgram.description}
              </p>

              <div className="space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0c363b]">
                  Semester-by-Semester Course Outline
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(activeSyllabusProgram.semesterOutline || []).map((sem, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#faf8f5] p-4 rounded-xl border border-[#c89650]/30 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-[#0c363b]">
                          {sem.sem}
                        </span>
                        <span className="text-[10px] font-semibold text-[#c89650] uppercase tracking-wider">
                          {sem.focus}
                        </span>
                      </div>
                      <ul className="space-y-1 text-xs text-slate-700 pt-1">
                        {(sem.courses || []).map((course, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="text-[#c89650] font-bold">•</span>
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                Official Savitribai Phule Pune University (SPPU) Curriculum Framework
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveSyllabusProgram(null)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSyllabusProgram(null);
                    setIsEnquiryOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0c363b] hover:bg-[#072628] text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  <span>Apply for this Program</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ebb14e]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
