"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#c89650] selection:text-white">
      {/* 1. Floating Frosted Glass Navbar over Hero */}
      <Navbar variant="hero-glass" onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* 2. Main Page Content (Full-bleed Hero with 5s Auto-Slider) */}
      <main className="flex-1">
        <HeroSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* About Section (Shaping Future Leaders Through Quality Management Education) */}
        <AboutSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />

        {/* Welcome Section with 3 Academic Feature Cards */}
        <WelcomeSection />

        {/* Matrix Events Section (Staggered Cards) */}
        <EventsSection />

        {/* News & Updates Section with Degree Scroll & Notices */}
        <NewsSection />

        {/* Contact Us Section (Location, Details & Interactive Form) */}
        <ContactSection />
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
