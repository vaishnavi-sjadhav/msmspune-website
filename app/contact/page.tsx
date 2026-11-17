import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/common/Footer";
import {
  ContactHero,
  QuickContactCards,
  CampusAndEnquiryForm,
  OurLocationSection,
  ContactFaqSection,
  StayConnectedBanner,
} from "@/components/contact";

export const metadata = {
  title: "Contact Us | Matrix School of Management Studies",
  description:
    "Get in touch with Matrix School of Management Studies, Pune. Reach out for MBA admissions, eligibility, fee structure, scholarships, campus tours, and corporate relations.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF3E8] text-[#3D0C16]">
      {/* Universal Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero: Get in Touch with Matrix & 3D Location Pin */}
        <ContactHero />

        {/* 2. Four Quick Contact Information Cards */}
        <QuickContactCards />

        {/* 3. Two-Column Row: Our Campus & Send Us a Message Form */}
        <CampusAndEnquiryForm />

        {/* 4. Our Location with Interactive Campus Map */}
        <OurLocationSection />

        {/* 5. Frequently Asked Questions & 3D Books and Cap */}
        <ContactFaqSection />

        {/* 6. Let's Stay Connected Banner */}
        <StayConnectedBanner />
      </main>

      {/* Universal University Footer */}
      <Footer />
    </div>
  );
}
