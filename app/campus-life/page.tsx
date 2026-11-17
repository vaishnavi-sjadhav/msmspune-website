import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";
import { ConnectWidget } from "@/components/common/ConnectWidget";
import {
  CampusLifeHero,
  InfrastructureShowcase,
  ClubsAndCommittees,
  HostelDiningWellness,
  CampusFestivals,
  CampusLifeGallery,
  CampusVisitCTA,
} from "@/components/campus-life";

export const metadata = {
  title: "Campus Life | Matrix School of Management Studies (MSMS Pune)",
  description:
    "Experience life at Matrix School of Management Studies, Pune. Explore modern digital infrastructure, central library, 25+ student-run clubs, hostels, multi-cuisine dining, sports complexes, and annual fests.",
};

export default function CampusLifePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Universal Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero: Where Ambition Meets Belonging & Key Stat Pillars */}
        <CampusLifeHero />

        {/* 2. World-Class Infrastructure: Smart Classrooms, Library, Tech Labs, Auditorium */}
        <InfrastructureShowcase />

        {/* 3. 25+ Student-Run Leadership Clubs & Autonomous Governance */}
        <ClubsAndCommittees />

        {/* 4. Hostels, Dining, Cafeteria & Athletic Sports Arena */}
        <HostelDiningWellness />

        {/* 5. Flagship Traditions: Matrix Fiesta, Manthan & Synergy */}
        <CampusFestivals />

        {/* 6. Curated Interactive Visual Photo Gallery with Modal Lightbox */}
        <CampusLifeGallery />

        {/* 7. Book a Campus Visit & Admissions Counseling CTA */}
        <CampusVisitCTA />
      </main>

      {/* University Footer */}
      <Footer />

      {/* Floating Interactive Connect Chatbot */}
      <ConnectWidget />
    </div>
  );
}
