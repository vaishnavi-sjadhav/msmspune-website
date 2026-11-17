import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";
import {
  PlacementHero,
  PlacementHighlights,
  StudentSuccessCarousel,
  RecruitersMarquee,
  PlacementProcess,
  PlacementActivities,
  AlumniTestimonials,
  PartnerWithCell,
} from "@/components/placements";

export const metadata = {
  title: "Placements | Matrix School of Management Studies",
  description:
    "Explore MBA placements at Matrix School of Management Studies: 2150+ students placed, 350+ recruiting companies, 12 LPA highest package, and top recruiters like Bajaj Finserv, HDFC Bank, Infosys, TCS, and Adecco.",
};

export default function PlacementsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#3D0C16] text-[#FAF3E8]">
      {/* Primary University Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero: Where Talent Meets Opportunity */}
        <PlacementHero />

        {/* 2. Key Stats & Batch Year Filter Tabs */}
        <PlacementHighlights />

        {/* 3. Celebrating Our Students' Success Carousel */}
        <StudentSuccessCarousel />

        {/* 4. Esteemed Recruiters Logo Marquee & Grid */}
        <RecruitersMarquee />

        {/* 5. Structured Placement Process & Career Staircase */}
        <PlacementProcess />

        {/* 6. Campus Placement Activities Gallery */}
        <PlacementActivities />

        {/* 7. Alumni Testimonials */}
        <AlumniTestimonials />

        {/* 8. Partner with Placement Cell CTA Banner */}
        <PartnerWithCell />
      </main>

      {/* University Footer */}
      <Footer />
    </div>
  );
}
