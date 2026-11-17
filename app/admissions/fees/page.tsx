"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export default function FeeStructurePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const charges = [
    { title: "Tuition Fee (Annual)", amount: "₹ 1,12,000", note: "Approved by FRA, Govt. of Maharashtra" },
    { title: "Development Fee (Annual)", amount: "₹ 13,000", note: "Campus labs, digital library & infra" },
    { title: "Library Caution Deposit", amount: "₹ 5,000", note: "One-time, 100% Refundable" },
    { title: "University Eligibility & Exam Fees", amount: "₹ 3,500", note: "As per SPPU norms per annum" },
    { title: "Student Activities & Gymkhana", amount: "₹ 2,500", note: "Industry seminars & campus conclaves" },
  ];

  const categoryBreakdown = [
    { category: "Open / General", fee: "100% Tuition + Development", payable: "₹ 1,25,000*" },
    { category: "OBC / EBC / SEBC", fee: "50% Tuition Fee Concession (MahaDBT)", payable: "₹ 69,000*" },
    { category: "SC / ST Category", fee: "100% Tuition & Dev. Fee Waiver", payable: "Exam / Univ Only*" },
    { category: "VJNT / SBC / TFWS", fee: "100% Tuition Fee Waiver (MahaDBT)", payable: "₹ 13,000*" },
  ];

  const faqs = [
    {
      q: "When is the fee payment deadline?",
      a: "The seat confirmation fee must be paid during reporting to the Institute following CAP seat allotment within the designated CET Cell schedule dates. Remaining tuition fees can be paid as per the institutional installment calendar.",
    },
    {
      q: "Is there any concession or scholarship available?",
      a: "Yes! Candidates eligible for State Government scholarships (EBC, OBC, SC, ST, NT, SBC, EWS) receive direct reimbursement via the MahaDBT portal. Institutional merit scholarships are also awarded to top CET/CAT rank holders.",
    },
    {
      q: "Can fees be paid in installments?",
      a: "Yes, Matrix School of Management Studies provides flexible semester-wise installment facilities upon formal request to the accounts office at the time of admission.",
    },
    {
      q: "What payment modes are accepted?",
      a: "Fees can be paid online via Net Banking, NEFT/RTGS, UPI/QR Code, or Demand Draft drawn in favor of 'Matrix School of Management Studies' payable at Pune.",
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
              <span>Step 4</span>
              <span>•</span>
              <span>Fee Structure</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.15]">
                  Fee <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                    Structure
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed">
                  Invest in your future with quality education at Matrix. Transparent, government-approved fees with complete scholarship support.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/admissions/scholarships"
                    className="px-7 py-3 rounded-full text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-lg transition-all"
                  >
                    View Scholarships →
                  </Link>
                  <Link
                    href="/admissions/enquiry"
                    className="px-6 py-3 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 transition-all"
                  >
                    Request Fee Breakdown
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Golden Calculator with Coins */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl p-6 bg-gradient-to-tr from-[#5B1525]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-2xl backdrop-blur-md flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[at_center] from-[#C69A60]/20 to-transparent pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/admissions/3d-fees.png"
                      alt="3D Golden Calculator and Coins"
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Gold Corner Accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C69A60]" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C69A60]" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C69A60]" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C69A60]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: MBA Program Fee Card & Category Concessions */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Total Annual Fee Highlight Card (Matches Panel 4) */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-gradient-to-b from-[#5B1525]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🎓</span>
                  <span className="text-[11px] font-bold text-[#3D0C16] bg-[#C69A60] px-3 py-1 rounded-full uppercase tracking-wider">
                    FRA Approved
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#FAF3E8]">
                  MBA Program Fee Details
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  Applicable for Academic Year 2026-27 (2-Year Full-Time SPPU MBA)
                </p>

                <div className="my-6 p-6 rounded-2xl bg-white/5 border border-[#C69A60]/30 text-center">
                  <span className="text-xs text-[#C69A60] font-semibold uppercase tracking-wider block">
                    Interim Total Annual Fee
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF3E8] mt-1">
                    ₹ 1,25,000 <span className="text-sm font-normal text-white/60">/ year</span>
                  </div>
                  <span className="text-[11px] text-white/60 block mt-1">
                    (Subject to final notification by Fee Regulating Authority)
                  </span>
                </div>
              </div>

              {/* Payment Support Note */}
              <div className="p-4 rounded-xl bg-[#C69A60]/10 border border-[#C69A60]/30 flex items-center gap-3">
                <span className="text-2xl">💳</span>
                <div className="text-xs text-white/80">
                  <span className="font-bold text-[#C69A60] block">Installment Facility</span>
                  Fees can be paid through online modes or convenient semester installments.
                </div>
              </div>
            </div>

            {/* Other Applicable Charges Breakdown Table */}
            <div className="lg:col-span-7 p-7 rounded-3xl bg-gradient-to-b from-[#4D111E]/80 to-[#2D070F]/80 border border-[#C69A60]/30 shadow-xl backdrop-blur-md">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF3E8] mb-4">
                Other Applicable Charges
              </h3>
              
              <div className="divide-y divide-white/10">
                {charges.map((ch, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-[#FAF3E8]">{ch.title}</div>
                      <div className="text-[11px] text-white/60">{ch.note}</div>
                    </div>
                    <div className="font-bold text-sm sm:text-base text-[#C69A60] shrink-0">
                      {ch.amount}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Concessions */}
              <div className="mt-6 pt-5 border-t border-[#C69A60]/30">
                <h4 className="font-serif text-sm font-bold text-[#C69A60] uppercase tracking-wider mb-3">
                  Government Scholarship & Fee Concessions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {categoryBreakdown.map((cat, cIdx) => (
                    <div key={cIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white/90 block">{cat.category}</span>
                        <span className="text-[10px] text-white/60">{cat.fee}</span>
                      </div>
                      <span className="font-bold text-[#C69A60] text-right">{cat.payable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Frequently Asked Questions Accordion (Matches Panel 4) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-12">
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-[#4D111E]/90 to-[#2D070F]/90 border border-[#C69A60]/30 shadow-xl backdrop-blur-md">
            <h3 className="font-serif text-2xl font-bold text-[#FAF3E8] mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#C69A60]/30 overflow-hidden bg-white/5 transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#FAF3E8] hover:text-[#C69A60] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className="w-6 h-6 rounded-full bg-[#C69A60]/20 text-[#C69A60] flex items-center justify-center font-bold text-sm shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: Dual CTA Banner (Matches Panel 4) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5B1525] via-[#450C17] to-[#2D070F] border border-[#C69A60]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Get Fee Details & Apply Now
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Download the complete prospectus and fee schedule approved by the Maharashtra FRA.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admissions/enquiry"
                className="px-6 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-xl transition-all"
              >
                Apply Now →
              </Link>
              <Link
                href="/admissions/enquiry"
                className="px-6 py-3 rounded-full text-sm font-bold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 transition-all"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
