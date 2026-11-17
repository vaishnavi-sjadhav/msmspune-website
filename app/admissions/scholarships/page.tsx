import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Scholarships | Matrix School of Management Studies",
  description: "Explore merit-based scholarships, MahaDBT government schemes, EBC concessions, and financial aid at Matrix Pune.",
};

export default function ScholarshipsPage() {
  const schemes = [
    {
      title: "Merit-Based Scholarship",
      benefit: "Up to 50% Tuition Fee Waiver",
      desc: "Awarded to high percentile rank holders in MAH-MBA CET (90+ percentile) and national entrance exams (CAT/CMAT), acknowledging academic rigor and brilliance.",
      icon: "🎖️",
      eligibility: "Top CET Percentile Holders",
    },
    {
      title: "Government Scholarship (MahaDBT)",
      benefit: "50% to 100% Fee Reimbursement",
      desc: "Administered through the Government of Maharashtra MahaDBT portal for EBC, OBC, SC, ST, VJ/NT, SBC, and EWS category candidates with verified documentation.",
      icon: "🏛️",
      eligibility: "Maharashtra Domicile & Category",
    },
    {
      title: "Special Category & Defense Grants",
      benefit: "Custom Financial Assistance",
      desc: "Dedicated fee grants for wards of Indian Armed Forces personnel, national-level sports medalists, physically challenged scholars, and single girl child empowerment.",
      icon: "🤝",
      eligibility: "Defense / Sports / PwD",
    },
  ];

  const eligibilityPoints = [
    "Candidate must possess Maharashtra Domicile certificate (for State Govt. scholarships).",
    "Annual family income must not exceed ₹8,00,000 for EBC and OBC scholarship applicants.",
    "Candidate must maintain minimum 75% attendance and clean academic standing in every semester.",
    "Mandatory linking of Aadhaar card with nationalized bank account enabled for NPCI direct benefit transfer.",
    "Online application on mahadbt.maharashtra.gov.in within the prescribed timeline following college admission.",
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
              <span>Step 6</span>
              <span>•</span>
              <span>Scholarships</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.15]">
                  Scholarship <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                    Opportunities
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed">
                  Rewarding talent and supporting bright minds. Matrix believes that financial constraints should never hinder ambitious management aspirants from fulfilling their career goals.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/admissions/enquiry"
                    className="px-7 py-3 rounded-full text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-lg transition-all"
                  >
                    Check Scholarship Eligibility →
                  </Link>
                  <a
                    href="https://mahadbt.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 transition-all flex items-center gap-2"
                  >
                    <span>MahaDBT Portal</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Golden Trophy with Laurels and Cap */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl p-6 bg-gradient-to-tr from-[#5B1525]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-2xl backdrop-blur-md flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[at_center] from-[#C69A60]/25 to-transparent pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/admissions/3d-scholarships.png"
                      alt="3D Golden Trophy with Laurels and Cap"
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

        {/* Section 2: Available Scholarship Schemes (Matches Panel 6) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-10">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
              Available Scholarship Schemes
            </h2>
            <div className="w-16 h-1 bg-[#C69A60] mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schemes.map((scheme, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#4D111E]/80 to-[#2D070F]/80 border border-[#C69A60]/30 hover:border-[#C69A60] shadow-xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C69A60]/20 border border-[#C69A60]/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {scheme.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF3E8] group-hover:text-[#C69A60] transition-colors">
                    {scheme.title}
                  </h3>
                  <div className="mt-2 text-xs font-bold text-[#3D0C16] bg-[#C69A60] px-2.5 py-0.5 rounded-full inline-block">
                    {scheme.benefit}
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mt-3 leading-relaxed">
                    {scheme.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#C69A60]">
                  <span>{scheme.eligibility}</span>
                  <span>Active</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Eligibility & Application with 3D Stack of Books (Matches Panel 6) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-12">
          <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-[#4D111E]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Guidelines Checklist */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  <h3 className="font-serif text-2xl font-bold text-[#FAF3E8]">
                    Eligibility & Application Guidelines
                  </h3>
                </div>

                <div className="space-y-3">
                  {eligibilityPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#C69A60]/20 text-[#C69A60] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#C69A60]/40">
                        ✓
                      </span>
                      <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 3D Stack of Books Illustration */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-44 h-40 sm:w-52 sm:h-44 rounded-2xl p-2 bg-[#5B1525]/30 border border-[#C69A60]/30 flex items-center justify-center">
                  <Image
                    src="/admissions/3d-books.png"
                    alt="3D Stack of Academic Books"
                    fill
                    className="object-contain filter drop-shadow-lg"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Bottom Banner (Matches Panel 6) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-14">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5B1525] via-[#450C17] to-[#2D070F] border border-[#C69A60]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Explore Scholarship Details
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Our scholarship helpdesk assists you in completing the MahaDBT online submission seamlessly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admissions/enquiry"
                className="px-8 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-xl transition-all shrink-0"
              >
                Enquire Now →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
