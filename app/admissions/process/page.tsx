import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Admission Process | Matrix School of Management Studies",
  description: "Step-by-step admission process for MBA at Matrix Pune: CET exam, DTE CAP rounds, document verification, and seat confirmation.",
};

export default function AdmissionProcessPage() {
  const processSteps = [
    {
      step: "01",
      title: "Appear for CET Examination",
      summary: "Take the Maharashtra CET for MBA admissions.",
      details: [
        "Register for MAH-MBA/MMS CET conducted by the State Common Entrance Test Cell, Maharashtra.",
        "Candidates with valid CAT, CMAT, MAT, XAT, or ATMA scores are also eligible for All India Seats.",
        "Download scorecard upon declaration of entrance exam results.",
      ],
      icon: "📑",
      badge: "Entrance Exam",
    },
    {
      step: "02",
      title: "CAP Process",
      summary: "Participate in Centralized Admission Process (CAP).",
      details: [
        "Register online on the official CET Cell CAP portal (mahacet.org).",
        "Upload scanned academic credentials and category certificates.",
        "Lock institutional choice codes during option form filling (Matrix Choice Code: MB6179).",
      ],
      icon: "💻",
      badge: "Choice Code: MB6179",
    },
    {
      step: "03",
      title: "Document Verification",
      summary: "Submit required documents for scrutiny & verification.",
      details: [
        "Choose e-Scrutiny or Physical Scrutiny mode at assigned Facilitation Centers (FC / ARC).",
        "Verify mark sheets, entrance scorecard, domicile, and caste validity certificates.",
        "Receive verified acknowledgment receipt and check Provisional/Final Merit List rank.",
      ],
      icon: "🔍",
      badge: "Scrutiny Center",
    },
    {
      step: "04",
      title: "Seat Allotment & Confirmation",
      summary: "Get your seat and confirm admission.",
      details: [
        "Check seat allotment status released across CAP Rounds I, II, and III.",
        "Select 'Freeze' to accept Matrix School of Management Studies allotment.",
        "Pay Seat Acceptance Fee online and report to Matrix campus with original documents to finalize admission.",
      ],
      icon: "✅",
      badge: "Campus Reporting",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#3D0C16] text-[#FAF3E8]">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#3D0C16] via-[#4D111E] to-[#3D0C16]">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Page Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/50 text-[#C69A60] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Step 3</span>
              <span>•</span>
              <span>Admission Process</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.15]">
                  Your Path to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                    Matrix
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed">
                  A simple and transparent admission process governed by the Directorate of Technical Education (DTE) Maharashtra and State CET Cell.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/admissions/documents"
                    className="px-7 py-3 rounded-full text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-lg transition-all"
                  >
                    View Required Documents →
                  </Link>
                  <Link
                    href="/admissions/fees"
                    className="px-6 py-3 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 transition-all"
                  >
                    Fee Structure
                  </Link>
                </div>
              </div>

              {/* Right Column: Campus Staircase / Architecture */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden border border-[#C69A60]/40 shadow-2xl group">
                  <Image
                    src="/hero1.webp"
                    alt="Matrix School of Management Studies Campus Entry"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0C16] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#3D0C16]/80 backdrop-blur-md border border-[#C69A60]/30 text-xs">
                    <span className="text-[#C69A60] font-bold block">Centralized Admission Process</span>
                    <span className="text-white/80">Affiliated to SPPU • DTE Code: MB6179</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Interactive Vertical Timeline (Matches Panel 3) */}
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="relative space-y-8 before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-[#C69A60] before:via-[#E0BA85] before:to-[#C69A60] before:opacity-50">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Milestone Circle Badge in Center */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-tr from-[#C69A60] to-[#E0BA85] text-[#3D0C16] font-bold text-base flex items-center justify-center shadow-xl border-4 border-[#3D0C16] z-10 shrink-0">
                    {step.step}
                  </div>

                  {/* Step Content Card */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#4D111E]/80 to-[#2D070F]/80 border border-[#C69A60]/30 hover:border-[#C69A60] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group">
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{step.icon}</span>
                        <span className="text-[10.5px] font-bold text-[#3D0C16] bg-[#C69A60] px-2.5 py-0.5 rounded-full">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF3E8] group-hover:text-[#C69A60] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#FAF3E8]/90 font-medium mt-1">
                        {step.summary}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-white/10 pt-3">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-white/75 leading-relaxed">
                            <span className="text-[#C69A60] font-bold shrink-0 mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Bottom Banner (Matches Panel 3) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5B1525] via-[#450C17] to-[#2D070F] border border-[#C69A60]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Start Your Admission Journey
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Need guidance on option form filling or CAP allotment? Our counseling cell is here to assist.
              </p>
            </div>
            <Link
              href="/admissions/enquiry"
              className="px-8 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-xl transition-all shrink-0"
            >
              Apply Now →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
