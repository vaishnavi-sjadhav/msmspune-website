import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Eligibility Criteria | Matrix School of Management Studies",
  description: "Check MBA eligibility requirements, entrance exams accepted (MAH-CET, CAT, CMAT), minimum percentage, and reservation norms.",
};

export default function EligibilityPage() {
  const criteriaCards = [
    {
      title: "Educational Qualification",
      desc: "A Bachelor's degree in any discipline (minimum 3 years duration) awarded by any recognized University with at least 50% marks in aggregate or equivalent CGPA (at least 45% in case of candidates of backward class categories and persons with disability belonging to Maharashtra State only).",
      icon: "🎓",
      highlight: "Min. 50% Marks (45% for Reserved)",
    },
    {
      title: "Entrance Examination",
      desc: "Obtained non-zero positive score in MAH-MBA/MMS-CET conducted by the Competent Authority (State CET Cell, Maharashtra). Valid scores from CAT, CMAT, MAT, XAT, or ATMA are also accepted as per DTE Maharashtra guidelines.",
      icon: "📑",
      highlight: "Valid CET / CAT / CMAT Score",
    },
    {
      title: "Category-Wise Requirements",
      desc: "Reservation benefits and fee concessions are applicable to candidates belonging to SC, ST, VJ/DT, NT-A, NT-B, NT-C, NT-D, OBC, SBC, EWS, and PwD categories with valid Caste Certificate, Validity Certificate, and Non-Creamy Layer Certificate as per Maharashtra Govt. norms.",
      icon: "👥",
      highlight: "Govt. of Maharashtra Norms",
    },
  ];

  const importantNotes = [
    "Candidates must fulfill all eligibility criteria before participating in Centralized Admission Process (CAP).",
    "Final selection and allotment are strictly conducted as per State CET Cell guidelines.",
    "Candidates in the final year of qualifying examination are also eligible to apply on a provisional basis.",
    "Valid Caste Validity Certificate & Non-Creamy Layer (wherever applicable) are mandatory at the time of verification.",
    "For the latest official notifications, seat matrix, and dates, refer to cetcell.mahacet.org.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#3D0C16] text-[#FAF3E8]">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#3D0C16] via-[#4D111E] to-[#3D0C16]">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Page Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/50 text-[#C69A60] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Step 2</span>
              <span>•</span>
              <span>Eligibility Criteria</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.15]">
                  Check Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                    Eligibility
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed">
                  Ensure you meet the academic and entrance examination requirements for our flagship MBA program at Matrix School of Management Studies.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/admissions/process"
                    className="px-7 py-3 rounded-full text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-lg transition-all"
                  >
                    View Admission Process →
                  </Link>
                  <Link
                    href="/admissions/enquiry"
                    className="px-6 py-3 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 transition-all"
                  >
                    Counselor Assistance
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Checklist Clipboard with Seal */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl p-6 bg-gradient-to-tr from-[#5B1525]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-2xl backdrop-blur-md flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[at_center] from-[#C69A60]/20 to-transparent pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/admissions/3d-eligibility.png"
                      alt="3D Checklist Clipboard with Approved Seal"
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative Gold Corners */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C69A60]" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C69A60]" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C69A60]" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C69A60]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 3 Major Eligibility Information Cards */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {criteriaCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#4D111E]/80 to-[#2D070F]/80 border border-[#C69A60]/30 hover:border-[#C69A60] shadow-xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#C69A60]/20 to-[#E0BA85]/10 border border-[#C69A60]/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF3E8] group-hover:text-[#C69A60] transition-colors">
                    {card.title}
                  </h3>
                  <div className="mt-2 inline-block text-[11px] font-bold text-[#3D0C16] bg-[#C69A60] px-2.5 py-0.5 rounded-full">
                    {card.highlight}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Important Notes with 3D Hourglass (Matches Panel 2) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#4D111E]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Checklist on Left */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚠️</span>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF3E8]">
                    Important Eligibility Notes
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {importantNotes.map((note, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C69A60]/20 text-[#C69A60] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#C69A60]/40">
                        ✓
                      </span>
                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3D Hourglass Illustration on Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-36 h-40 sm:w-44 sm:h-48 rounded-2xl p-2 bg-[#5B1525]/30 border border-[#C69A60]/30 flex items-center justify-center">
                  <Image
                    src="/admissions/3d-hourglass.png"
                    alt="3D Hourglass Eligibility Deadlines"
                    fill
                    className="object-contain filter drop-shadow-lg animate-pulse"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Bottom Banner (Matches Panel 2) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5B1525] via-[#450C17] to-[#2D070F] border border-[#C69A60]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Check Your Eligibility Today
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Have questions about your CET cutoff, category validity, or graduation score?
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
