"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";

export default function RequiredDocumentsPage() {
  const col1Documents = [
    {
      title: "Academic Certificates (10th, 12th, Graduation)",
      desc: "Original & 3 sets of photocopies of SSC, HSC mark sheets, and semester-wise Bachelor's degree graduation marks cards / passing certificate.",
      category: "Mandatory for All",
    },
    {
      title: "Entrance Exam Score Card (CET / CAT)",
      desc: "Valid scorecard of MAH-MBA/MMS CET 2026 or national exams (CAT, CMAT, MAT, ATMA, XAT).",
      category: "Mandatory for All",
    },
    {
      title: "Identity Proof (Aadhaar / PAN)",
      desc: "Self-attested clear copy of Aadhaar Card and PAN card of the student and parent/guardian.",
      category: "Mandatory for All",
    },
    {
      title: "Domicile & Nationality Certificate",
      desc: "Certificate of Domicile and Indian Nationality issued by the Competent Revenue Authority (or School Leaving Certificate showing Indian nationality).",
      category: "Domicile Verification",
    },
    {
      title: "Transfer Certificate (TC) / Leaving Certificate",
      desc: "Original College Leaving / Transfer Certificate from the last attended institute.",
      category: "Institutional Record",
    },
    {
      title: "Migration Certificate",
      desc: "Required for candidates who graduated from any university other than Savitribai Phule Pune University (SPPU).",
      category: "Out of SPPU University",
    },
  ];

  const col2Documents = [
    {
      title: "Caste Certificate (if applicable)",
      desc: "Issued by the Sub-Divisional Officer / Executive Magistrate of Maharashtra State for SC, ST, VJ/DT, NT, OBC, SBC, SEBC categories.",
      category: "Reserved Categories",
    },
    {
      title: "Caste Validity Certificate",
      desc: "Compulsory document issued by the Divisional Caste Certificate Scrutiny Committee of Maharashtra State.",
      category: "Mandatory for Reserved",
    },
    {
      title: "Non-Creamy Layer Certificate (NCL)",
      desc: "Valid up to 31st March 2027, issued by the competent authority for VJ/DT, NT, OBC, SBC, and SEBC categories.",
      category: "OBC / VJNT / SBC",
    },
    {
      title: "EWS / Income Certificate",
      desc: "Eligibility certificate for Economically Weaker Section or Tahsildar Income Certificate for scholarship claiming.",
      category: "EWS / Scholarship",
    },
    {
      title: "Photographs (Recent Passport Size)",
      desc: "5 recent colored passport-size photographs against a light white background.",
      category: "Identification",
    },
    {
      title: "GAP Certificate (if applicable)",
      desc: "Affidavit on ₹100 stamp paper duly notarized stating the reason for academic or professional gap.",
      category: "If Applicable",
    },
  ];

  const handleDownload = () => {
    alert("Downloading MSMS Pune MBA 2026-27 Required Documents Checklist PDF...");
  };

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
              <span>Step 5</span>
              <span>•</span>
              <span>Required Documents</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-7 space-y-5">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF3E8] leading-[1.15]">
                  Documents Required <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF3E8] via-[#E0BA85] to-[#C69A60]">
                    for Admission
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#FAF3E8]/85 max-w-xl font-normal leading-relaxed">
                  Keep the following documents ready for a smooth, hassle-free verification during DTE CAP rounds and institute confirmation.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={handleDownload}
                    className="px-7 py-3 rounded-full text-sm font-semibold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-lg transition-all flex items-center gap-2"
                  >
                    <span>📥 Download PDF Checklist</span>
                  </button>
                  <Link
                    href="/admissions/enquiry"
                    className="px-6 py-3 rounded-full text-sm font-semibold text-[#FAF3E8] bg-white/10 hover:bg-white/20 border border-[#C69A60]/40 transition-all"
                  >
                    Document Helpdesk
                  </Link>
                </div>
              </div>

              {/* Right Column: 3D Document Folders & Certificate */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-3xl p-6 bg-gradient-to-tr from-[#5B1525]/90 to-[#2D070F]/90 border border-[#C69A60]/40 shadow-2xl backdrop-blur-md flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[at_center] from-[#C69A60]/20 to-transparent pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/admissions/3d-documents.png"
                      alt="3D Document Folders and Certificate with Gold Seal"
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

        {/* Section 2: Two-Column Document Checklist (Matches Panel 5) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Column 1: Academic & Identity Documents */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#4D111E]/80 to-[#2D070F]/80 border border-[#C69A60]/30 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF3E8]">
                    Academic & Identity Documents
                  </h3>
                  <span className="text-xs text-[#C69A60]">Primary Credentials Checklist</span>
                </div>
              </div>

              <div className="space-y-4">
                {col1Documents.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C69A60]/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#C69A60]/20 text-[#C69A60] flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-semibold text-[#FAF3E8]">{doc.title}</h4>
                      </div>
                      <span className="text-[10px] text-[#C69A60] bg-[#C69A60]/15 px-2 py-0.5 rounded-full shrink-0 font-medium">
                        {doc.category}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mt-2 pl-7 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Category, Validity & Special Certificates */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#4D111E]/80 to-[#2D070F]/80 border border-[#C69A60]/30 shadow-xl backdrop-blur-md space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FAF3E8]">
                    Category & Special Certificates
                  </h3>
                  <span className="text-xs text-[#C69A60]">Government & Scholarship Mandates</span>
                </div>
              </div>

              <div className="space-y-4">
                {col2Documents.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C69A60]/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#C69A60]/20 text-[#C69A60] flex items-center justify-center text-xs font-bold shrink-0">
                          ✓
                        </span>
                        <h4 className="text-sm font-semibold text-[#FAF3E8]">{doc.title}</h4>
                      </div>
                      <span className="text-[10px] text-[#C69A60] bg-[#C69A60]/15 px-2 py-0.5 rounded-full shrink-0 font-medium">
                        {doc.category}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mt-2 pl-7 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Download Document Checklist Card (Matches Panel 5) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#5B1525]/90 to-[#320710]/90 border border-[#C69A60]/40 shadow-xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C69A60] to-[#E0BA85] text-[#3D0C16] flex items-center justify-center text-2xl font-bold shrink-0 shadow-lg">
                📥
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF3E8]">
                  Download Document Checklist
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                  Get the complete printable verification checklist in PDF format for CAP rounds.
                </p>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className="px-8 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-lg transition-all shrink-0 cursor-pointer"
            >
              Download PDF →
            </button>
          </div>
        </section>

        {/* Section 4: Bottom Banner (Matches Panel 5) */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-12">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5B1525] via-[#450C17] to-[#2D070F] border border-[#C69A60]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8]">
                Be Ready for a Hassle-Free Admission
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Bring original documents along with 3 self-attested photocopies during reporting.
              </p>
            </div>
            <Link
              href="/admissions/enquiry"
              className="px-8 py-3 rounded-full text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] to-[#E0BA85] hover:brightness-110 shadow-xl transition-all shrink-0"
            >
              Verify Documents with Us →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
