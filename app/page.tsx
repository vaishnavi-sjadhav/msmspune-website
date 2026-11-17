import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { UpcomingEventsSection } from "@/components/events";
import { HomeContactSection } from "@/components/contact";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "MSMS Pune | Empowering Minds, Brewing Futures",
  description:
    "Matrix School of Management Studies (MSMS Pune): A premier management institution in Pune. Explore our MBA programs, admissions, faculty, placements, upcoming events, and campus contact desk.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Video Background & Audio Controls */}
        <HeroSection />

        {/* 2. Cinematic 3D About Us Section (NAAC Plaque & Leadership Book) */}
        <AboutSection />

        {/* 3. 3D CoverFlow Upcoming Events Section */}
        <UpcomingEventsSection />

        {/* 4. Contact & Admissions Desk Section */}
        <HomeContactSection />
      </main>

      {/* University Footer with fotter.png background */}
      <Footer />
    </div>
  );
}
