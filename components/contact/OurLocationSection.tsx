"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function OurLocationSection() {
  const [showLiveEmbed, setShowLiveEmbed] = useState(false);

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Matrix+School+of+Management+Studies+Ambegaon+Pune";

  return (
    <section id="our-location" className="bg-[#FAF3E8] pb-14 sm:pb-20 text-[#3D0C16]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Address & Directions Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold text-[#3D0C16] tracking-tight">
                Our Location
              </h2>
              <p className="text-xs sm:text-sm text-[#5B1525]/80 mt-2 font-medium">
                Find us easily at our Pune campus.
              </p>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#C69A60]/30 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#5B1525]/10 text-[#8A253A] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#3D0C16]">
                  Matrix School of Management Studies
                </h4>
                <p className="text-xs text-[#3D0C16]/75 leading-relaxed">
                  Near Sinhgad Road, Ambegaon (Bk), Pune, Maharashtra – 411041
                </p>
                <p className="text-[11px] text-[#C69A60] font-semibold pt-1">
                  Landmark: Near Pune-Bangalore Highway Bypass
                </p>
              </div>
            </div>

            {/* Travel Times / Quick Insights */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/60 border border-[#C69A60]/20">
                <span className="block text-[11px] text-[#3D0C16]/60">Pune Railway Station</span>
                <span className="font-bold text-[#3D0C16]">approx. 14 km (35 mins)</span>
              </div>
              <div className="p-3 rounded-xl bg-white/60 border border-[#C69A60]/20">
                <span className="block text-[11px] text-[#3D0C16]/60">Pune Airport (PNQ)</span>
                <span className="font-bold text-[#3D0C16]">approx. 22 km (50 mins)</span>
              </div>
            </div>

            {/* Get Directions Button */}
            <div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-[#3D0C16] bg-gradient-to-r from-[#C69A60] via-[#DEB887] to-[#E0BA85] hover:brightness-105 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Get Directions</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Campus Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#C69A60]/40 shadow-[0_15px_35px_rgba(61,12,22,0.1)] bg-white aspect-[16/10] sm:aspect-[16/9] group">
              {showLiveEmbed ? (
                <iframe
                  title="Google Maps Campus View"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.444747761002!2d73.83401567597143!3d18.463511170914902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29583765e90df%3A0x6b8956976722d56!2sMatrix%20School%20of%20Management%20Studies!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src="/contact/campus-map.png"
                    alt="Matrix Campus Location Map"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Styled Campus Pin Overlay (matching mockup) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-white/95 px-4 py-2.5 rounded-2xl shadow-xl border border-[#C69A60]/40 backdrop-blur-md">
                    <div className="w-8 h-8 rounded-full bg-[#8A253A] text-white flex items-center justify-center shrink-0 shadow-md">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-bold text-[#3D0C16]">
                        Matrix School of
                      </span>
                      <span className="block text-[11px] font-medium text-[#5B1525]">
                        Management Studies
                      </span>
                    </div>
                  </div>

                  {/* Top-Right Toggle & External Map Link */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => setShowLiveEmbed(true)}
                      className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-white/90 text-[#3D0C16] shadow-md hover:bg-white border border-[#C69A60]/40 transition-colors"
                      title="Load Interactive Google Map"
                    >
                      Interactive Map
                    </button>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#3D0C16] flex items-center justify-center shadow-md border border-[#C69A60]/40 transition-transform active:scale-95"
                      aria-label="Open in Google Maps"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
