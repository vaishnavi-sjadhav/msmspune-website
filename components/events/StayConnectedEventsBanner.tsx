"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function StayConnectedEventsBanner() {
  return (
    <section className="bg-[#FAF3E8] pb-14 sm:pb-20 text-[#FAF3E8]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#4A0F1D] via-[#5B1525] to-[#3D0C16] border border-[#C69A60]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-1/3 w-72 h-72 bg-[#C69A60]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left + Center: 3D Trophy on Pedestal & Banner Texts */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 text-center sm:text-left z-10">
            {/* 3D Golden Trophy with Ribbon Pedestal */}
            <div className="relative w-28 h-24 sm:w-36 sm:h-28 flex items-center justify-center shrink-0">
              <Image
                src="/events/3d-trophy-pedestal.png"
                alt="3D Golden Trophy on Pedestal"
                width={140}
                height={90}
                className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Banner Titles */}
            <div className="space-y-1.5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF3E8] tracking-tight">
                Stay Connected with Matrix Events
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-md">
                Follow us for the latest updates, workshops and activities.
              </p>
            </div>
          </div>

          {/* Right: Circular Social Media Icons & Follow Us Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 z-10 border-t lg:border-t-0 lg:border-l border-white/15 pt-5 lg:pt-0 lg:pl-8 w-full lg:w-auto">
            {/* Circular Social Icons */}
            <div className="flex items-center gap-3">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow MSMS Events on YouTube"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow MSMS Events on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow MSMS Events on Instagram"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-white/20"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow MSMS Events on Facebook"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.833C10.667 0 9 1.667 9 4.667V8z" />
                </svg>
              </a>
            </div>

            {/* Follow Us Pill Button */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#E0BA85] hover:brightness-110 shadow-md transition-all group"
            >
              <span>Follow Us</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
