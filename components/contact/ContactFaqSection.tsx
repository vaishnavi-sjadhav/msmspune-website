"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the eligibility criteria for MBA at Matrix?",
      answer:
        "Candidates must hold a Bachelor's Degree in any discipline with a minimum of 50% aggregate marks (45% for reserved category candidates from Maharashtra State). A valid qualifying score in MAH-MBA CET, CAT, CMAT, XAT, MAT, or ATMA is required for CAP round allotment.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "Admission to our two-year full-time MBA program is conducted primarily through the Maharashtra State CET Cell Centralized Admission Process (CAP) under DTE Choice Code MB6179. You can also visit our campus counseling desk or fill out the online enquiry form for institutional round guidance.",
    },
    {
      question: "Does Matrix provide hostel facilities?",
      answer:
        "Yes, Matrix provides dedicated, fully secured separate residential hostel accommodation for both male and female students with 24/7 CCTV surveillance, Wi-Fi connectivity, hot water, hygienic mess dining, and on-campus medical care facilities.",
    },
    {
      question: "How can I contact the Placement Cell?",
      answer:
        "You can directly reach out to our Corporate Relations & Placement Cell via email at placements@matrix.edu.in or by calling our direct desk at +91 20 2435 6000. Campus recruiters can also register using our dedicated Partner with Placement Cell portal.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#FAF3E8] pb-14 sm:pb-20 text-[#3D0C16]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Header Row with Title & "View All FAQs" Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#3D0C16] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5B1525]/80 mt-1 font-medium">
              Find quick answers to common queries.
            </p>
          </div>

          <Link
            href="/admissions#faq"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-[#3D0C16] border border-[#C69A60] bg-white/60 hover:bg-[#C69A60] hover:text-white transition-all shadow-sm w-fit shrink-0"
          >
            <span>View All FAQs</span>
            <span>→</span>
          </Link>
        </div>

        {/* 2-Column Grid: Left Accordions, Right 3D Books & Cap Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: 4 Accordions */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-[#C69A60]/30 bg-white shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="font-serif text-sm sm:text-base font-bold text-[#3D0C16] group-hover:text-[#8A253A] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-base font-bold shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#C69A60] text-white rotate-45"
                          : "bg-[#FAF3E8] text-[#5B1525] group-hover:bg-[#C69A60]/20"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#3D0C16]/80 leading-relaxed border-t border-[#C69A60]/15">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: 3D Graduation Cap & Books curved alcove */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-[36px] bg-gradient-to-br from-[#5B1525] via-[#450C17] to-[#2D070F] p-8 sm:p-10 border border-[#C69A60]/40 shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center">
              {/* Golden Ambient Arc Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C69A60]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#C69A60]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative w-full h-[220px] sm:h-[260px]">
                <Image
                  src="/contact/3d-books-cap.png"
                  alt="3D Graduation Cap on Stack of Classic Leather Books"
                  fill
                  className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-4 z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C69A60]">
                  Academic Excellence
                </span>
                <p className="font-serif text-sm sm:text-base font-semibold text-[#FAF3E8] mt-0.5">
                  Your Master’s Degree Awaits
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
