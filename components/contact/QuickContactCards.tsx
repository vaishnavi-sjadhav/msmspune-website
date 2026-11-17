"use client";

import React from "react";
import { motion } from "framer-motion";

export function QuickContactCards({ className = "pt-4 pb-12 sm:pb-16" }: { className?: string } = {}) {
  const cards = [
    {
      id: "call",
      icon: (
        <svg className="w-5 h-5 text-[#8A253A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      primary: "+91-20-xxxx xxxx",
      secondary: "(Mon – Sat, 9 AM – 6 PM)",
      href: "tel:+912024356000",
    },
    {
      id: "email",
      icon: (
        <svg className="w-5 h-5 text-[#8A253A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      primary: "admissions@matrix.edu.in",
      secondary: "We reply within 24 hours",
      href: "mailto:admissions@matrix.edu.in",
    },
    {
      id: "visit",
      icon: (
        <svg className="w-5 h-5 text-[#8A253A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      primary: "Matrix School of Management Studies,",
      secondary: "Pune, Maharashtra – 411001",
      href: "#our-location",
    },
    {
      id: "hours",
      icon: (
        <svg className="w-5 h-5 text-[#8A253A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Office Hours",
      primary: "Mon – Sat 9 AM – 6 PM",
      secondary: "Sunday: Closed",
      href: null,
    },
  ];

  return (
    <section className={`bg-[#FAF3E8] text-[#3D0C16] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {cards.map((card, idx) => {
            const Content = (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="h-full bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#C69A60]/30 shadow-[0_6px_20px_rgba(61,12,22,0.06)] hover:shadow-[0_12px_28px_rgba(198,154,96,0.18)] hover:border-[#C69A60]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Circular Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#FAF3E8] border border-[#C69A60]/40 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-[#C69A60]/15 transition-all shadow-sm">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#3D0C16] mb-1.5">
                    {card.title}
                  </h3>

                  {/* Primary Info */}
                  <p className="text-xs sm:text-sm font-semibold text-[#5B1525] group-hover:text-[#8A253A] transition-colors leading-snug break-words">
                    {card.primary}
                  </p>
                </div>

                {/* Secondary Info */}
                <p className="text-[11.5px] text-[#3D0C16]/65 mt-2 font-medium">
                  {card.secondary}
                </p>
              </motion.div>
            );

            if (card.href) {
              return (
                <a key={card.id} href={card.href} className="block h-full">
                  {Content}
                </a>
              );
            }

            return <div key={card.id} className="h-full">{Content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
