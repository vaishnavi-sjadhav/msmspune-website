"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { QuickContactCards } from "./QuickContactCards";
import { CampusAndEnquiryForm } from "./CampusAndEnquiryForm";

export function HomeContactSection() {
  return (
    <section id="contact" className="bg-[#FAF3E8] pt-14 sm:pt-20 pb-4 text-[#3D0C16] relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#5B1525]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Block */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10 space-y-2.5"
        >
          {/* "Get in Touch" Pill Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-white border border-[#C69A60]/70 text-[#C69A60] text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>Get in Touch</span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl font-extrabold text-[#3D0C16] tracking-tight">
            Contact &amp; Admissions Desk
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#5B1525]/85 font-medium max-w-xl mx-auto leading-relaxed">
            We&apos;re here to help! Reach out to us for any queries related to admissions, programs or campus visits.
          </p>

          {/* Decorative Gold Flourish */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#C69A60]" />
          </div>
        </motion.div>
      </div>

      {/* 1. Four Quick Contact Cards */}
      <QuickContactCards className="pt-2 pb-8 sm:pb-12" />

      {/* 2. Two-Column Campus & Send Us a Message Form */}
      <CampusAndEnquiryForm className="pb-10 sm:pb-14" />

      {/* Bottom Helpful Link to dedicated /contact page */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center pb-8 relative z-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] bg-white border border-[#C69A60]/60 hover:bg-[#C69A60] hover:text-white transition-all shadow-sm group"
        >
          <span>Need campus map directions, travel details, or FAQs?</span>
          <span className="group-hover:translate-x-1 transition-transform text-[#8A253A] group-hover:text-white font-extrabold">
            View Full Contact Page →
          </span>
        </Link>
      </div>
    </section>
  );
}

export default HomeContactSection;
