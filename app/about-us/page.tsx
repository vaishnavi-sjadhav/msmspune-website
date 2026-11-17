import React from "react";
import { Navbar } from "@/components/navbar";
import {
  AboutSection,
  LegacySection,
  VisionMissionSection,
} from "@/components/about";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "About Us | Matrix School of Management Studies",
  description:
    "Learn about the foundation, leadership, NAAC B+ accreditation, legacy, and vision & mission of Matrix School of Management Studies, established in 2010 by Prof. M. N. Navale.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#3D0C16] text-[#FAF3E8]">
      {/* Universal Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Cinematic 3D NAAC Accreditation & Leadership Book Hero */}
        <AboutSection />

        {/* 2. Our Legacy: Building Leaders, Shaping Futures & 3D Campus Frame */}
        <LegacySection />

        {/* 3. Our Vision & Mission with 3D Target Pedestal & Angled Cards */}
        <VisionMissionSection />
      </main>

      {/* Universal Footer with fotter.png Background */}
      <Footer />
    </div>
  );
}
