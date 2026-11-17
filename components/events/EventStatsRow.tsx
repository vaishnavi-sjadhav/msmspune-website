"use client";

import React from "react";
import { motion } from "framer-motion";

export function EventStatsRow() {
  const stats = [
    {
      id: "events",
      number: "50+",
      label: "Events Conducted",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "students",
      number: "10K+",
      label: "Student Participation",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "partners",
      number: "100+",
      label: "Industry Partners",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "experiences",
      number: "Countless",
      label: "Learning Experiences",
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13c-3 0-7-2-7-5V6a2 2 0 012-2h10a2 2 0 012 2v10c0 3-4 5-7 5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#FAF3E8] pt-4 pb-12 sm:pb-16 text-[#3D0C16]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white/85 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#C69A60]/30 shadow-[0_6px_20px_rgba(61,12,22,0.06)] hover:shadow-[0_12px_28px_rgba(198,154,96,0.18)] hover:border-[#C69A60]/60 transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Maroon Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5B1525] to-[#3D0C16] border border-[#C69A60]/40 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>

              {/* Number & Label */}
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3D0C16] block leading-none tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-[#5B1525]/80 mt-1 block">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
