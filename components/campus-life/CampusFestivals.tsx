"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CampusFestivals() {
  const fests = [
    {
      name: "Matrix Fiesta",
      tag: "Annual Mega Cultural Fest",
      date: "February Every Year",
      desc: "A 3-day cultural spectacle attracting over 4,000+ students from 50+ colleges across Maharashtra. Highlights include Battle of the Bands, Panache Fashion Show, EDM Night, and Choreography Competitions.",
      image: "/campus-life/cultural-fest.jpg",
      stats: "4,000+ Footfall • 50+ Colleges",
    },
    {
      name: "Manthan: National B-School Conclave",
      tag: "Flagship Management Case Battle",
      date: "October Every Year",
      desc: "Our marquee national business competition testing strategic thinking, financial valuation, and product innovation. Evaluated by senior partners from McKinsey, Deloitte, and ICICI.",
      image: "/campus-life/auditorium.jpg",
      stats: "₹ 5 Lakhs Prize Pool • 120+ Teams",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#20040A] text-[#FAF3E8] relative overflow-hidden border-t border-[#C69A60]/20">
      
      {/* Ambient Radial Golden Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[350px] bg-[#C69A60]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C69A60]/15 border border-[#C69A60]/30 text-[#E0BA85] text-xs font-bold uppercase tracking-wider">
            Campus Traditions
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FAF3E8] tracking-tight">
            Flagship Fests &amp; Conclaves
          </h2>
          <p className="text-sm sm:text-base text-[#FAF3E8]/85 font-medium leading-relaxed">
            Where celebration meets intellectual rivalry. Participate in high-stakes corporate competitions and unforgettable cultural nights.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-[#C69A60]" />
          </div>
        </div>

        {/* 2 Flagship Showcase Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fests.map((fest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl bg-white/[0.04] border border-[#C69A60]/30 overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:border-[#C69A60] transition-all duration-300 shadow-xl"
            >
              <div className="relative w-full h-64 overflow-hidden bg-neutral-900">
                <Image
                  src={fest.image}
                  alt={fest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A] via-[#20040A]/40 to-transparent" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#3D0C16]/90 backdrop-blur-md border border-[#C69A60]/40 text-[#E0BA85] text-xs font-bold">
                  {fest.date}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-[#E0BA85] uppercase tracking-wider block">
                    {fest.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-sm mt-0.5">
                    {fest.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
                  {fest.desc}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E0BA85]">{fest.stats}</span>
                  <span className="text-xs text-neutral-400 font-semibold group-hover:text-white transition-colors">
                    Annual Tradition →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CampusFestivals;
