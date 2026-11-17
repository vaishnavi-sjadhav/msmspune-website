import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Admission Overview | Matrix School of Management Studies",
  description: "Begin your MBA journey with Matrix School of Management Studies, Pune. Explore admissions highlights, process, and program details.",
};

export default function AdmissionOverviewPage() {
  const highlights = [
    { title: "Merit-Based Admission", desc: "Transparent criteria governed by Maharashtra CET Cell", icon: "🎓" },
    { title: "CET Cell Process", desc: "Centralized CAP rounds for seat allotment", icon: "📑" },
    { title: "Quality Education", desc: "SPPU affiliated curriculum with industry focus", icon: "🏛️" },
    { title: "Excellent Placements", desc: "Top recruiters with dedicated career guidance", icon: "💼" },
  ];

  const steps = [
    { num: 1, title: "Appear for CET Exam", desc: "MAH-MBA CET / CAT / CMAT" },
    { num: 2, title: "CAP Process", desc: "Register for DTE CAP Rounds" },
    { num: 3, title: "Document Verification", desc: "Scrutiny at ARC / Facilitation Center" },
    { num: 4, title: "Final Admission", desc: "Seat confirmation & reporting" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#3D0C16] text-[#FAF3E8]">
      <Navbar />

      <main className="flex-1 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#3D0C16] via-[#4D111E] to-[#3D0C16]">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#5B1525]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Page Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/50 text-[#C69A60] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Step 1</span>
              <span>•</span>
              <span>Admission Overview</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Subtitle & Buttons */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.12]">
                  Begin Your Journey <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                    with Matrix
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed">
                  Shape your future with a premier management education at Matrix School of Management Studies, Pune. Rooted in academic rigor, corporate networking, and leadership development.
                </p>

                {/* CTA Buttons (Matches Panel 1) */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/admissions/enquiry"
                    className="px-7 py-3 rounded-full text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#E0BA85] to-[#C69A60] hover:brightness-110 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Apply Now →
                  </Link>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 backdrop-blur-sm transition-all"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#C69A60] text-[#3D0C16] flex items-center justify-center text-xs">
                      ▶
                    </span>
                    <span>Explore MBA</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D MBA Book & Graduation Cap Hero Illustration */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] rounded-3xl p-4 bg-gradient-to-tr from-[#5B1525]/80 to-[#2D070F]/80 border border-[#C69A60]/40 shadow-2xl backdrop-blur-md flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[at_center] from-[#C69A60]/20 to-transparent pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/admissions/3d-overview.png"
                      alt="3D MBA Books and Graduation Cap"
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
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

        {/* Section 2: About MBA Program Card */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#4D111E]/90 to-[#320710]/90 border border-[#C69A60]/30 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#C69A60]/30">
                <Image
                  src="/hero1.webp"
                  alt="Matrix Campus Building"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-[#FAF3E8] bg-[#3D0C16]/80 px-2.5 py-1 rounded-md border border-[#C69A60]/40">
                  Matrix Pune Campus
                </div>
              </div>

              <div className="md:col-span-7 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                  About MBA Program
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Postgraduate management program at Matrix School of Management Studies, with an unwavering focus on academic excellence, business innovation, experiential leadership, and holistic personal development.
                </p>
                <div className="pt-2">
                  <Link
                    href="/admissions/eligibility"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#3D0C16] bg-[#C69A60] hover:bg-[#E0BA85] transition-all shadow-md"
                  >
                    <span>Check Eligibility</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Admission Highlights */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-12">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
              Admission Highlights
            </h2>
            <div className="w-16 h-1 bg-[#C69A60] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-[#C69A60]/30 hover:border-[#C69A60] transition-all duration-300 shadow-lg hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-serif text-base font-bold text-[#FAF3E8] group-hover:text-[#C69A60] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Your Admission Process at Matrix (Timeline) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-14">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
              Your Admission Process at Matrix
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Four streamlined steps to confirm your MBA seat
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((st) => (
              <div
                key={st.num}
                className="relative p-5 rounded-2xl bg-[#5B1525]/40 border border-[#C69A60]/30 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C69A60] to-[#E0BA85] text-[#3D0C16] font-bold text-base flex items-center justify-center shadow-lg mb-3">
                  {st.num}
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#FAF3E8]">
                  {st.title}
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-snug">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Bottom CTA Banner */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-14">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 bg-gradient-to-r from-[#5B1525] via-[#450C17] to-[#2D070F] border border-[#C69A60]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Take the First Step Toward Your Future
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-lg">
                Join our vibrant cohort of ambitious professionals. Applications for academic year 2026-27 are now open.
              </p>
            </div>
            <Link
              href="/admissions/enquiry"
              className="px-8 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-xl transition-all shrink-0"
            >
              Start Admission →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
