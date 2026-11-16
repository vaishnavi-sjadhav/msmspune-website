"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PlacementSection } from "@/components/sections/PlacementSection";
import { RecruitersMarquee } from "@/components/sections/RecruitersMarquee";
import { Footer } from "@/components/layout/Footer";
import { EnquiryModal } from "@/components/ui/EnquiryModal";
import { Briefcase, Building2, PhoneCall, Award } from "lucide-react";

export default function PlacementsPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#c89650] selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      <main className="flex-1">
        {/* Placement Hero / Showcase */}
        <PlacementSection />

        {/* Our Esteemed Recruiting Partners Marquee */}
        <RecruitersMarquee />

        {/* Training & Placement Cell Commitment */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#fcfaf7] border border-[#f0e4d2] rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#dfb271] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                  Career Readiness Training
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rigorous mock interviews, aptitude bootcamps, and executive soft-skills workshops aligned with industry expectations.
                </p>
              </div>

              <div className="bg-[#fcfaf7] border border-[#f0e4d2] rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#dfb271] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                  Corporate Partnerships
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over 150+ national and global corporate tie-ups offering internships, live projects, and pre-placement offers.
                </p>
              </div>

              <div className="bg-[#fcfaf7] border border-[#f0e4d2] rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#0c363b] text-[#dfb271] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0c363b]">
                  100% Placement Assistance
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated placement officers guiding each student toward career milestones tailored to their specializations.
                </p>
              </div>
            </div>

            {/* Recruiter & Student CTA Banner */}
            <div className="mt-12 bg-gradient-to-r from-[#0c363b] to-[#072628] rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold">
                  Recruit Top Talent from MSMS Pune
                </h4>
                <p className="text-sm text-gray-300 mt-1 max-w-xl">
                  Invite our versatile MBA, PGDM, and MCA students for campus placements and summer internships.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsEnquiryOpen(true)}
                  className="bg-[#ebb14e] hover:bg-[#dfa037] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Connect with Placement Cell</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
