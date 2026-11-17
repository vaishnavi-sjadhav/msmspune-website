"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function StudentSuccessCarousel() {
  const allStudents = [
    {
      name: "Sneha Patil",
      specialization: "MBA – Finance",
      company: "Bajaj Finserv",
      role: "Relationship Manager",
      batch: "Batch: 2025-26",
      photo: "/placements/student-sneha.jpg",
      companyLogo: "/placements/recruiter-bajaj.png",
    },
    {
      name: "Rohit Deshmukh",
      specialization: "MBA – Marketing",
      company: "HDFC Bank",
      role: "Area Sales Manager",
      batch: "Batch: 2025-26",
      photo: "/placements/student-rohit.jpg",
      companyLogo: "/placements/recruiter-hdfc.png",
    },
    {
      name: "Vaishnavi More",
      specialization: "MBA – HR",
      company: "Adecco",
      role: "HR Executive",
      batch: "Batch: 2025-26",
      photo: "/placements/student-vaishnavi.jpg",
      companyLogo: "/placements/recruiter-adecco.png",
    },
    {
      name: "Sanket Kulkarni",
      specialization: "MBA – Operations",
      company: "Cosmos Bank",
      role: "Operations Executive",
      batch: "Batch: 2025-26",
      photo: "/placements/student-sanket.jpg",
      companyLogo: "/placements/recruiter-cosmos.png",
    },
    {
      name: "Pooja Jadhav",
      specialization: "MBA – Finance",
      company: "John Deere",
      role: "Financial Analyst",
      batch: "Batch: 2025-26",
      photo: "/placements/student-pooja.jpg",
      companyLogo: "/placements/recruiter-johndeere.png",
    },
    {
      name: "Amit Shinde",
      specialization: "MBA – Marketing",
      company: "Infosys",
      role: "Associate Consultant",
      batch: "Batch: 2025-26",
      photo: "/placements/student-amit.jpg",
      companyLogo: "/placements/recruiter-infosys.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 >= allStudents.length - itemsPerPage + 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? allStudents.length - itemsPerPage : prev - 1));
  };

  const visibleStudents = allStudents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-[#25040B] via-[#3D0C16] to-[#2A050D] text-[#FAF3E8] border-b border-[#C69A60]/30 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C69A60]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12 relative">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#C69A60]/20 border border-[#C69A60]/40 text-[#C69A60] text-xs font-bold uppercase tracking-wider mb-3">
            Our Recent Placements
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#FAF3E8] tracking-tight">
            Celebrating Our Students&apos; Success
          </h2>
          <div className="w-16 h-1 bg-[#C69A60] mx-auto mt-2.5 rounded-full" />

          {/* Right link on large screens */}
          <Link
            href="/admissions/enquiry"
            className="sm:absolute sm:right-0 sm:bottom-0 mt-4 sm:mt-0 text-xs sm:text-sm font-semibold text-[#C69A60] hover:text-[#FAF3E8] transition-colors flex items-center gap-1 group"
          >
            <span>View All Placements</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous students"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#5B1525] hover:bg-[#721B2F] border border-[#C69A60]/50 text-[#FAF3E8] flex items-center justify-center shadow-xl transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Student Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {visibleStudents.map((st, idx) => (
                <motion.div
                  key={st.name + idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl bg-[#FAF3E8] text-[#2D070F] p-5 shadow-2xl border border-[#E0D0BA] flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div>
                    {/* Student Portrait Box */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-4 shadow-inner border border-[#E8DEC9]">
                      <Image
                        src={st.photo}
                        alt={st.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Name & Specialization */}
                    <h3 className="font-serif text-lg font-bold text-[#3D0C16] group-hover:text-[#A06C30] transition-colors leading-snug">
                      {st.name}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                      {st.specialization}
                    </p>
                  </div>

                  {/* Company & Role Box */}
                  <div className="mt-4 pt-3 border-t border-[#E8DEC9] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#3D0C16]">{st.company}</span>
                      <span className="text-[10.5px] text-neutral-500">{st.batch}</span>
                    </div>
                    <div className="text-xs text-neutral-700 bg-white px-3 py-1.5 rounded-xl border border-[#E8DEC9] font-medium truncate">
                      {st.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next students"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#5B1525] hover:bg-[#721B2F] border border-[#C69A60]/50 text-[#FAF3E8] flex items-center justify-center shadow-xl transition-all cursor-pointer active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
