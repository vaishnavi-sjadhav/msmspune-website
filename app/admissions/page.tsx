"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  Download,
  GraduationCap,
  Award,
  TrendingUp,
  School,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { ADMISSIONS_DATA } from "@/data/admissions";

export default function AdmissionsPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Eligibility");

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee] text-slate-850 selection:bg-[#c89650] selection:text-white">
      {/* 1. Main Navigation Header */}
      <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* 3. Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#051c1f] via-[#082a2e] to-[#05181a] text-white text-center overflow-hidden">
        {/* Background Image Layer with Vignette */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image
            src="/images/contact-campus-bg.jpg"
            alt="Matrix School of Management Studies Pune Campus"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 space-y-4">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white drop-shadow-md">
            {ADMISSIONS_DATA.hero.title}
          </h1>
          <p className="text-sm sm:text-base font-medium text-[#dfb271] tracking-wide">
            {ADMISSIONS_DATA.hero.subtitle}
          </p>

          {/* Floating Navigation Pill Bar */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg gap-1">
              {ADMISSIONS_DATA.hero.navItems.map((item) => {
                const isActive = activeNav === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveNav(item.label)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#caa04c] text-slate-950 shadow-md font-bold"
                        : "text-gray-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Admissions Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 sm:space-y-16">
        {/* ============================================================== */}
        {/* 01 / ADMISSION ELIGIBILITY */}
        {/* ============================================================== */}
        <section id="eligibility" className="space-y-4 scroll-mt-24">
          <h2 className="font-bold text-sm tracking-wider text-slate-900 uppercase">
            <span className="text-[#c89650]">01 / </span>
            {ADMISSIONS_DATA.eligibility.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Library Students Image */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden shadow-md border border-white bg-slate-200">
              <Image
                src={ADMISSIONS_DATA.eligibility.image}
                alt="Students studying in the management library"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right: Criteria & Entrance Tests */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              {/* Top 2 Golden Percentage Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* General Category Card */}
                <div className="bg-[#caa04c] text-slate-950 p-5 rounded-2xl shadow-md flex items-center justify-between gap-3">
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold block leading-none">
                      {ADMISSIONS_DATA.eligibility.generalCriteria.percentage}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider block mt-1">
                      {ADMISSIONS_DATA.eligibility.generalCriteria.label}
                    </span>
                    <span className="text-[11px] opacity-80 block">
                      {ADMISSIONS_DATA.eligibility.generalCriteria.category}
                    </span>
                  </div>
                  <GraduationCap className="w-10 h-10 opacity-70 stroke-[1.5]" />
                </div>

                {/* Reserved Categories Card */}
                <div className="bg-[#d4a853] text-slate-950 p-5 rounded-2xl shadow-md flex items-center justify-between gap-3">
                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold block leading-none">
                      {ADMISSIONS_DATA.eligibility.reservedCriteria.percentage}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider block mt-1">
                      {ADMISSIONS_DATA.eligibility.reservedCriteria.label}
                    </span>
                    <span className="text-[11px] opacity-80 block">
                      {ADMISSIONS_DATA.eligibility.reservedCriteria.category}
                    </span>
                  </div>
                  <Award className="w-10 h-10 opacity-70 stroke-[1.5]" />
                </div>
              </div>

              {/* Accepted Entrance Tests Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8decf] space-y-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide">
                  {ADMISSIONS_DATA.eligibility.entranceTestsTitle}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {ADMISSIONS_DATA.eligibility.entranceTests.map((test) => (
                    <span
                      key={test}
                      className="px-4 py-2 rounded-full bg-[#0c363b] text-white text-xs font-bold tracking-wide shadow-xs"
                    >
                      {test}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 02 / THE SELECTION PROCESS */}
        {/* ============================================================== */}
        <section id="process" className="space-y-4 scroll-mt-24">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-sm tracking-wider text-slate-900 uppercase">
              <span className="text-[#c89650]">02 / </span>
              {ADMISSIONS_DATA.selectionProcess.title}
            </h2>
            <span className="text-xs font-bold text-[#b5883d] bg-[#f2e7d3] px-3 py-1 rounded-full border border-[#e4d4ba]">
              {ADMISSIONS_DATA.selectionProcess.dteCode}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {ADMISSIONS_DATA.selectionProcess.steps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8decf] space-y-2 relative group hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#caa04c] tracking-wider uppercase">
                    {step.step} /
                  </span>
                  <span className="text-xl">
                    {idx === 0 && "📝"}
                    {idx === 1 && "📑"}
                    {idx === 2 && "📋"}
                    {idx === 3 && "🎓"}
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-slate-900 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 03 / FEES & FINANCIAL ASSISTANCE */}
        {/* ============================================================== */}
        <section id="fees" className="space-y-4 scroll-mt-24">
          <h2 className="font-bold text-sm tracking-wider text-slate-900 uppercase">
            <span className="text-[#c89650]">03 / </span>
            {ADMISSIONS_DATA.fees.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Table: FRA-Approved Fee Structure (lg:col-span-6) */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#e8decf] flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-serif text-sm font-bold text-slate-900 mb-3">
                  {ADMISSIONS_DATA.fees.tableTitle}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="bg-[#f7f2e7] text-slate-800 font-bold border-b border-[#e5dccb]">
                        {ADMISSIONS_DATA.fees.headers.map((h) => (
                          <th key={h} className="p-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {ADMISSIONS_DATA.fees.rows.map((row) => (
                        <tr key={row.particulars} className="hover:bg-gray-50/60">
                          <td className="p-2.5 font-medium text-slate-700">
                            {row.particulars}
                          </td>
                          <td className="p-2.5 font-semibold text-slate-900">
                            {row.general}
                          </td>
                          <td className="p-2.5 font-semibold text-slate-900">
                            {row.obc}
                          </td>
                          <td className="p-2.5 font-semibold text-[#caa04c]">
                            {row.scst}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Download Fee Circular Button */}
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0c363b] hover:bg-[#072428] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-xs transition"
              >
                <Download className="w-4 h-4 text-[#dfb271]" />
                <span>{ADMISSIONS_DATA.fees.circularPdfText}</span>
              </button>
            </div>

            {/* Scholarships & Waivers (lg:col-span-3) */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#e8decf] space-y-4">
              <h4 className="font-serif text-sm font-bold text-slate-900">
                {ADMISSIONS_DATA.scholarships.title}
              </h4>

              <div className="space-y-3.5 text-xs">
                {ADMISSIONS_DATA.scholarships.items.map((item, idx) => (
                  <div key={item.title} className="p-3 rounded-xl bg-[#faf6ee] border border-[#eee3d1] space-y-1">
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      {idx === 0 ? "💰" : "🎓"}
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Merit Awards & Bank Loan (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
              {/* Merit Based Awards */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8decf] flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif text-sm font-bold text-slate-900">
                    {ADMISSIONS_DATA.scholarships.awardsTitle}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    {ADMISSIONS_DATA.scholarships.awardsDesc}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#caa04c]/20 border border-[#caa04c]/40 flex items-center justify-center text-[#caa04c] shrink-0 font-bold text-xs">
                  BADGES
                </div>
              </div>

              {/* Bank Loan Facilitation */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8decf] flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif text-sm font-bold text-slate-900">
                    {ADMISSIONS_DATA.scholarships.loanTitle}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                    {ADMISSIONS_DATA.scholarships.loanDesc}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0c363b]/10 border border-[#0c363b]/30 flex items-center justify-center text-[#0c363b] shrink-0 font-bold text-xs text-center leading-none">
                  Bank Loan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 04 & 05 / WHY CHOOSE MATRIX & DOCUMENTS CHECKLIST */}
        {/* ============================================================== */}
        <section id="documents" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch scroll-mt-24">
          {/* Section 04: Why Choose Matrix (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-bold text-sm tracking-wider text-slate-900 uppercase">
              <span className="text-[#c89650]">04 / </span>
              {ADMISSIONS_DATA.whyChoose.title}
            </h2>

            <div className="bg-[#0c363b] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-[calc(100%-2rem)] space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#dfb271]">100%</span>
                  <span className="text-sm font-bold">Placement Support</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-medium">
                  <TrendingUp className="w-5 h-5 text-[#dfb271] shrink-0" />
                  <span>Industry-Aligned Curriculum</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-medium">
                  <School className="w-5 h-5 text-[#dfb271] shrink-0" />
                  <span>Top-tier Campus & Faculty</span>
                </div>
              </div>

              {/* Seminar Photo Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/20 bg-slate-900">
                <Image
                  src={ADMISSIONS_DATA.whyChoose.seminarImage}
                  alt="Interactive Business Seminar at Matrix School of Management Studies"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/70 p-2 text-center text-[11px] font-semibold text-gray-200">
                  {ADMISSIONS_DATA.whyChoose.seminarLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Section 05: Required Documents Checklist (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-bold text-sm tracking-wider text-slate-900 uppercase">
              <span className="text-[#c89650]">05 / </span>
              {ADMISSIONS_DATA.documentsChecklist.title}
            </h2>

            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#e8decf] h-[calc(100%-2rem)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {ADMISSIONS_DATA.documentsChecklist.groups.map((grp) => (
                  <div key={grp.title} className="space-y-3">
                    <h4 className="font-serif text-sm font-bold text-slate-900 border-b border-gray-100 pb-1.5">
                      {grp.title}
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {grp.docs.map((doc) => (
                        <li key={doc} className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            defaultChecked={false}
                            className="mt-0.5 rounded border-gray-300 text-[#0c363b] focus:ring-[#0c363b]"
                          />
                          <span className="leading-snug">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 06 / READY TO TAKE THE LEAP? (CTA BANNER) */}
        {/* ============================================================== */}
        <section className="bg-gradient-to-r from-[#072428] via-[#0c363b] to-[#072428] text-white rounded-3xl p-7 sm:p-10 shadow-2xl space-y-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {ADMISSIONS_DATA.cta.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            {/* 1. Fast-Response Helpdesk */}
            <div className="space-y-3 px-0 md:px-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#caa04c] text-slate-950 flex items-center justify-center font-bold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {ADMISSIONS_DATA.cta.helpdeskTitle}
                  </h4>
                  <p className="text-xs text-gray-300">
                    {ADMISSIONS_DATA.cta.helpdeskSubtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`tel:${ADMISSIONS_DATA.cta.phone}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#caa04c]" />
                  <span>Call Admissions</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#caa04c]" />
                  <span>Request Callback</span>
                </button>
              </div>
            </div>

            {/* 2. Visit Us */}
            <div className="space-y-3 px-0 md:px-4 pt-4 md:pt-0">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#caa04c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Visit Us</h4>
                  <p className="text-xs text-gray-300 leading-snug mt-0.5">
                    {ADMISSIONS_DATA.cta.address}
                  </p>
                  <a
                    href={ADMISSIONS_DATA.cta.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#caa04c] hover:text-white mt-1.5 group"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Apply Online Now CTA */}
            <div className="flex justify-center md:justify-end px-0 md:px-4 pt-4 md:pt-0">
              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#caa04c] hover:bg-[#b88c3a] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                APPLY ONLINE NOW
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* Interactive Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
