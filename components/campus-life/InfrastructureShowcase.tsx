"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Facility {
  id: string;
  title: string;
  tagline: string;
  image: string;
  specs: string[];
  description: string;
  highlights: string;
}

export function InfrastructureShowcase() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  const facilities: Facility[] = [
    {
      id: "classrooms",
      title: "Digital Amphitheater Classrooms",
      tagline: "Ergonomic, Tiered Acoustic Lecture Theaters",
      image: "/campus-life/smart-classrooms.jpg",
      description:
        "Engineered for the Harvard case method pedagogy. Every amphitheater is equipped with dual ultra-HD laser projectors, automated digital lecture capture, and individual power consoles at each student seat.",
      specs: [
        "Capacity: 80–120 Tiered Executive Seats",
        "Dual 4K Laser Projection & Interactive Smart Displays",
        "Acoustic Wall Paneling & Noise Dampening Flooring",
        "Automated Hybrid Cloud Lecture Recording",
      ],
      highlights: "12 Tiered Theaters",
    },
    {
      id: "library",
      title: "Central Knowledge Hub & Digital Library",
      tagline: "25,000+ Print Volumes & Global Research Gateways",
      image: "/campus-life/central-library.jpg",
      description:
        "A sanctuary for scholarly research and quiet reflection. Spans two air-conditioned levels featuring Bloomberg Terminals, CMIE Prowess databases, EBSCO, Harvard Business Review archives, and private discussion pods.",
      specs: [
        "Over 25,000 Textbooks & Reference Titles",
        "Full-Text Access to EBSCO, J-Gate & DELNET",
        "Dedicated Financial Analytics & Bloomberg Desk",
        "Individual Silent Cubicles & Group Study Rooms",
      ],
      highlights: "25,000+ Volumes",
    },
    {
      id: "tech-lab",
      title: "Advanced AI & Analytics Computing Lab",
      tagline: "High-Performance Data Science Infrastructure",
      image: "/campus-life/tech-lab.jpg",
      description:
        "Equipped with 120+ high-end compute workstations running enterprise-grade analytics software including Python, R, SPSS, Tableau, and Microsoft PowerBI for decision science modeling.",
      specs: [
        "120+ Dell OptiPlex Core i7 Workstations",
        "Licensed Enterprise Software: SPSS, PowerBI, Tableau",
        "1 Gbps Dedicated Symmetrical Leased Line",
        "AWS & Google Cloud Student Sandbox Access",
      ],
      highlights: "120+ Workstations",
    },
    {
      id: "auditorium",
      title: "The Grand Air-Conditioned Auditorium",
      tagline: "600-Capacity Stage for National Conclaves",
      image: "/campus-life/auditorium.jpg",
      description:
        "The focal point of grand university events, global CEO addresses, TEDx conferences, and corporate recruitment presentations. Features professional acoustic engineering and cinematic lighting.",
      specs: [
        "600 Plush Push-Back Push-Button Recliner Seats",
        "Concert-Grade Line-Array Audio Engineering",
        "Motorized Wide-Format Cyclorama Screen",
        "Dedicated VIP Green Rooms & Media Press Gallery",
      ],
      highlights: "600 Seater Arena",
    },
  ];

  return (
    <section id="infrastructure" className="py-20 sm:py-28 bg-[#FAF3E8] text-[#3D0C16] relative overflow-hidden">
      
      {/* Decorative Subtle Background Circuit/Architectural Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M20 50h60M50 20v60" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E1B]/10 border border-[#4A0E1B]/20 text-[#4A0E1B] text-xs font-bold uppercase tracking-wider">
            World-Class Infrastructure
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#3D0C16] tracking-tight">
            Designed for Modern Executive Learning
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            Step inside a campus built to inspire. Every space at Matrix blends technological sophistication with ergonomic comfort to elevate your management learning experience.
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="w-12 h-px bg-[#C69A60]" />
            <span className="w-2 h-2 rotate-45 bg-[#C69A60]" />
            <span className="w-12 h-px bg-[#C69A60]" />
          </div>
        </div>

        {/* 4 Infrastructure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => (
            <motion.div
              key={fac.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl bg-white border border-[#C69A60]/30 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container with Floating Badge */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-neutral-900">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Metric Badge */}
                <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-[#3D0C16]/90 backdrop-blur-md border border-[#C69A60]/40 text-[#E0BA85] text-xs font-bold tracking-wide shadow-md">
                  {fac.highlights}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-[#E0BA85] font-semibold tracking-wider uppercase block">
                    Matrix Facility
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white drop-shadow-sm">
                    {fac.title}
                  </h3>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {fac.description}
                </p>

                {/* Specs List */}
                <div className="pt-2 border-t border-neutral-100 space-y-1.5">
                  {fac.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                      <span className="text-[#C69A60] font-bold">✔</span>
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Modal Button */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-medium italic">
                    {fac.tagline}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedFacility(fac)}
                    className="px-4 py-2 rounded-full text-xs font-bold text-[#3D0C16] bg-[#FAF3E8] hover:bg-[#3D0C16] hover:text-[#FAF3E8] border border-[#C69A60]/40 transition-colors cursor-pointer"
                  >
                    View Specs →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Facility Specs Modal */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-[#C69A60]/40 shadow-2xl relative text-[#3D0C16]"
            >
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 border border-[#C69A60]/30 shadow-inner">
                <Image
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#3D0C16] text-[#E0BA85] text-[10px] font-bold uppercase tracking-wider mb-1">
                {selectedFacility.highlights}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3D0C16]">
                {selectedFacility.title}
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                {selectedFacility.description}
              </p>

              <div className="mt-4 p-4 rounded-2xl bg-[#FAF3E8] border border-[#C69A60]/30 space-y-2">
                <span className="text-xs font-bold text-[#4A0E1B] uppercase tracking-wider block">
                  Technical Specifications &amp; Features:
                </span>
                <ul className="text-xs text-neutral-800 space-y-1.5">
                  {selectedFacility.specs.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C69A60] font-bold mt-0.5">✔</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="px-6 py-2 rounded-full text-xs font-bold text-white bg-[#3D0C16] hover:bg-[#5B1525] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default InfrastructureShowcase;
